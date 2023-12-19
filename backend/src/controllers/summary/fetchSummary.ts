import { Request, Response, NextFunction } from 'express';
import db from '../..';

async function fetchSummary(req: Request, res: Response){
   try{
     const q = "SELECT c.id, c.category, SUM(e.amount) AS total_amount, ROUND(AVG(e.amount),2) AS average_expense FROM  expenses AS e INNER JOIN categories AS c ON e.category = c.id GROUP BY c.category, c.id"
      
     db.query(q, (err, data)=>{
          if(err) console.log(res.json(err));
          return res.json(data);
      })
   }
   catch(e){
    console.log(e);
   }
}

export default fetchSummary;