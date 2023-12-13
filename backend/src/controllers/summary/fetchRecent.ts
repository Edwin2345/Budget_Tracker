import { Request, Response, NextFunction } from 'express';

async function fetchRecent(req: Request, res: Response){
   try{
     res.json("RECENT: top 4");
   }
   catch(e){
    console.log(e);
   }
}

export default fetchRecent;