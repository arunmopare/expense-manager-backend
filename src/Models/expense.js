const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  title: { type: String },
  amount: { type: String },
  date: { type: Date },
  owner: { type: String },
});
module.exports = mongoose.model("Expense", ExpenseSchema);
