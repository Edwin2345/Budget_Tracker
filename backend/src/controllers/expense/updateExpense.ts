import express, { Request, Response, NextFunction } from 'express';
import db from '../..';

async function updateExpense(req: Request, res: Response){
   try{
     const {id} = req.params;
     const {summary, amount, category} = req.body;
    
     const q = "UPDATE expenses SET summary = (?), amount = (?), category = (?), created_on = now() WHERE id = (?);"
     
     db.query(q,[summary, amount, category, id], (err, data)=>{
          if(err) console.log(res.json(err));
          return res.json(data);
     })
   }
   catch(e){
    console.log(e);
   }
}

export default updateExpense;