
import { sponsors } from '../../data';
import SponsorOfficial from '../sponsorOfficial';

export default function Partner() {

    return (
        <section className='partner'>
            <SponsorOfficial
                title="Our partners"
                sponsors={sponsors}
                features
            />
        </section>
    )
}
