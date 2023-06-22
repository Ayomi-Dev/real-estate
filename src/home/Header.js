import Image1 from '../assets/house/1.webp'
import Image2 from '../assets/house/4.jpeg'
import Image3 from '../assets/house/2.jpeg'


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

                    <img src={Image1} alt="" />

                </SwiperSlide>

                <SwiperSlide className="img-slide">

                    <img src={Image2} alt="" />

                </SwiperSlide>
                <SwiperSlide className="img-slide">

                    <img src={Image3} alt="" />

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
                        <p>560,000+ <br /> <span>Owners with licence</span> </p>
                    </div>
                    <div className="number">
                        <div className="icon">
                            <i className="fa fa-users"></i>
                        </div>
                        <p>1.2M+ <br /> <span>New and Existing Users</span> </p>
                    </div>
                    <div className="number">
                        <div className="icon">
                            <i className="fa fa-star"></i>
                        </div>
                        <p>50,000+ <br /> <span>Star Ratings</span> </p>
                    </div>
                    <div className="number">
                        <div className="icon">
                            <i className="fa fa-location-dot"></i>
                        </div>
                        <p>250,000+ <br /> <span>Locations Covered</span> </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Header;