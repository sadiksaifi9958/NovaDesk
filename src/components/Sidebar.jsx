import { NavLink } from "react-router-dom"
import { sidebarLinks } from "../constants/sidebarData"

const Sidebar = () => {
    return (
        <div className="flex flex-col p-4 md:h-screen w-full md:w-64 border bg-zinc-900 text-white border-r border-zinc-800">
            <div className="font-bold text-lg mb-8 h-12 border-b border-zinc-800">Nova<span className="italic text-blue-500 ">Desk</span></div>
            <div className="flex flex-row md:flex-col gap-3 mt-8">

                {sidebarLinks.map((data) => (
                    <NavLink
                        to={data.path}
                        key={data.path}
                        className={({ isActive }) =>
                            isActive
                                ? "px-3 py-2 md:px-4 md:py-3 rounded-lg bg-zinc-800 text-white flex items-center gap-2"
                                : "px-3 py-2 md:px-4 md:py-3 rounded-lg hover:bg-zinc-800 transition-all duration-200 cursor-pointer flex items-center gap-2"
                        }
                    >{data.icon}
                    <span>{data.name}</span>
                    </NavLink>
                ))}

            </div>

        </div>
    )
}

export default Sidebar