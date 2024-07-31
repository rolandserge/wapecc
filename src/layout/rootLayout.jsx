import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Reseaux from "../components/reseaux";
import Nav from "../components/header/nav"

export default function RootLayout() {

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
