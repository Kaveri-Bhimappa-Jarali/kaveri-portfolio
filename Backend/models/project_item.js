const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    features: { type: [String], required: true },
    tech: { type: [String], required: true },
    github: { type: String },
    live: { type: String }
  },
  { collection: "Projects" }
);

module.exports = mongoose.model("Projects", projectSchema);
