import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/swiper-bundle.css';


import { Autoplay } from 'swiper/modules';
import { partners } from '../../data';

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
                { partners.map((partner, index) => (
                    <SwiperSlide className='mySlide' key={index}>
                        <div className='image-container'>
                            <img 
                                src={partner.image} 
                                alt="logo du partnes"
                            />
                        </div>
                    </SwiperSlide>

                ))
                }
            </Swiper>
        </section>
    )
}
