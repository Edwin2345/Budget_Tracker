import { Request, Response, NextFunction } from 'express';
import db from '../..';

async function fetchRecent(req: Request, res: Response){
   try{
     const q = "SELECT * FROM expenses ORDER BY created_on DESC LIMIT 3;"
      
     db.query(q, (err, data)=>{
          if(err) console.log(res.json(err));
          return res.json(data);
      })
   }
   catch(e){
    console.log(e);
   }
}

export default fetchRecent;