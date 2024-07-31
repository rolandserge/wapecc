import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CardSponsor from "./partner/card";
import { Link } from "react-router-dom";
import { HiArrowSmRight } from "react-icons/hi";
import { PiCodesandboxLogoThin } from "react-icons/pi";
import { LiaHandshakeSolid, LiaUserTieSolid } from "react-icons/lia";

export default function SponsorOfficial({ sponsors, title, features }) {

  return (
    <div className="sponsor-offical-section">
        { features && (
            <div className="feature-user">
                <div className="card">
                    <div className="head">
                        <div className="card-icon">
                            <PiCodesandboxLogoThin className="icon" /> 
                        </div>
                        <p>Exhibition</p>
                    </div>
                    <div className="description">
                        <p>
                            Discover the limitless possibilities to showcase your 
                            innovations at the WAPECC 23 in West Africa.
                        </p>
                    </div>
                    <div className="action">
                        <Link to="#" className="register">
                            Explore more
                            <HiArrowSmRight className="icon" />
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="head">
                        <div className="card-icon">
                            <LiaHandshakeSolid className="icon" /> 
                        </div>
                        <p>Sponsor</p>
                    </div>
                    <div className="description">
                        <p>
                            Elevate your brand to new heights as a 
                            sponsor of the WAPECC 23 in West Africa .
                        </p>
                    </div>
                    <div className="action">
                        <Link to="#" className="register">
                            Explore more
                            <HiArrowSmRight className="icon" />
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="head">
                        <div className="card-icon">
                            <LiaUserTieSolid className="icon" /> 
                        </div>
                        <p>Delegate</p>
                    </div>
                    <div className="description">
                        <p>
                            Discover the limitless possibilities to showcase your 
                            innovations at the WAPECC 23 in West Africa.
                        </p>
                    </div>
                    <div className="action">
                        <Link to="#" className="register">
                            Explore more
                            <HiArrowSmRight className="icon" />
                        </Link>
                    </div>
                </div>
            </div>
        ) }
        <div className='titre'>
            <p>{title}</p>
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
