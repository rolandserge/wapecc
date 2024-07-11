import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Reseaux from "../components/reseaux";

export default function RootLayout() {

    return (
        <html lang="en" style={{ position: "relative"}}>
            <header>
                <Header />
            </header>
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
