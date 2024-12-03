import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <ul className="flex space-x-4 p-4 bg-gray-100">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <div className="p-4">
        {/* Outlet renders the child routes */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
