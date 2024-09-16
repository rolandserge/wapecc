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
          <p>WAPECC Lome 23 speakers</p>
        </div>
        <div className="container">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
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
            breakpoints={{
                // when window width is >= 640px
                600: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                900: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 120
                    // min-width: 600
                }
            }}
          >
            <SwiperSlide className='mySlide'>
              <img 
                  src="/assets/user.webp" 
                  alt="La premiere team"
              />
              <div className='overlay'>
                  <span>Name of speaker</span>
                  <p>Role</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='mySlide'>
              <img 
                  src="/assets/user.webp" 
                  alt="La deuxieme team"
              />
              <div className='overlay'>
                  <span>Name of speaker</span>
                  <p>Role</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='mySlide'>
              <img 
                  src="/assets/user.webp" 
                  alt="La premiere team"
              />
              <div className='overlay'>
                  <span>Name of speaker</span>
                  <p>Role</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='mySlide'>
              <img 
                  src="/assets/user.webp" 
                  alt="La deuxieme team"
              />
              <div className='overlay'>
                  <span>Name of speaker</span>
                  <p>Role</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='mySlide'>
              <img 
                  src="/assets/user.webp" 
                  alt="La premiere team"
              />
              <div className='overlay'>
                  <span>Name of speaker</span>
                  <p>Role</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='mySlide'>
              <img 
                  src="/assets/user.webp" 
                  alt="La deuxieme team"
              />
              <div className='overlay'>
                  <span>Name of speaker</span>
                  <p>Role</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    )
}
