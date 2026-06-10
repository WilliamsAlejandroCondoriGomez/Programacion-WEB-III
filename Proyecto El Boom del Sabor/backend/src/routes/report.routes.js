const express =
require("express");

const router =
express.Router();

const {

generateUsersReport

}
=
require(
"../controllers/report.controller"
);

router.get(

"/usuarios",

generateUsersReport

);

module.exports =
router;