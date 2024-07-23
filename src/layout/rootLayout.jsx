import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Reseaux from "../components/reseaux";
import Nav from "../components/header/nav"

export default function RootLayout() {

    return (
        <html lang="en" style={{ position: "relative"}}>
            <header>
                <Header />
            </header>
            <Nav />
            <body>
                <Outlet />
            </body>
            <footer>
                <Footer />
            </footer>

            <Reseaux />
        </html>
    )
}
