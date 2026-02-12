import { Outlet } from "react-router-dom";
import { BlurFade } from "@/components/animation/blur-fade";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const Layout = () => {
    return (
        <BlurFade className="app-layout" duration={0.5} delay={0.2} offset={12} direction="down">
            <Header />

            <main>
                <Outlet />
            </main>
            
            <Footer />
        </BlurFade>
    );
}

export default Layout;