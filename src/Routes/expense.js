var express = require("express");
const {
  createExpense,
  getAllExpensesForUser,
  deleteExpense,
} = require("../Controllers/expense");
var router = express.Router();

router.post("/expense", createExpense);

router.post("/expenses", getAllExpensesForUser);

router.delete("/expense/:id", deleteExpense);

module.exports = router;
