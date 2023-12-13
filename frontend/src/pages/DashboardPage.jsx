import Navbar from "../components/utils/Navbar"
import ChartComp from "../components/dashboard/ChartComp";
import TableComp from "../components/dashboard/TableComp";
import SummaryTable from "../components/dashboard/SummaryTable";
import { useState, useEffect} from "react";



function DashBoardPage(){

//State to refetch All data when editing/deleting from recent table
const [forceRefetch, setForceRefetch] = useState(false);

useEffect(()=>{
  console.log("Refetch data for everything")
},[forceRefetch])




return(
 <div className="app">
  <Navbar/>
  <div className="w-full flex flex-col lg:flex-row h-[100vh]">
    <div className="mx-4 mt-5 w-full lg:w-[52%] h-[90vh] ">
        <h1 className="text-5xl font-bold mb-[2rem] mt-5 text-white text-center">My Budget</h1>
        <ChartComp/>
    </div>
    <div className=" mx-0 lg:mx-6 mt-5  w-full lg:w-[48%] flex flex-col">
     <div className="bg-black pt-2 pb-[2rem] px-6 mt-5"> 
       <h1 className="text-4xl font-bold mb-[2rem] mt-5 text-white">Expense Totals</h1>
       <SummaryTable/>
     </div>
     <div className="bg-black w-full pt-2 pb-[2rem] px-6 mt-6"> 
       <h1 className="text-4xl font-bold mb-[2rem] mt-5 text-white">Recent Expenses</h1>
       <TableComp setForceRefetch={setForceRefetch}/>
     </div>
    </div>
  </div>
 </div>
)


}

export default DashBoardPage;