const express = require("express");

const route = express.Router();

const contectcontrollert = require("../controller/contectcontroller");

route.get("/view_contect" , contectcontrollert.view_contect);

route.post("/multipalcontact" , contectcontrollert.multipalcontact);

module.exports = route;