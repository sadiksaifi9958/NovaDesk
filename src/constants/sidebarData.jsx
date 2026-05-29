import {MdDashboard} from "react-icons/md"
import {FaFolder} from "react-icons/fa"
import {IoSettingsSharp} from "react-icons/io5"


export const sidebarLinks = [
    {
        name: "Dashboard",
        path: "/",
        icon: <MdDashboard/>
    },
    {
        name: "Workspace",
        path: "/Workspace",
        icon: <FaFolder/>
    },
    {
        name: "Settings",
        path: "/Settings",
        icon: <IoSettingsSharp/>
    }
]