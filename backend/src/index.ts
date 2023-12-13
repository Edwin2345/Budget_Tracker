import express = require('express');
import { Application, Request, Response } from 'express';
import mysql from "mysql2"
import cors from "cors"
const expenseRouter = require("./routes/expense");
const summaryRouter = require("./routes/summary")

require("dotenv").config();

// Node setup
const app: Application = express();

const PORT: number = 8800;

//Database setup
const db = mysql.createConnection({
   host: process.env.HOST,
   user: process.env.USER,
   password: process.env.PASSWORD,
   database: process.env.DATABASE
})


/*Middle Ware fo parsing Request Body (POST) from Form  or JSON*/
app.use(express.json());
app.use(cors());


// Routing
app.use("/expense", expenseRouter);
app.use("/summary", summaryRouter)




// TEST ROUTES
app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello</h1>")
})


app.get("/categories", (req: Request, res: Response) => {
    const q = "SELECT * FROM categories"
        
    db.query(q, (err, data)=>{
        if(err) console.log(res.json(err));
        return res.json(data);
    })
})




app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
});


export default db;