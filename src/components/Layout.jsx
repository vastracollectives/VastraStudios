import Navigation from './Navigation';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import CustomCursor from './CustomCursor';

const Layout = () => {
    return (
        <div className="app-wrapper">
            <CustomCursor />
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
