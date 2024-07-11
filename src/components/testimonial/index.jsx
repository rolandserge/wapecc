import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/scss';
import 'swiper/scss/pagination';

export default function Testimonial() {

    return (
        <section className="testimonial">
            <Swiper
                spaceBetween={15}
                slidesPerView={3}
                modules={[Pagination]}
                className='mySwiper'
                pagination={{
                    clickable: true,
                }}
            >
                <SwiperSlide className='mySlide'>
                    <div className='message-container'>
                        <div className='message'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                reprehenderit dolore mollitia doloremque ad rem impedit 
                                quam incidunt nemo, beatae provident tempore 
                            </p>
                        </div>
                        <div className='profile'>
                            <div className="photo">
                                <img 
                                    src="/assets/user.webp" 
                                    alt="logo de oriss energy"
                                />
                            </div>
                            <div className='nom'>
                                <p>Mr John Doe</p>
                                <span>Participant</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySlide'>
                    <div className='message-container'>
                        <div className='message'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                reprehenderit dolore mollitia doloremque ad rem impedit 
                                quam incidunt nemo, beatae provident tempore 
                            </p>
                        </div>
                        <div className='profile'>
                            <div className="photo">
                                <img 
                                    src="/assets/user.webp" 
                                    alt="logo de oriss energy"
                                />
                            </div>
                            <div className='nom'>
                                <p>Mr John Doe</p>
                                <span>Participant</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySlide'>
                    <div className='message-container'>
                        <div className='message'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                reprehenderit dolore mollitia doloremque ad rem impedit 
                                quam incidunt nemo, beatae provident tempore 
                            </p>
                        </div>
                        <div className='profile'>
                            <div className="photo">
                                <img 
                                    src="/assets/user.webp" 
                                    alt="logo de oriss energy"
                                />
                            </div>
                            <div className='nom'>
                                <p>Mr John Doe</p>
                                <span>Participant</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySlide'>
                    <div className='message-container'>
                        <div className='message'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                reprehenderit dolore mollitia doloremque ad rem impedit 
                                quam incidunt nemo, beatae provident tempore 
                            </p>
                        </div>
                        <div className='profile'>
                            <div className="photo">
                                <img 
                                    src="/assets/user.webp" 
                                    alt="logo de oriss energy"
                                />
                            </div>
                            <div className='nom'>
                                <p>Mr John Doe</p>
                                <span>Participant</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySlide'>
                    <div className='message-container'>
                        <div className='message'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                reprehenderit dolore mollitia doloremque ad rem impedit 
                                quam incidunt nemo, beatae provident tempore 
                            </p>
                        </div>
                        <div className='profile'>
                            <div className="photo">
                                <img 
                                    src="/assets/user.webp" 
                                    alt="logo de oriss energy"
                                />
                            </div>
                            <div className='nom'>
                                <p>Mr John Doe</p>
                                <span>Participant</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
