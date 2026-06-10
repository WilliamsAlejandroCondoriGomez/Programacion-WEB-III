const express =
require("express");

const router =
express.Router();

const {

    getProducts,

    getProductById,

    createProduct,

    updateProduct,

    deleteProduct

}
=
require(
    "../controllers/product.controller"
);

const verifyToken =
require(
    "../middlewares/auth.middleware"
);

const verifyRole =
require(
    "../middlewares/role.middleware"
);

router.get(
    "/",
    getProducts
);

router.get(
    "/:id",
    getProductById
);

router.post(
    "/",
    verifyToken,
    verifyRole("ADMIN"),
    createProduct
);

router.put(
    "/:id",
    verifyToken,
    verifyRole("ADMIN"),
    updateProduct
);

router.delete(
    "/:id",
    verifyToken,
    verifyRole("ADMIN"),
    deleteProduct
);

module.exports =
router;