// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from "react-router-dom"

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
            <div className='fond'>
                <div className="info">
                    <span>19TH - 21ST March 2025 TOGO - Lomé</span>
                    <div>
                        <p>Sustainable Energy Solutions for West Africa :</p>
                        <p>Navigating Challenges, Embracing Opportunities</p>
                    </div>
                    <Link to="#" className='agenda'>Agenda</Link>
                </div>
            </div>
            
            <SwiperSlide>
                <img src='/assets/slide/slide4.webp' alt='slide 5' />
            </SwiperSlide>
            <SwiperSlide>
                <img src='/assets/collage2.jpg' alt='slide 5' />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/assets/slide/slide2.JPG" alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/assets/collage1.jpg" alt="Slide 5" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/assets/slide/slide1.JPG" alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/assets/slide/slide3.jpg" alt="Slide 4" />
            </SwiperSlide>
        </Swiper>
    )
}
