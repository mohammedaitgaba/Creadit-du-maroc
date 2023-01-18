import { Routes, Route } from "react-router-dom";
import ClientsTable from "../componnents/DushboardComponnents/ClientsTable"
import SideBarAdmin from "../componnents/DushboardComponnents/SideBarAdmin"
import Accounts from "../componnents/DushboardComponnents/Accounts";

const AdminDushboard = () => {
  return (
    <div className="flex w-full items-center">
        <SideBarAdmin/>
        <Routes>
            <Route path='/' element={<ClientsTable/>}/>            
            <Route path='/Accounts' element={<Accounts/>}/>            
        </Routes>
    </div>
  )
}

export default AdminDushboard