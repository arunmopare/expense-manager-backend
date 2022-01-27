const ExpenseNew = require("../Models/newExpense");

exports.createNewExpense = async (req, res) => {
  const Expense = new ExpenseNew(req.body);
  try {
    const savedData = await Expense.save();
    if (!savedData) {
      return res.status(400).json({
        msg: "Error: Something went wrong, Product not created",
      });
    }
    return res.status(200).json({
      msg: "Expense created.",
      _id: savedData._id,
    });
  } catch (error) {
    return res.status(400).json({
      msg: "Error: Something went wrong",
    });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    console.log("====================================");
    console.log("deleteinh", req.params.id);
    console.log("====================================");
    const deletedData = await ExpenseNew.findOneAndDelete({
      id: req.params.id,
    });
    if (!deletedData) {
      return res.status(400).json({
        msg: "Error: Something went wrong, Expense not deleted",
      });
    }
    console.log("====================================");
    console.log({ deletedData });
    console.log("====================================");
    return res.status(200).json({
      msg: "Expense deleted.",
      _id: deletedData._id,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "Error: Something went wrong",
    });
  }
};

exports.getExpense = async (req, res) => {
  try {
    const expense = await ExpenseNew.findById(req.params.id);
    if (!expense) {
      return res.status(400).json({
        msg: "Error: Something went wrong, Expense not found",
      });
    }
    return res.status(200).json({
      msg: "Expense found.",
      _id: expense._id,
      title: expense.title,
      amount: expense.amount,
      date: expense.date,
      owner: expense.owner,
    });
  } catch (error) {
    return res.status(400).json({
      msg: "Error: Something went wrong",
    });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await ExpenseNew.find();
    if (!expenses) {
      return res.status(400).json({
        msg: "Error: Something went wrong, Expense not found",
      });
    }
    return res.status(200).json(expenses);
  } catch (error) {
    return res.status(400).json({
      msg: "Error: Something went wrong",
    });
  }
};

exports.updateExpense = async (req, res) => {
  try {
    const updatedData = await ExpenseNew.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!updatedData) {
      return res.status(400).json({
        msg: "Error: Something went wrong, Expense not updated",
      });
    }
    return res.status(200).json({
      msg: "Expense updated.",
      _id: updatedData._id,
      title: updatedData.title,
      amount: updatedData.amount,
      date: updatedData.date,
      owner: updatedData.owner,
    });
  } catch (error) {
    return res.status(400).json({
      msg: "Error: Something went wrong",
    });
  }
};

exports.getExpenseByOwner = async (req, res) => {
  try {
    const expenses = await ExpenseNew.find({ owner: req.params.owner });
    if (!expenses) {
      return res.status(400).json({
        msg: "Error: Something went wrong, Expense not found",
      });
    }
    return res.status(200).json({
      msg: "Expense found.",
      _id: expenses._id,
      title: expenses.title,
      amount: expenses.amount,
      date: expenses.date,
      owner: expenses.owner,
    });
  } catch (error) {
    return res.status(400).json({
      msg: "Error: Something went wrong",
    });
  }
};
