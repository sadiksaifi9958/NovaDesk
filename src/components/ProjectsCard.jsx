const ProjectCard = ({ Card }) => {
    return (
        <div className="flex flex-col py-4 text-gray-700 p-4 w-full bg-white rounded-2xl mt-4 border border-zinc-100 shadow-md hover:-translate-y-1 hover:shadow-md transition-all">
            <div>Name: {Card.name}</div>
            <div>Priority: {Card.priority}</div>
            <div>Team: {Card.team}</div>
            <div>Due Time: {Card.dueTime}</div>
        </div>
    )
}

export default ProjectCard