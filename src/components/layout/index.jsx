import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Sidebar from '@/components/layout/sidebar';

const Layout = () => {
  return (
    <>
    <Navbar />
    <div className='flex h-[calc(100vh-55px)]'>
      <Sidebar/>
      <div className="p-4">
        {/* Outlet renders the child routes */}
        <Outlet />
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default Layout;
