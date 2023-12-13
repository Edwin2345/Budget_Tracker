import { Request, Response, NextFunction } from 'express';

async function fetchSummary(req: Request, res: Response){
   try{
     res.json("SUMMARY: summary table data");
   }
   catch(e){
    console.log(e);
   }
}

export default fetchSummary;