import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CardSponsor from "./partner/card";

export default function SponsorOfficial({ sponsors }) {

  return (
    <div className="sponsor-offical-section">
        <div className='titre'>
            <p>Offical endorsing partners</p>
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
        >
            { sponsors.map(item => (
                <SwiperSlide key={item.id}>
                    <CardSponsor items={item} />
                </SwiperSlide> 
            ))}
        </Swiper>
    </div>
  )
}
