var express = require("express");
const {} = require("../Controllers/expense");
const {
  createNewExpense,
  deleteExpense,
  getExpense,
  getExpenses,
  updateExpense,
} = require("../Controllers/newExpense");
var router = express.Router();

router.post("/expense", createNewExpense);
router.delete("/expense/:id", deleteExpense);
router.get("/expense/:id", getExpense);
router.put("/expense/:id", updateExpense);
router.get("/expenses", getExpenses);

module.exports = router;
