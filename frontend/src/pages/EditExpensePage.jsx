import Navbar from "../components/utils/Navbar"
import {
  Card,
} from "@material-tailwind/react";

import EditExpenseForm from "../components/form/EditExpenseForm";


function AddExpensePage(){

return(
 <div className="app">
    <Navbar/>
    <div className="w-full flex flex-col items-center justify-center h-[100vh]">
        <Card className="bg-black flex items-center justify-center w-[70%] xl:w-[45%] h-[80%]">
           <EditExpenseForm/>
       </Card>
    </div>
 </div>
)

}

export default AddExpensePage;