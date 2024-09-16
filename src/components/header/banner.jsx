// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';


export default function Banner() {

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="banner"
        >
            {/* <SwiperSlide>
                <img 
                    src="/assets/banner.jpg" 
                    alt="slide 1"
                    width="100%"
                    height="100%"
                />
            </SwiperSlide> */}
            <SwiperSlide>
                <img src="/assets/slide/slide1.JPG" alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/assets/slide/slide2.JPG" alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/assets/slide/slide3.jpg" alt="Slide 4" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/assets/collage1.jpg" alt="Slide 5" />
            </SwiperSlide>
            <SwiperSlide>
                <img src='/assets/collage2.jpg' alt='slide 5' />
            </SwiperSlide>
        </Swiper>
    )
}
