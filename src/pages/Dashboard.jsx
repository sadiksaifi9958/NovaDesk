import StatCard from "../components/StatCard"
import ActivityItem from "../components/ActivityItem"
import ProjectTable from "../components/ProjectTable"
import { statsData, recentActivities, ProjectTableData } from "../constants/dashboardData"

const Dashboard = () => {

    return (
        <div className="p-8 flex flex-col gap-8">

            <div>
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
                    Welcome back, Sadik 👋
                </h1>

                <p className="text-zinc-500 mt-1">
                    Here's your workspace overview for today
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {statsData.map((e) => (
                    <StatCard
                        key={e.title}
                        title={e.title}
                        content={e.content}
                        icon={e.icon}
                        iconBoxColor={e.iconBoxColor}
                    />
                ))}
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-100">
                <h2 className="text-xl font-semibold text-zinc-600 mb-6">
                    Recent Activity
                </h2>

                <div className="space-y-5">
                    {recentActivities.map((activity) => (
                        <ActivityItem
                            key={activity.title}
                            activity={activity}
                        />
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-100">
                <h1 className="text-xl font-semibold text-zinc-600 mb-6">Projects Overview</h1>
                {
                    ProjectTableData.map((table) => (
                            <ProjectTable
                            key={table.name}
                            table={table}
                            />
                        )
                    )
                }
            </div>

        </div>
    )
}

export default Dashboard