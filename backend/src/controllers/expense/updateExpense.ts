import express, { Request, Response, NextFunction } from 'express';

async function updateExpense(req: Request, res: Response){
   try{
     res.json(`UPDATE: Your id is: ${req.params.id}`);
   }
   catch(e){
    console.log(e);
   }
}

export default updateExpense;