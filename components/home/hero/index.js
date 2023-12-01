const contentStyle = {
    height: 'auto',
    width: '1100px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    zIndex:'-1'
  };
  
  import React, { useRef, useState } from 'react';
  // Import Swiper React components
  import { Swiper, SwiperSlide } from 'swiper/react';
  
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  
  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';
  

const Swipper = () =>{
    return (
        <div >
           <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper z-0"
        >
           <div > 
           <SwiperSlide>
            <div style={contentStyle}>
              <a href="/products/apricot-imported" class="slideshow__link">
                <img src=" //www.spotlessfruits.com/cdn/shop/files/Fresh_Apricot_-_Spotless_Fruits_India_-BN_1920x750.png?v=1630129336" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>

            <div style={contentStyle}>
              <div class="slideshow__item">
                <a href="/products/fresh-nectarine-imported" class="slideshow__link">
                  <img src=" //www.spotlessfruits.com/cdn/shop/files/16_1920x750.png?v=1689661258" />
                </a>
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div style={contentStyle}>
              <div class="slideshow__item">
                <a href="/collections/the-berry-collection" class="slideshow__link">
                  <img src=" //www.spotlessfruits.com/cdn/shop/files/Fresh_Berries_-_Spotless_Fruits_India_390a9c91-db01-440a-92e7-ae79935c3f1d_1920x750.png?v=1630134244" />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={contentStyle}>
              <div class="slideshow__item">
                <a href="/collections/imported-fruits" class="slideshow__link">
                  <img src=" //www.spotlessfruits.com/cdn/shop/files/Spotless_Fruits_India_-_Exotic_Fruits_1920x750.png?v=1628767216" />
                </a>
              </div>
            </div>
          </SwiperSlide>

            </div> 
          
        </Swiper>
        </div>
    )
}

export default Swipper