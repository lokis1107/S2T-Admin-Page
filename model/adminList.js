const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: String,
  emails: String,
  password: String,
});

const AdminModal = mongoose.model("Admin List", adminSchema);

module.exports = AdminModal;
