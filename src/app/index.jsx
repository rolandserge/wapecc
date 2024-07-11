import About from "../components/about"
import Exhibitor from "../components/exibitor"
import Feature from "../components/feature"
import Banner from "../components/header/banner"
import NewSletter from "../components/newsletter"
import Partner from "../components/partner"
import Speaker from "../components/speaker"
import Sponsor from "../components/sponsor"
import ForumHost from "../components/sponsor/forumHost"
import Statistic from "../components/statistic"
import Testimonial from "../components/testimonial"
import Why from "../components/why"

export default function Home() {

    return (
        <div>
            <Banner />
            <Statistic />
            <About />
            <Exhibitor />
            <Sponsor />
            <Partner />
            <Why />
            <Feature />
            <Speaker />
            <Testimonial />
            <ForumHost />
            <NewSletter />
        </div>
    )
}
