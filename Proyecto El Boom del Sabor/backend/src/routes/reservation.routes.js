const express =
require("express");

const router =
express.Router();

const {

    getReservations,

    getReservationById,

    createReservation,

    updateReservation,

    deleteReservation

}
=
require(
    "../controllers/reservation.controller"
);

router.get(
    "/",
    getReservations
);

router.get(
    "/:id",
    getReservationById
);

router.post(
    "/",
    createReservation
);

router.put(
    "/:id",
    updateReservation
);

router.delete(
    "/:id",
    deleteReservation
);

module.exports =
router;