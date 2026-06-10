const verifyRole =
(...roles)=>{

    return (req,res,next)=>{

        if(

            !roles.includes(
                req.user.rol
            )

        ){

            return res.status(403).json({

                message:
                "Sin permisos"

            });

        }

        next();

    };

};

module.exports =
verifyRole;