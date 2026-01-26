import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

const Layout = () => {
    return (
        <div className="app-wrapper">
            <Navigation />
            <CartDrawer />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
