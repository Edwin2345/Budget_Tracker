import express from 'express';
import fetchSummary from '../controllers/summary/fetchSummary';
import fetchRecent from '../controllers/summary/fetchRecent';
import fetchSearch from '../controllers/summary/fetchSearch';

const summaryRouter = express.Router();

//Summary table route (DASHBOARD)
summaryRouter.get("/", fetchSummary)

//Recent Expense table route (DASHBOARD)
summaryRouter.get("/recent", fetchRecent)

//Recent Expense table route (DASHBOARD)
summaryRouter.get("/search", fetchSearch)


module.exports = summaryRouter;