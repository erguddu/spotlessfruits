import { Row, Col,Image } from 'antd'
import style from '../../../styles/index.module.css'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';




const offer = () => {
    return (
        <div className='productImage w-full'>
            <div className={style.bgimage}>
                <div >
                    <Row>
                        <Col span={24}>
                            <div className=' mt-20 p-10'>
                                <div>
                                    <center> <h2 className='text-2xl text-green-700'>Special Discount</h2></center>
                                </div>
                                <div className='w-50 mx-80'>
                                    <div class={style.bordetext}>
                                        <div>

                                        </div>
                                        <div class={style.parallaxTitle}>
                                            <h1>FRESH FRUITS</h1>
                                            <h5 style={{ fontWeight: '400', fontSize: '25px', marginTop: '-20px' }}>THE SALE ENDS IN : </h5>

                                            <button className='w-28 rounded-md text-white mt-5  h-10 text-sm bg-green-700'>SHOP NOW </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>


                </div>
            </div>

            <div className='mt-16'>
                <Row>
                    <Col span={24}>
                        <div className='w-full'>

                            <div className='mx-56'>
                                <div>
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={10}
                                       
                                        breakpoints={{
                                            '@0.00': {
                                                slidesPerView: 1,
                                                spaceBetween: 10,
                                            },
                                            '@0.75': {
                                                slidesPerView: 2,
                                                spaceBetween: 20,
                                            },
                                            '@1.00': {
                                                slidesPerView: 3,
                                                spaceBetween: 40,
                                            },
                                            '@1.50': {
                                                slidesPerView: 4,
                                                spaceBetween: 50,
                                            },
                                        }}
                                        modules={[Pagination]}
                                        className="mySwiper"
                                    >
                                
                                <SwiperSlide>
                                    <div className='main flex'>
                                        <div className='image-box'>
                                            <Image
                                                width={223}
                                                height={100}
                                                padding={0}
                                                src="https://www.spotlessfruits.com/cdn/shop/files/Copy_of_Lic._No._21521031000400_130x130@2x.png?v=1625943051"

                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/*second slider */}
                                <SwiperSlide>
                                    <div className='main flex'>
                                        <div className='image-box'>
                                            <Image
                                                width={223}
                                                height={100}
                                                padding={100}
                                                src="https://www.spotlessfruits.com/cdn/shop/files/Copy_of_Lic._No._21521031000400_1_130x130@2x.png?v=1625943542"

                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/*end slider */}

                                {/*third slider */}
                                <SwiperSlide>
                                    <div className='main flex'>
                                        <div className='image-box'>
                                            <Image
                                                width={223}
                                                height={100}
                                                padding={0}
                                                src="https://www.spotlessfruits.com/cdn/shop/files/Copy_of_Lic._No._21521031000400_130x130@2x.png?v=1625943051"

                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>     
                                {/*end slider */}

                                {/*fourth slider */}
                                <SwiperSlide>
                                    <div className='main flex'>
                                        <div className='image-box'>
                                            <Image
                                                width={223}
                                                height={100}
                                                padding={100}
                                                src="https://www.spotlessfruits.com/cdn/shop/files/Copy_of_Lic._No._21521031000400_1_130x130@2x.png?v=1625943542"

                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/*end slider */}

                                {/*five slider */}
                                <SwiperSlide>
                                    <div className='main flex'>
                                        <div className='image-box'>
                                            <Image
                                                width={223}
                                                height={100}
                                                padding={0}
                                                src="https://www.spotlessfruits.com/cdn/shop/files/Copy_of_Lic._No._21521031000400_130x130@2x.png?v=1625943051"

                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/*end slider */}


                                <SwiperSlide>
                                    <div className='main flex'>
                                        <div className='image-box'>
                                            <Image
                                                width={223}
                                                height={100}
                                                padding={0}
                                                src="https://www.spotlessfruits.com/cdn/shop/files/Copy_of_Lic._No._21521031000400_130x130@2x.png?v=1625943051"

                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/*second slider */}
                                <SwiperSlide>
                                    <div className='main flex'>
                                        <div className='image-box'>
                                            <Image
                                                width={223}
                                                height={100}
                                                padding={100}
                                                src="https://www.spotlessfruits.com/cdn/shop/files/Copy_of_Lic._No._21521031000400_1_130x130@2x.png?v=1625943542"

                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/*end slider */}

                                {/*third slider */}
                                <SwiperSlide>
                                    <div className='main flex'>
                                        <div className='image-box'>
                                            <Image
                                                width={223}
                                                height={100}
                                                padding={0}
                                                src="https://www.spotlessfruits.com/cdn/shop/files/Copy_of_Lic._No._21521031000400_130x130@2x.png?v=1625943051"

                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>     
                                {/*end slider */}

                                {/*fourth slider */}
                                <SwiperSlide>
                                    <div className='main flex'>
                                        <div className='image-box'>
                                            <Image
                                                width={223}
                                                height={100}
                                                padding={100}
                                                src="https://www.spotlessfruits.com/cdn/shop/files/Copy_of_Lic._No._21521031000400_1_130x130@2x.png?v=1625943542"

                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/*end slider */}

                                {/*five slider */}
                                <SwiperSlide>
                                    <div className='main flex'>
                                        <div className='image-box'>
                                            <Image
                                                width={223}
                                                height={100}
                                                padding={0}
                                                src="https://www.spotlessfruits.com/cdn/shop/files/Copy_of_Lic._No._21521031000400_130x130@2x.png?v=1625943051"

                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/*end slider */}

                                
                                {/*seven slider */}
                                
                                    </Swiper>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )

}

export default offer