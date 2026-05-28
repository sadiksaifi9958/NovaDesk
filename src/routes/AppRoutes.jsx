import { Routes, Route } from 'react-router-dom';

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Workspace from "../pages/Workspace";
import Settings from "../pages/Settings";
import Notfound from "../pages/Notfound";
import DashboardLayout from "../layouts/DashboardLayout"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="Login" element={<Login />} />
                <Route path="Signup" element={<Signup />} />
                <Route path="Workspace" element={<Workspace />} />
                <Route path="Settings" element={<Settings />} />
                <Route path="Notfound" element={<Notfound />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;