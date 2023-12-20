import { Request, Response, NextFunction } from 'express';
import db from '../..';

async function getExpenses(req: Request, res: Response){
   try{
     const {id} = req.params
     const q = "SELECT * FROM expenses WHERE id = (?);"
      
     db.query(q, [id], (err, data)=>{
        if(err) console.log(res.json(err));
        return res.json(data);
     });
   }
   catch(e){
    console.log(e);
   }
}

export default getExpenses;