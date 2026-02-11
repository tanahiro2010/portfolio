import { Outlet } from "react-router-dom";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const Layout = () => {
    return (
        <div className="app-layout">
            <Header />

            <main>
                <Outlet />
            </main>
            
            <Footer />
        </div>
    );
}

export default Layout;