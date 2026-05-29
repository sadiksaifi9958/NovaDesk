const ActivityItem = ({activity}) => {
    return(
        <div className="flex items-center justify-between py-4 border-b border-zinc-100 last:border-none">
            <div className="text-[15px] font-medium text-zinc-700">{activity.title}</div>
            <div className="text-sm text-zinc-400">{activity.time}</div>
        </div>
    )
}

export default ActivityItem