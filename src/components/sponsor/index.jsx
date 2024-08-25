import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/swiper-bundle.css';


import { Autoplay } from 'swiper/modules';

export default function Sponsor() {

    return (
        <section className='sponsor'>
            <div>
                <p>WAPECC Lome23 Official Endorsing Partners</p>
            </div>
            <Swiper
                spaceBetween={10}
                slidesPerView={2}
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
                breakpoints={{
                // when window width is >= 640px
                    600: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    },
                    900: {
                        slidesPerView: 4,
                        spaceBetween: 10
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 10
                        // min-width: 600
                    }
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
