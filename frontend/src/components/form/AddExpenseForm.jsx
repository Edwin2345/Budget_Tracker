import {Card,Typography,} from "@material-tailwind/react";
import categoriesArr from "../utils/catergories";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddExpenseForm(){
  
    const navigate = useNavigate();

    const [expense, setExpense] = useState({
        summary: "",
        amount: '',
        category: 1,
    })


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
          await axios.post("http://localhost:8800/expense", expense);
          navigate("/")
        }
        catch(e){
           console.log(e);
        } 
    }


    return(
        <Card color="white" className="p-6 w-[80%] h-[80%]" shadow={false}>
        <form className="mt-8 mb-2" onSubmit={submitHandler}>
            <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h2" color="blue-gray" className="mb-4">
                Add an Expense
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
                Category
            </Typography>
            <select   onChange={changeHandler} value={expense.value} name="category" className="p-3 border-2 rounded-md border-black mb-2 font-bold text-black">
            {categoriesArr.map( (c)=>{
                return <option key={c.id} value={c.id}>{c.value}</option>
                })}
            </select>
            </div>
            <button className="mt-6 text-[1.1rem] text-white p-3 rounded-md bg-green-700" >
             Create
            </button>
        </form>
        </Card>
    )

}

export default AddExpenseForm;