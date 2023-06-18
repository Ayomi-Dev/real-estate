import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/bundle'

import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);





const Mission = () => {
    return ( 
        <div className="mission">

            <div className="column-1">
                <div className="back">
                    <p className="caption">100% guaranteed comfort.</p>
                </div>

                <Swiper  className="mission-img"
                    pagination={{clickable: true}}
                    loop
                    autoplay={{delay: 5000}}
                    spaceBetween={100}
                    slidesPerView={1}  >
                    <SwiperSlide className="img-slide">
                        <img src="./interior/10.jpg" alt="" />
                    </SwiperSlide>

                    <SwiperSlide className="img-slide">
                        <img src="./bedroom/2.jpeg" alt="" />
                    </SwiperSlide>

                    <SwiperSlide className="img-slide">
                        <img src="./house/5.jpeg" alt="" />
                    </SwiperSlide>

                    <SwiperSlide className="img-slide">
                        <img src="./kitchen/5.jpg" alt="" />
                    </SwiperSlide>

                    <SwiperSlide className="img-slide">
                        <img src="./baths/5.jpeg" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>

            
            <div className="column-2">
                <h1>Why Should You <span>Choose</span> Us?</h1>
                <div className="mission-card">
                    <i className="fa fa-home"></i>
                    <div className="texts">
                        <h2>Propery insurance</h2>
                        <p>Up to 10+ years insurance when you buy</p>
                    </div>
                </div>
                <div className="mission-card">
                <i className="fa fa-home"></i>
                    <div className="texts">
                        <h2>Propery insurance</h2>
                        <p>Up to 10+ years insurance when you buy</p>
                    </div>
                </div>
                <div className="mission-card">
                <i className="fa fa-home"></i>
                    <div className="texts">
                        <h2>Propery insurance</h2>
                        <p>Up to 10+ years insurance when you buy</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Mission;