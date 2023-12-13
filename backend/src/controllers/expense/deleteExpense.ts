import express, { Request, Response, NextFunction } from 'express';

async function deleteExpense(req: Request, res: Response){
   try{
     res.json(`DELETE: Your id is: ${req.params.id}`);
   }
   catch(e){
    console.log(e);
   }
}

export default deleteExpense;