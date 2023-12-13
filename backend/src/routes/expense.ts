import express from 'express';
import fetchExpenses from '../controllers/expense/fetchExpenses';
import addExpense from '../controllers/expense/addExpense';
import updateExpense from '../controllers/expense/updateExpense';
import deleteExpense from '../controllers/expense/deleteExpense';


const expenseRouter = express.Router();

expenseRouter.route("/")
             //get all expenses
             .get(fetchExpenses)
              //add new expense
             .post(addExpense)


expenseRouter.route('/:id')
             //update expense
             .put(updateExpense)
             //delete expense
             .delete(deleteExpense)
            


module.exports = expenseRouter;