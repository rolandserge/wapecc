
import { sponsors } from '../../data';
import SponsorOfficial from '../sponsorOfficial';

export default function Partner() {

    return (
        <section className='partner'>
            <SponsorOfficial
                title="WAPECC Lome23 Official Sponsors"
                sponsors={sponsors}
                features
            />
        </section>
    )
}
