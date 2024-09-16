import Banner from '../../components/banner'
import SponsorOfficial from '../../components/sponsorOfficial'
import { sponsors } from '../../data'

export default function WapeccAbuja() {

    return (
        <div className='wapecc-report-page'>
            <Banner
                image="/assets/download.png"
                title="Post show report 21"
            />
            <div className="content-page">
                <div className="content">
                    <div className="brochure">
                        <img src="/assets/report-21.png" alt="" />
                    </div>
                    <div className="formulaire">
                        <form action="">
                            <div className='flex'>
                                <input type="text" placeholder='Enter your first name' name="" id="" />
                                <input type="text" name="" placeholder='Enter your lastName' id="" />
                            </div>
                            <div>
                                <input type="email" placeholder='Enter your email' id="" />
                            </div>
                            <div>
                                <input type="number" placeholder='Enter your number phone' name="" id="" />
                            </div>
                            <div>
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <SponsorOfficial
                    sponsors={sponsors}
                    title="Ours partners"
                    features
                />
            </div>
        </div>
    )
}
