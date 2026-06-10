const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {
    registrarLog
} = require(
    "../services/log.service"
);

const evaluatePassword =
require(
    "../utils/passwordStrength"
);

const register = async (req, res) => {

    try {

        const {
            nombre,
            correo,
            password
        } = req.body;

        const [usuarioExistente] =
        await db.query(

            `
            SELECT *
            FROM usuarios
            WHERE correo = ?
            `,

            [correo]

        );

        if (usuarioExistente.length > 0) {

            return res.status(400).json({

                message:
                "El correo ya está registrado"

            });

        }

        const nivelPassword =
        evaluatePassword(password);

        const passwordHash =
        await bcrypt.hash(
            password,
            10
        );

        await db.query(

            `
            INSERT INTO usuarios
            (
                nombre,
                correo,
                password,
                rol
            )
            VALUES
            (
                ?,?,?,?
            )
            `,

            [
                nombre,
                correo,
                passwordHash,
                "CLIENTE"
            ]

        );

        res.status(201).json({

            message:
            "Usuario registrado correctamente",

            passwordStrength:
            nivelPassword

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message:
            "Error al registrar usuario"

        });

    }

};

const login = async (req, res) => {

    try {

        const {
            correo,
            password
        } = req.body;

        const [usuarios] =
        await db.query(

            `
            SELECT *
            FROM usuarios
            WHERE correo = ?
            `,

            [correo]

        );

        if (usuarios.length === 0) {

            return res.status(404).json({

                message:
                "Usuario no encontrado"

            });

        }

        const usuario =
        usuarios[0];

        const coincide =
        await bcrypt.compare(

            password,

            usuario.password

        );

        if (!coincide) {

            return res.status(401).json({

                message:
                "Contraseña incorrecta"

            });

        }

        const ip =

        req.headers[
        "x-forwarded-for"
        ] ||

        req.socket.remoteAddress;

        const browser =

        req.headers[
        "user-agent"
        ];

        await registrarLog(

            usuario.nombre,

            ip,

            browser,

            "INGRESO"

        );

        const token =
        jwt.sign(

            {

                id: usuario.id,

                nombre: usuario.nombre,

                rol: usuario.rol

            },

            process.env.JWT_SECRET,

            {

                expiresIn: "8h"

            }

        );

        res.status(200).json({

            message:
            "Login exitoso",

            token,

            usuario: {

                id: usuario.id,

                nombre: usuario.nombre,

                correo: usuario.correo,

                rol: usuario.rol

            }

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message:
            "Error al iniciar sesión"

        });

    }

};

const logout = async (req, res) => {

    try {

        const {

            usuario

        } = req.body;

        const ip =

        req.headers[
        "x-forwarded-for"
        ] ||

        req.socket.remoteAddress;

        const browser =

        req.headers[
        "user-agent"
        ];

        await registrarLog(

            usuario,

            ip,

            browser,

            "SALIDA"

        );

        res.status(200).json({

            message:
            "Logout exitoso"

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message:
            "Error al cerrar sesión"

        });

    }

};

module.exports = {

    register,

    login,

    logout

};