import {NavLink} from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="flex flex-col p-4 h-screen w-64 border bg-zinc-900 text-white border-r border-zinc-800">
            <div className="font-bold text-lg mb-8 pb-4 border-b border-zinc-800 ">Nova<span className="italic text-blue-500 ">Desk</span></div>
            <div className="flex flex-col gap-3">

                <NavLink 
                to="/"
                className={({isActive}) => 
                    isActive
                    ? "px-4 py-3 rounded-lg bg-zinc-800 text-white"
                    : "px-4 py-3 rounded-lg hover:bg-zinc-800 transition-all duration-200 cursor-pointer"
                }
                >Dashboard
                </NavLink>

                <NavLink 
                to="/Workspace"
                className={({isActive}) => 
                    isActive
                    ? "px-4 py-3 rounded-lg bg-zinc-800 text-white"
                    : "px-4 py-3 rounded-lg hover:bg-zinc-800 transition-all duration-200 cursor-pointer"
                }
                >Workspace
                </NavLink>

                <NavLink 
                to="/Settings"
                className={({isActive}) => 
                    isActive
                    ? "px-4 py-3 rounded-lg bg-zinc-800 text-white"
                    : "px-4 py-3 rounded-lg hover:bg-zinc-800 transition-all duration-200 cursor-pointer"
                }
                >Settings
                </NavLink>
                
            </div>

        </div>
    )
}

export default Sidebar