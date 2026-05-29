import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"


const DashboardLayout = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1 bg-[#f5f7fb] overflow-hidden">
                <Navbar />
                <div className="flex-1 overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout