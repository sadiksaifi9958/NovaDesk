import StatCard from "../components/StatCard"
import ActivityItem from "../components/ActivityItem"
import {statsData, recentActivities} from "../constant/dashboardData"

const Dashboard = () => {

    return <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {statsData.map(
                (e) => (
                    <StatCard
                        key={e.title}
                        title={e.title}
                        content={e.content} />
                ))}

        </div>

        <div className="bg-white rounded-xl p-5 border shadow-sm">Recent Activity

            {recentActivities.map((activity) => (
                <ActivityItem
                    key={activity}
                    activity={activity} />
            ))
            }

        </div>
    </div>
}

export default Dashboard