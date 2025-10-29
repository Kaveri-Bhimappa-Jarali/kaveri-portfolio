const Project = require("../models/project_item");
const Contact = require("../models/contact_Item");

// GET /api/projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    console.error("Error fetching projects:", err);
    res.status(500).json({ message: err.message });
  }
};

// POST /api/contacts
const postContact = async (req, res) => {
  try {
    const { name, email, MobNo, Sub, message } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: "Name and Email are Required" });
    }
    const contact = await Contact.create({ name, email, MobNo, Sub, message });
    res.status(201).json(contact);
  } catch (err) {
    console.error("Error saving contact:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getProjects, postContact };
