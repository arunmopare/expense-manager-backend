const mongoose = require("mongoose");

const ExpensesNew = new mongoose.Schema({
  id: { type: String },
  amount: { type: Number },
  category: { type: String },
  date: { type: Date },
  owner: { type: String },
  category: { type: String },
  type: { type: String },
});

module.exports = mongoose.model("ExpenseNew", ExpensesNew);
