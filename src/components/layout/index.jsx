import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        {/* Outlet renders the child routes */}
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
