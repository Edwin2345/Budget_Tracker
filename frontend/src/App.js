import "./styles/app.css"
import {Routes,Route,BrowserRouter} from "react-router-dom";
import DashBoardPage from "./pages/DashboardPage";
import AddExpensePage from "./pages/AddExpensePage";
import TablePage from  "./pages/TablePage"

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashBoardPage/>}/>
      <Route path="/expense" element={<AddExpensePage/>}/>
      <Route path="/table" element={<TablePage/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
