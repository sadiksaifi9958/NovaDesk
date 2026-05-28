const Dashboard = () => {
    return <div className="p-6 space-y-6">
        <div className="grid grid-cols-3 gap-4">

            {[
            {title: "Total Projects", content: 24},
            {title: "Active Tasks", content: 5},
            {title: "Team Members", content: 14}
            ].map(
                (e) => (
                <div className="bg-white rounded-xl p-5 border shadow-sm">
                    <div className="text-sm text-zinc-500">e.title</div>
                    <div className="text-3xl font-bold mt-2">e.content</div>
                </div>
                ))}

        </div>

        <div className="bg-white rounded-xl p-5 border shadow-sm">Recent Activity
            <div className="flex items-center justify-between py-3 border-b">John created new tasks</div>
            <div className="flex items-center justify-between py-3 border-b">Team meeting scheduled</div>
            <div className="flex items-center justify-between py-3 border-b">Project updated</div>
        </div>
    </div>
}

export default Dashboard