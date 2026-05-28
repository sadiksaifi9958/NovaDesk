import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"


const DashboardLayout = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen bg-zinc-100">
            <Sidebar />
            <div className="flex flex-col flex-1 min-h-screen">
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout