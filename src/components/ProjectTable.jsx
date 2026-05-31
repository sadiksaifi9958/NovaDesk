const ProjectTable = ({ table }) => {
    return (
        <div className="flex flex-col gap-2 w-full border-gray-100 border-b last:border-none">
            <div className="grid grid-cols-4  w-full py-4 text-gray-700 ">
                <div>{table.name}</div>
                <div>{table.status}</div>
                <div>{table.team}</div>
                <div>{table.dueTime}</div>
            </div>
        </div>
    )
}

export default ProjectTable