import Banner from "../../components/banner";
import SponsorOfficial from "../../components/sponsorOfficial";
import { sponsors } from "../../data";

export default function Schedule() {

    return (
        <div className="schedule-page">
            <Banner
                image="/assets/schedule.png"
                title="Schedule"
                subtitle="A plan for carrying out a process or procedure, giving lists of intended events and times."
            />
            <div className="content-schedule">
                <div className="schedule">

                </div>

                <SponsorOfficial
                    sponsors={sponsors}
                    features
                />
            </div>
        </div>
    )
}
