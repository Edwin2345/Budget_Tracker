import { Request, Response, NextFunction } from 'express';
import db from '../..';

async function addExpense(req: Request, res: Response){
   try{
     const {summary, amount, category} = req.body;
     const q = "INSERT INTO expenses (summary,amount,category) VALUES (?) "
      
      db.query(q,[[summary, amount, category]], (err, data)=>{
          if(err) console.log(res.json(err));
          return res.json(data);
      })
   }
   catch(e){
    console.log(e);
   }
}

export default addExpense;