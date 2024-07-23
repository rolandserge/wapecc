import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

import { Autoplay } from 'swiper/modules';
import { sponsors } from '../../data';
import CardSponsor from './card';

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
                { sponsors.map(item => (
                    <SwiperSlide key={item.id}>
                        <CardSponsor items={item} />
                    </SwiperSlide> 
                ))}
            </Swiper>
        </section>
    )
}
