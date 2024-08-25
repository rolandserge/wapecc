import Banner from '../../components/banner'
import SponsorOfficial from '../../components/sponsorOfficial'
import { sponsors } from '../../data'

export default function RegisterSponsor() {

    return (

        <div className='register-page'>
            <Banner
                image="/assets/register.webp"
                title="Register sponsorship"
            />
            <div className="register-content">
                <p className='title'>Register your interest : WAPECC 23</p>
                <div className='description'>
                    <span>Complete the form below to register your interest and be the first to receive updates for WAPECC23.</span>
                </div>
                <div className="register-form">
                    <div className="register-image">
                        <img src="/assets/register.webp" alt="register illustration" />
                    </div>
                    <form action="">
                        <div className='flex'>
                            <input type="text" required placeholder='Entrer your lastName' />
                            <input type='text' required placeholder="Enter your fristName" />
                        </div>
                        <div className='flex'>
                            <input type="text" required placeholder="Enter the Compagny Name" />
                            <input type="text" required placeholder="Enter Job title" />
                        </div>
                        <div>
                            <input type="email" required placeholder="Enter Email" />
                        </div>
                        <div>
                            <select name="" id="" required>
                                <option value="">Please choose an option Register your interest in</option>
                                <option value="">Forfait Gold</option>
                                <option value="">Forfait premium</option>
                                <option value="">Fortfait gratuit</option>
                            </select>
                        </div>
                        <div>
                            <select name="" id="" required>
                                <option value="">Please choose an option Sector</option>
                                <option value="">Agriculture</option>
                                <option value="">Energie durable</option>
                            </select>
                        </div>
                        <div>
                            <textarea name="" id="" placeholder='Enter your comment or message'>

                            </textarea>
                        </div>
                        <div>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>

                <SponsorOfficial sponsors={sponsors} features />
            </div>
        </div>
    )
}
