import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

import { Pagination, Autoplay } from 'swiper/modules';

export default function Sponsor() {

    return (
        <section className='sponsor'>
            <div>
                <h2>OUR VIRTUAL WAPECC21 OFFICIAL SPONSORS</h2>
            </div>
            <Swiper
                spaceBetween={15}
                slidesPerView={4}
                modules={[Pagination, Autoplay]}
                className='mySwiper'
                
                autoplay={{
                    delay: 2500,
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
                            src="/assets/oriss.jpeg" 
                            alt="logo de oriss energy"
                        />
                        <div className='overlay'>
                            <span>Oriss Energy</span>
                            <p>Sponsor</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySlide'>
                    <div className='image-container'>
                        <img 
                            src="/assets/zimpertec.jpg" 
                            alt="logo de oriss energy"
                        />
                        <div className='overlay'>
                            <span>Zimpertec</span>
                            <p>Sponsor</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySlide'>
                    <div className='image-container'>
                        <img 
                            src="/assets/giz.png" 
                            alt="logo de oriss energy"
                        />
                        <div className='overlay'>
                            <span>GIZ</span>
                            <p>Sponsor</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySlide'>
                    <div className='image-container'>
                        <img 
                            src="/assets/cip.jpeg" 
                            alt="logo de cip"
                        />
                        <div className='overlay'>
                            <span>CIP</span>
                            <p>Sponsor</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySlide'>
                    <div className='image-container'>
                        <img 
                            src="/assets/ja-solor.jpeg" 
                            alt="logo de ja solor"
                        />
                        <div className='overlay'>
                            <span>CIP</span>
                            <p>Sponsor</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
