import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

import { Autoplay } from 'swiper/modules';

export default function Partner() {

    return (
        <section className='partner'>
            <div className='title'>
                <h2>OUR VIRTUAL WAPECC21 PARTNERS</h2>
            </div>
            <Swiper
                spaceBetween={20}
                slidesPerView={4}
                modules={[Autoplay]}
                className='mySwiper'
                loop={true}
                speed={9000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                pagination={{
                    clickable: true,
                }}
            >
                <SwiperSlide className='mySlide'>
                    <div className='image-container'>
                        <img 
                            src="/assets/cie.jpg" 
                            alt="logo de cie"
                        />
                    </div>
                    <div className='overlay'>
                        {/* <p>CIE</p> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySlide'>
                    <div className='image-container'>
                        <img 
                            src="/assets/anare.jpg" 
                            alt="logo de Anare"
                        />
                    </div>
                    <div className='overlay'>
                        {/* <p>ANARE</p> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySlide'>
                    <div className='image-container'>
                        <img 
                            src="/assets/gridco.png" 
                            alt="logo de gridco"
                        />
                    </div>
                    <div className='overlay'>
                        {/* <p>GRIDCO</p> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySlide'>
                    <div className='image-container'>
                        <img 
                            src="/assets/cienergies.png" 
                            alt="logo de ci-energies"
                        />
                    </div>
                    <div className='overlay'>
                        {/* <p>CI-ENERGIES</p> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySlide'>
                    <div className='image-container'>
                        <img 
                            src="/assets/energie.jpg" 
                            alt="logo du minstere du petrole"
                        />
                    </div>
                    <div className='overlay'>
                        {/* <p>MINISTRY OF PETROLEUM ENERGY AND RENEWABLE ENERGIES COTE D'IVOIRE</p> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySlide'>
                    <div className='image-container'>
                        <img 
                            src="/assets/ghana.jpg" 
                            alt="logo du minstere du petrole"
                        />
                    </div>
                    <div className='overlay'>
                        {/* <p>MINISTRY OF ENERGY AND PETROLEUM GHANA</p> */}
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
