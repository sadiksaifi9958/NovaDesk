import {Routes, Route} from 'react-router-dom';

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Workspace from "../pages/Workspace";
import Settings from "../pages/Settings";
import Notfound from "../pages/Notfound";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="/Workspace" element={<Workspace/>}/>
            <Route path="/Settings" element={<Settings/>}/>
            <Route path="/Notfound" element={<Notfound/>}/>
        </Routes>
    );
};

export default AppRoutes;