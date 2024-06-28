import React from 'react';
import { Outlet , NavLink} from 'react-router-dom';
import '../App.css';

export const Layout = ()=>{
    return (
        <div>
          <nav>
            <NavLink to="/" exact="true" activeclassname="active">Home</NavLink>
            <NavLink to="/results" activeclassname="active">Results</NavLink>
            <NavLink to="/ipc" activeclassname="active">IPC</NavLink>
          </nav>
          <div className="container">
            <Outlet />
          </div>
     </div>
    );
}