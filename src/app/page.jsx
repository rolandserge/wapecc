import About from "../components/about"
import Feature from "../components/feature"
import Galerie from "../components/galerie"
import GalerieVideo from "../components/galerie/video"
import Banner from "../components/header/banner"
import Partner from "../components/partner"
import Speaker from "../components/speaker"
import Sponsor from "../components/sponsor"
import Testimonial from "../components/testimonial"
import Statistic from "../components/statistic"
import Why from "../components/why"

export default function Home() {

    return (
        <div>
            <Banner />
            <About />
            <Statistic />
            <Partner />
            <Why />
            <Sponsor />
            <Feature />
            <Speaker />
            <Testimonial />
            {/* <Official /> */}
            <Galerie />
            <GalerieVideo />
        </div>
    )
}
