import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const MainLayout = () => {
    return (
        <div className="font-sans text-slate-800 bg-slate-50 antialiased selection:bg-accent selection:text-white">
            {/* Scroll Progress Indicator could be added here if needed */}
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
