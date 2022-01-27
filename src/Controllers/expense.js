const ExpenseModel = require("../Models/expense");

exports.createExpense = async (req, res) => {
  const Expense = new ExpenseModel(req.body);
  try {
    const saveData = await Expense.save();
    if (!saveData) {
      return res.status(400).json({
        msg: "Error: Something went wrong, Product not created",
      });
    }
    return res.status(200).json({
      msg: "Expense created.",
      _id: saveData._id,
    });
  } catch (error) {
    return res.status(400).json({
      msg: "Error: Something went wrong",
    });
  }
};

exports.getAllExpensesForUser = async (req, res) => {
  const owner = req.body.owner;
  console.log(owner, "owner");
  try {
    const expensesFromDb = await ExpenseModel.find({ owner }).exec();
    console.log("expensesFromDb", expensesFromDb);
    if (!expensesFromDb) {
      return res.status(400).json({
        msg: "Error: Something went wrong, Expenses Not Found",
      });
    }
    return res.status(200).json(expensesFromDb);
  } catch (error) {
    return res.status(400).json({
      msg: "Error: Something went wrong",
    });
  }
};

exports.deleteExpense = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedExpense = await ExpenseModel.deleteOne({ _id: id }).exec();
    console.log(deletedExpense);
    if (!deletedExpense) {
      return res.status(400).json({
        msg: "Error: Something went wrong, not deleted",
      });
    }
    if (deletedExpense.deletedCount === 0) {
      return res.status(400).json({
        msg: "expense not found",
      });
    }
    return res.status(200).json({ _id: id });
  } catch (error) {
    return res.status(400).json({
      msg: "Error: Something went wrong",
    });
  }
};
