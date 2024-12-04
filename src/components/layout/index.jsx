import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from '@/components/layout/navbar';
const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        {/* Outlet renders the child routes */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
