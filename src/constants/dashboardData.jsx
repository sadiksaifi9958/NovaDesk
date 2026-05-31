import {FaFolderOpen}from "react-icons/fa"
import {FaTasks} from "react-icons/fa"
import {HiUsers} from "react-icons/hi"



export const statsData = [
    { title: "Total Projects", content: 24, icon: <FaFolderOpen/>, iconBoxColor: "bg-blue-500" },
    { title: "Active Tasks", content: 5, icon: <FaTasks/>, iconBoxColor: "bg-orange-500"},
    { title: "Team Members", content: 14, icon: <HiUsers/>, iconBoxColor: "bg-green-500" }
]

export const recentActivities = [
    {title: "John created new tasks", time: "2m ago"},
    {title: "Team meeting scheduled", time: "5h ago"},
    {title: "Project updated", time: "1d ago"},
]

export const ProjectTableData = [
    {
        name: "Project",
        status: "Status",
        team: "Team",
        dueTime: "Due Time",
        priority: "Priority"
    },
    {
        name: "Project 1",
        status: "Active",
        team: "SS, AK, RJ",
        dueTime: "20 June",
        priority: "Secondary"
    },
    {
        name: "Project 2",
        status: "Active",
        team: "SM, PS, MD",
        dueTime: "31 May",
        priority: "Primary"
    },
    {
        name: "Project 3",
        status: "Completed",
        team: "SP, AG, VK",
        dueTime: "20 May",
        priority: "Tertiary"
    },
    {
        name: "Project 4",
        status: "Pending",
        team: "SH, MS, PS",
        dueTime: "02 AUG",
        priority: "Tertiary"
    }
];