const StatCard = ({ title, content }) => {
    return (
        <div className="bg-white rounded-xl p-5 border shadow-sm">
            <div className="text-sm text-zinc-500">{title}</div>
            <div className="text-3xl font-bold mt-2">{content}</div>
        </div>
    )
}

export default StatCard