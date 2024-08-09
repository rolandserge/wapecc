import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

import { Pagination, Autoplay } from 'swiper/modules';

export default function Speaker() {

    return (
      <section className='speaker'>
        <div className="title">
          <p>WAPECC Lomé 23 speakers</p>
        </div>
        <div className="container">
          <Swiper
            spaceBetween={120}
            slidesPerView={3}
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
              <img 
                  src="/assets/team1.png" 
                  alt="La premiere team"
              />
              <div className='overlay'>
                  <span>Mr Bah F.M Saho</span>
                  <p>Excecutive Director of ECREEE</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='mySlide'>
              <img 
                  src="/assets/team1.png" 
                  alt="La deuxieme team"
              />
              <div className='overlay'>
                  <span>Prof Honoré Bogler</span>
                  <p>Chairman of ERERA</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='mySlide'>
              <img 
                  src="/assets/team1.png" 
                  alt="La premiere team"
              />
              <div className='overlay'>
                  <span>Mr Bah F.M Saho</span>
                  <p>Excecutive Director of ECREEE</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='mySlide'>
              <img 
                  src="/assets/team1.png" 
                  alt="La deuxieme team"
              />
              <div className='overlay'>
                  <span>Prof Honoré Bogler</span>
                  <p>Chairman of ERERA</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='mySlide'>
              <img 
                  src="/assets/team1.png" 
                  alt="La premiere team"
              />
              <div className='overlay'>
                  <span>Mr Bah F.M Saho</span>
                  <p>Excecutive Director of ECREEE</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='mySlide'>
              <img 
                  src="/assets/team1.png" 
                  alt="La deuxieme team"
              />
              <div className='overlay'>
                  <span>Prof Honoré Bogler</span>
                  <p>Chairman of ERERA</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    )
}
