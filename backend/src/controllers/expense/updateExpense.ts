import express, { Request, Response, NextFunction } from 'express';
import db from '../..';

async function updateExpense(req: Request, res: Response){
   try{
     const {id} = req.params;
     const {summary, amount, expense_date, category} = req.body;
    
     const q = "UPDATE expenses SET summary = (?), amount = (?), expense_date = (?), category = (?)  WHERE id = (?);"
     
     db.query(q,[summary, amount,expense_date, category, id], (err, data)=>{
          if(err) console.log(res.json(err));
          return res.json(data);
     })
   }
   catch(e){
    console.log(e);
   }
}

export default updateExpense;