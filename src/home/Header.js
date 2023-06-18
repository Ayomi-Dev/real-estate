import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/bundle'

import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';


SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

const Header = () => {
   
    return ( 
        <div className="header">
            
            <Swiper  className="slides"
                loop
                autoplay = {{delay: 3000}}
                spaceBetween={100}
                slidesPerView={1}
                effect="fade"
                fadeEffect={{crossFade: true}}
                >
                <SwiperSlide className="img-slide">
                    <img src="./house/1.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className="img-slide">
                    <img src="./house/2.jpeg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="img-slide">
                    <img src="./house/4.jpeg" alt="" />
                </SwiperSlide>
            </Swiper>

            <div className="overlay">
                <div className="header-text">
                    <h1>Unlock Your Dream Home</h1>
                    <h3>Discover the Perfect Property for Your Lifestyle!</h3>
                    <button>Explore <i className="fa fa-arrow-right-long"></i></button>
                </div>
                <div className="numbers">
                    <div className="number">
                        <div className="icon">
                            <i className="fa fa-home"></i>
                        </div>
                        <p>140,000+ <br /> <span>Owners with licence</span> </p>
                    </div>
                    <div className="number">
                        <div className="icon">
                            <i className="fa fa-users"></i>
                        </div>
                        <p>1.2M+ <br /> <span>Owners with licence</span> </p>
                    </div>
                    <div className="number">
                        <div className="icon">
                            <i className="fa fa-star"></i>
                        </div>
                        <p>500,000+ <br /> <span>Owners with licence</span> </p>
                    </div>
                    <div className="number">
                        <div className="icon">
                            <i className="fa fa-hands"></i>
                        </div>
                        <p>750,000+ <br /> <span>Owners with licence</span> </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Header;