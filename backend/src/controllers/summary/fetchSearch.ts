import { Request, Response, NextFunction } from 'express';
import db from '../..';

async function fetchSearch(req: Request, res: Response){
   try{
    const {summary} = req.query;
    const dbQuery  = `%${summary}%`

    const q = "SELECT * FROM expenses WHERE summary LIKE (?);"
      
     db.query(q, [dbQuery], (err, data)=>{
          if(err) console.log(res.json(err));
          return res.json(data);
      })
   }
   catch(e){
    console.log(e);
   }
}

export default fetchSearch;