import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

import { Autoplay } from 'swiper/modules';

export default function Sponsor() {

    return (
        <section className='sponsor'>
            <div>
                <p>WAPECC Lomé 23 officals sponsors</p>
            </div>
            <Swiper
                spaceBetween={15}
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
                            src="/assets/oriss.jpeg" 
                            alt="logo de oriss energy"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySlide'>
                    <div className='image-container'>
                        <img 
                            src="/assets/zimpertec.jpg" 
                            alt="logo de oriss energy"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySlide'>
                    <div className='image-container'>
                        <img 
                            src="/assets/giz.png" 
                            alt="logo de oriss energy"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySlide'>
                    <div className='image-container'>
                        <img 
                            src="/assets/cip.jpeg" 
                            alt="logo de cip"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySlide'>
                    <div className='image-container'>
                        <img 
                            src="/assets/ja-solor.jpeg" 
                            alt="logo de ja solor"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
