import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image1 from '../../assets/banner/1.jpg';
import Image2 from '../../assets/banner/2.jpg';

const Hero = () => {
    return (
        <div className="w-full">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                style={{ width: '100%', height: '100%' }}
            >
                <SwiperSlide>
                    <img src={Image1} alt="Banner 1" className="w-full h-[500px] object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image2} alt="Banner 2" className="w-full h-[500px] object-cover" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;
