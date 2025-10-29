const express = require("express");
const { getProjects, postContact } = require("../controllers/itemController");

const router = express.Router();

// Routes
router.get("/Projects", getProjects);
router.post("/contacts", postContact);

module.exports = router;
