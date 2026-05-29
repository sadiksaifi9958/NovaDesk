import {FiSearch} from "react-icons/fi"

const Navbar = () => {
    return (
        <div className="sticky top-0 z-50 w-full h-16 px-8 flex items-center justify-between border-b border-zinc-200 bg-white/80 backdrop-blur-md">
            <div className="w-full max-w-sm h-11 bg-white rounded-2xl flex items-center px-4 shadow-sm focus-within:ring-2 focus-within:ring-violet-500/20">
                <input className="flex-1 outline-none text-[15px] font-medium placeholder:text-zinc-400" placeholder="Search" />
                <button className="text-zinc-400 text-[18px] flex items-center justify-center hover:text-violet-500 transition-colors duration-200"><FiSearch/></button>
            </div>
            
            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-linear-to-br from-violet-600 to-indigo-600 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer">SS</div>
        </div> 
    )
}

export default Navbar