const StatCard = ({ title, content, icon, iconBoxColor }) => {
    return (
        <div className="bg-white rounded-2xl p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:scale-[1.02] flex flex-col gap-3 cursor-pointer">
            <div className={`w-10 h-10 flex items-center justify-center text-2xl rounded-xl text-white ${iconBoxColor}`}>{icon}</div>
            <div className="text-sm text-zinc-500">{title}</div>
            <div className="text-4xl font-bold">{content}</div>
        </div>
    )
}

export default StatCard