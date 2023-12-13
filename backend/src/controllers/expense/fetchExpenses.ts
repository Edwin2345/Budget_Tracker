import { Request, Response, NextFunction } from 'express';

async function fetchExpenses(req: Request, res: Response){
   try{
     res.json("FETCH: Hello");
   }
   catch(e){
    console.log(e);
   }
}

export default fetchExpenses;