import ProjectCard from "../components/ProjectsCard"
import { cardData } from "../constants/workspaceData"

const todoProjects = cardData.filter(
    (project) => (project.status === "todo")
)

const progressProjects = cardData.filter(
    (project) => (project.status === "progress")
)

const completedProjects = cardData.filter(
    (project) => (project.status === "completed")
)

const Workspace = () => {
    return <div className="p-8 flex flex-col gap-5">
        <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 mb-2">
                Workspace
            </h1>
            <p>Manage your team tasks and workflow efficiently.</p>
        </div>

        <button className="px-3 py-4 rounded-2xl border border-zinc-100 shadow-sm w-48 bg-white cursor-pointer active:scale-95 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 text-lg">Create Project <span className="text-2xl pb-0.5">+</span></button>

        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-3 justify-center rounded-2xl">
            <div className="bg-zinc-100 rounded-2xl p-4 flex flex-col gap-4 min-h-[500px]">
                <h1 className="font-semibold text-lg">ToDo</h1>
                <div className="flex flex-col gap-3">
                    {todoProjects.map((project) => (
                    <ProjectCard
                        Card={project}
                        key={project.name} />
                ))}
                </div>
            </div>
            <div className="bg-zinc-100 rounded-2xl p-4 flex flex-col gap-4 min-h-[500px]">
                <h1 className="font-semibold text-lg">In Progress</h1>
                <div className="flex flex-col gap-3">
                    {progressProjects.map((project) => (
                    <ProjectCard
                        Card={project}
                        key={project.name} />
                ))}
                </div>
            </div>
            <div className="bg-zinc-100 rounded-2xl p-4 flex flex-col gap-4 min-h-[500px]">
                <h1 className="font-semibold text-lg">Completed</h1>
                <div className="flex flex-col gap-3">
                    {completedProjects.map((project) => (
                        <ProjectCard
                            Card={project}
                            key={project.name} />
                    ))}
                </div>
            </div>
        </div>
    </div>
}

export default Workspace