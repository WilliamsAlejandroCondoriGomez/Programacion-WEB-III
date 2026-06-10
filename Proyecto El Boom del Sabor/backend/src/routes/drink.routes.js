const express =
require("express");

const router =
express.Router();

const {

    getDrinks,

    getDrinkById,

    createDrink,

    updateDrink,

    deleteDrink

}
=
require(
    "../controllers/drink.controller"
);

router.get(
    "/",
    getDrinks
);

router.get(
    "/:id",
    getDrinkById
);

router.post(
    "/",
    createDrink
);

router.put(
    "/:id",
    updateDrink
);

router.delete(
    "/:id",
    deleteDrink
);

module.exports =
router;