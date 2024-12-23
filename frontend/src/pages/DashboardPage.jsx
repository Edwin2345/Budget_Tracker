import Navbar from "../components/utils/Navbar"
import ChartComp from "../components/dashboard/ChartComp";
import TableComp from "../components/dashboard/TableComp";
import SummaryTable from "../components/dashboard/SummaryTable";
import { useState, useEffect} from "react";
import axios from "axios"
import {
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";




function DashBoardPage(){

const [summaryData, setSummaryData] = useState([]);
const [recentData, setRecentData] = useState([]);



async function fetchData(){
   try{
     const respSummary = await axios.get("http://localhost:8800/summary");
     const respRecent = await  axios.get("http://localhost:8800/summary/recent");

     setSummaryData(respSummary.data.map((el) => {
        return {...el, total_amount: parseFloat(el.total_amount), average_expense: parseFloat(el.average_expense)}
     }));

     setRecentData(respRecent.data.map( (el) => {
        return {...el, amount: parseFloat(el.amount)};
     }));
   }
   catch(e){
     console.log(e);
   }
}

useEffect(()=>{
  fetchData();
},[])




//Delete id and modal state
const [deleteId, setDeleteId] = useState(null);
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(!open);


async function deleteHandler(){
   try{
    const resp =  await axios.delete(`http://localhost:8800/expense/${deleteId}`)
    console.log(resp);
    handleOpen();
    await fetchData();
   }
   catch(e){
    console.log(e);
   }
}



return(
 <div className="app">
  <Navbar/>
  <div className="w-full flex flex-col lg:flex-row h-[100vh]">
    <div className="mx-4 mt-5 w-full lg:w-[40%] h-[90vh] ">
        <h1 className="text-5xl font-bold mb-[2rem] mt-5 text-white text-center">Current Budget</h1>
        <ChartComp summaryData={summaryData}/>
    </div>
    <div className=" mx-0 lg:mx-6 mt-5  w-full lg:w-[60%] flex flex-col">
     <div className="bg-black pt-2 pb-[2rem] px-6 mt-5"> 
       <h1 className="text-4xl font-bold mb-[2rem] mt-5 text-white">Expense Totals</h1>
       <SummaryTable summaryData={summaryData}/>
     </div>
     <div className="bg-black w-full pt-2 pb-[2rem] px-6 mt-6"> 
       <h1 className="text-4xl font-bold mb-[2rem] mt-5 text-white">Recent Expenses</h1>
       <TableComp  tableData={recentData} setDeleteId={setDeleteId} handleOpen={handleOpen}/>
     </div>
    </div>
  </div>
  <Dialog open={open} handler={handleOpen} size="xs" className="text-center">
    <DialogHeader className="text-center justify-center">Confirm Expense Deletion?</DialogHeader>
    <DialogFooter className="flex justify-center">
      <Button
        variant="gradient"
        color="red"
        onClick={handleOpen}
        className="mr-6"
      >
        <span>Cancel</span>
      </Button>
      <Button variant="gradient" color="green" onClick={deleteHandler}>
        <span>Confirm</span>
      </Button>
    </DialogFooter>
  </Dialog>
 </div>
)


}

export default DashBoardPage;