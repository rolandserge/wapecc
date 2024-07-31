
import { sponsors } from '../../data';
import SponsorOfficial from '../sponsorOfficial';

export default function Partner() {

    return (
        <section className='partner'>
            <SponsorOfficial
                title="Our virutal WAPECC 21 partners"
                sponsors={sponsors}
                features
            />
        </section>
    )
}
