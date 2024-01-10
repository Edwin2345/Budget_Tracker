import {Card,Typography,} from "@material-tailwind/react";
import categoriesArr from "../utils/catergories";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams} from "react-router-dom";
import { useEffect } from "react";

function EditExpenseForm(){
  
const navigate = useNavigate();

const [expense, setExpense] = useState({
    summary: "",
    amount: '',
    expense_date: "",
    category: 1,
})

const {id} = useParams();

useEffect(()=>{
  async function fetchExpense(){
    try{
     const resp = await axios.get(`http://localhost:8800/expense/${id}`);
     console.log(resp);
     setExpense((e)=>{
     return {...e, summary: resp.data[0].summary, amount: resp.data[0].amount, expense_date: resp.data[0].expense_date.slice(0,10) ,category: resp.data[0].category
     }});
    }
    catch(e){
      console.log(e);
    }
  }
  fetchExpense();
},[])



function changeHandler(evt){
setExpense( (prev) => {
    let newValue = evt.target.value;

    if(evt.target.name === "amount" || evt.target.name === "category"){
    newValue = parseFloat(evt.target.value)
    }

    return  {...prev, [evt.target.name]: newValue}
})
}

async function submitHandler(evt){

    evt.preventDefault();
    setExpense({summary: "", amount: '', category: 1});

    try{
     await axios.put(`http://localhost:8800/expense/${id}`, expense);
     navigate(-1);
    }
    catch(e){
    console.log(e);
    } 
}


    return(
        <Card color="white" className="p-6 w-[80%] h-[90%]" shadow={false}>
        <form className="mt-8 mb-2" onSubmit={submitHandler}>
            <div className="mb-1 flex flex-col gap-3">
            <Typography variant="h2" color="blue-gray" className="mb-4">
                Edit an Expense
            </Typography>
            <Typography variant="h5" color="blue-gray">
                Expense Summary
            </Typography>
            <input
                required
                name="summary"
                maxLength={30}
                placeholder="Ex: Car Repair"
                onChange = {changeHandler}
                value={expense.summary}
                className="border-2 border-black p-2 rounded-md mb-2 font-bold text-black"
            />
            <Typography variant="h5" color="blue-gray">
                Amount
            </Typography>
            <input
                name="amount"
                type="number"
                size="sm"
                required
                min={0}
                max={99999.99}
                step="0.01"
                placeholder="0.00"
                onChange = {changeHandler}
                value={expense.amount}
                className="border-2 border-black p-2 rounded-md mb-2 font-bold text-black"
            /> 
            <Typography variant="h5" color="blue-gray">
                Expense Date
            </Typography>
            <input
                required
                name="expense_date"
                type="date"
                onChange = {changeHandler}
                value={expense.expense_date}
                className="border-2 border-black p-2 rounded-md mb-2 font-bold text-black"
            />
            <Typography variant="h5" color="blue-gray">
                Category
            </Typography>
            <select   onChange={changeHandler} value={expense.category} name="category" className="p-3 border-2 rounded-md border-black mb-2 font-bold text-black">
            {categoriesArr.map( (c)=>{
                return <option key={c.id} value={c.id}>{c.value}</option>
                })}
            </select>
            <button className="my-3 text-[1.2rem] font-bold text-white p-3 rounded-md bg-blue-700" >
             Update Expense
            </button>
         </div>
        </form>
        </Card>
    )

}

export default EditExpenseForm;