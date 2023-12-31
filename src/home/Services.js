import Interior from '../assets/interior/10.jpg'
import Bed from '../assets/bedroom/3.jpeg'
import Bath from '../assets/baths/6.jpeg'
import Kitchen from '../assets/kitchen/12.jpeg'
import House from '../assets/house/4.jpeg'


import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/bundle'

import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { Link } from 'react-router-dom'

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);





const Service = () => {
    return ( 
        <div className="service">

            <div className="column-1">
                <div className="back">
                    <p className="caption">100% guaranteed comfort.</p>
                </div>

                <Swiper  style={{
                    width: "70%",
                    position: "absolute",
                    top:"15%",
                    height: "70%",
                    transform: "translateX(30%)",
                    boxShadow:" 0 4px 10px rgba(0,0,0,.3)",
                    borderRadius: "5px"
                    }}
                    pagination={{clickable: true}}
                    loop
                    autoplay={{delay: 5000}}
                    spaceBetween={100}
                    slidesPerView={1}  >
                    <SwiperSlide className="img-slide">
                        <img src={ Interior } alt="" />
                    </SwiperSlide>

                    <SwiperSlide className="img-slide">
                        <img src={ Bed } alt="" />
                    </SwiperSlide>

                    <SwiperSlide className="img-slide">
                        <img src={ Bath } alt="" />
                    </SwiperSlide>

                    <SwiperSlide className="img-slide">
                        <img src={ Kitchen } alt="" />
                    </SwiperSlide>

                    <SwiperSlide className="img-slide">
                        <img src={ House } alt="" />
                    </SwiperSlide>
                </Swiper>

                <div className="read-more">
                    <Link to={'/about'}>
                        <button>Read More</button>
                    </Link>
                </div>
            </div>

            
            <div className="column-2">
                <h1>Why Should You <span>Choose</span> Us?</h1>
                <div className="service-card">
                    <i className="fa fa-users"></i>
                    <div className="texts">
                        <h2>Brokage Services</h2>
                        <p>Connecting Dreams, <br />
                         Sealing Deals.</p>
                    </div>
                </div>
                <div className="service-card two">
                    <i className="fa fa-landmark"></i>
                    <div className="texts">
                        <h2>Property Management</h2>
                        <p>Unlocking the Potential, <br />
                         Maximizing returns.</p>
                    </div>
                </div>

                <div className="service-card">
                    <i className="fa fa-robot"></i>
                    <div className="texts">
                        <h2>Development Services</h2>
                        <p>Building a Vision, <br />
                         Creating Opportunities.</p>
                    </div>
                </div>

                <div className="service-card two">
                    <i className="fa fa-chart-column"></i>
                    <div className="texts">
                        <h2>Land Advisory</h2>
                        <p>Giving Your Land Journey,<br /> 
                        Empowering Your Decision.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Service;