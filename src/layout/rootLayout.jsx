import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Reseaux from "../components/reseaux";
import Nav from "../components/header/nav"
import { useEffect } from "react";

export default function RootLayout() {

    
    const location = useLocation();

     // This effect runs whenever the path name changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div style={{ background: "#f3f7f9", position: "relative"}}>      
            <header>
                <Header />
            </header>
            <Nav />
            <section>
                <Outlet />
            </section>
            <footer>
                <Footer />
            </footer>

            <Reseaux />
        </div>
    )
}
