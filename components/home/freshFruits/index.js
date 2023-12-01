import style from '../../../styles/index.module.css'
import { Row, Col, Image, Rate } from 'antd'
import { HiOutlineMailOpen } from "react-icons/hi";

import React, { useRef, useState, useMemo } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { FaEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { BsCart } from "react-icons/bs";

// import required modules
import { Grid, Pagination } from 'swiper/modules';
export const metadata = {
  title: 'Page Title',
  description: 'Page Description',
}


import { Button, Checkbox, Divider, Tabs } from 'antd';
const CheckboxGroup = Checkbox.Group;
const operations = <Button>Extra Action</Button>;
const OperationsSlot = {
  left: <Button className="tabs-extra-demo-button">Left Extra Action</Button>,
  right: <Button>Right Extra Action</Button>,
};
const options = ['left', 'right'];
const items = new Array(3).fill(null).map((_, i) => {
  const id = String(i + 1);
  return {
    label: `Tab ${id}`,
    key: id,
    children: `Content of tab ${id}`,
  };
});

const FreshFruits = () => {

  const [position, setPosition] = useState(['left', 'right']);
  const slot = useMemo(() => {
    if (position.length === 0) return null;
    return position.reduce(
      (acc, direction) => ({
        ...acc,
        [direction]: OperationsSlot[direction],
      }),
      {},
    );
  }, [position]);


  return (
    <div className="mt-16">

      {/* <div>
            <Tabs tabBarExtraContent={operations} items={items} />
      
          </div> */}

      <div style={{ fontWeight: '600', fontSize: '40px', lineHeight: '40px', verticalAlign: 'baseline' }}>
        <center>
          <h2 class="class" >FRESH FRUITS</h2>
          <hr style={{ border: '1px solid #666666', width: '80px', marginTop: '5px', opacity: '0.1' }} />
        </center>
      </div>

      <div className='slider w-full'>
        <div className='slider-item  mx-52 flex row'>
          <Swiper
            slidesPerView={3}
            grid={{
              rows: 2,

            }}
            spaceBetween={30}
            pagination={{
              clickable: true,

            }}
            modules={[Grid, Pagination]}
            className="mySwiper h-[550px] "

          >

            {/*firstt c*/}
            <SwiperSlide>
              <div>
                <Row>
                  <Col span={12}>
                    <div class="main">
                      <Image

                        src="https://www.spotlessfruits.com/cdn/shop/products/SpotlessFruitsIndia-Mulberry_370x370.png?v=1621839039"

                      />
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className='mt-8' >
                      <h2>Fresh Mulberry - 150 Grams</h2>
                      <span class="qv-discountprice regular" style={{ textDecoration: 'line-through', fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>
                      <span class="qv-discountprice regular" style={{ fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>

                      <div className='rate'>
                        <Rate allowHalf defaultValue={2.5} />
                      </div>

                      <div className='iconbox flex row mt-5'>
                        <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}>

                          <FaEye className='text-2xl ml-2 text-white' />
                        </button>

                        <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>

                        <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}><BsCart className='text-2xl ml-2 text-white' /></button>
                      </div>
                    </div>
                  </Col>

                </Row>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <Row>
                  <Col span={12}>
                    <div class="main">
                      <Image

                        src="https://www.spotlessfruits.com/cdn/shop/products/SpotlessFruitsIndia-Raspberry_370x370.png?v=1621838617"

                      />
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className='mt-8' >
                      <h2>Fresh Mulberry - 150 Grams</h2>
                      <span class="qv-discountprice regular" style={{ textDecoration: 'line-through', fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>
                      <span class="qv-discountprice regular" style={{ fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>

                      <div className='rate'>
                        <Rate allowHalf defaultValue={2.5} />
                      </div>

                      <div className='iconbox flex row mt-5'>
                        <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}>

                          <FaEye className='text-2xl ml-2 text-white' />
                        </button>

                        <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>

                        <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}><BsCart className='text-2xl ml-2 text-white' /></button>
                      </div>
                    </div>
                  </Col>

                </Row>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <Row>
                  <Col span={12}>
                    <div class="main">
                      <Image

                        src="https://www.spotlessfruits.com/cdn/shop/products/fruit_01-600x600_370x370.jpg?v=1616429726"

                      />
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className='mt-8' >
                      <h2>Fresh Mulberry - 150 Grams</h2>
                      <span class="qv-discountprice regular" style={{ textDecoration: 'line-through', fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>
                      <span class="qv-discountprice regular" style={{ fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>

                      <div className='rate'>
                        <Rate allowHalf defaultValue={2.5} />
                      </div>

                      <div className='iconbox flex row mt-5'>
                        <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}>

                          <FaEye className='text-2xl ml-2 text-white' />
                        </button>

                        <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>

                        <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}><BsCart className='text-2xl ml-2 text-white' /></button>
                      </div>
                    </div>
                  </Col>

                </Row>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <Row>
                  <Col span={12}>
                    <div class="main">
                      <Image

                        src="https://www.spotlessfruits.com/cdn/shop/products/STRAWBERRYIMPORTED-SPOTLESSFRUITSINDIA_370x370.png?v=1633243397"

                      />
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className='mt-8' >
                      <h2>Fresh Mulberry - 150 Grams</h2>
                      <span class="qv-discountprice regular" style={{ textDecoration: 'line-through', fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>
                      <span class="qv-discountprice regular" style={{ fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>

                      <div className='rate'>
                        <Rate allowHalf defaultValue={2.5} />
                      </div>

                      <div className='iconbox flex row mt-5'>
                        <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}>

                          <FaEye className='text-2xl ml-2 text-white' />
                        </button>

                        <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>

                        <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}><BsCart className='text-2xl ml-2 text-white' /></button>
                      </div>
                    </div>
                  </Col>

                </Row>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <Row>
                  <Col span={12}>
                    <div class="main">
                      <Image

                        src="https://www.spotlessfruits.com/cdn/shop/products/CRANBERRY-SPOTLESSFRUITSINDIA_370x370.png?v=1634187254"

                      />
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className='mt-8' >
                      <h2>Fresh Mulberry - 150 Grams</h2>
                      <span class="qv-discountprice regular" style={{ textDecoration: 'line-through', fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>
                      <span class="qv-discountprice regular" style={{ fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>

                      <div className='rate'>
                        <Rate allowHalf defaultValue={2.5} />
                      </div>

                      <div className='iconbox flex row mt-5'>
                        <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}>

                          <FaEye className='text-2xl ml-2 text-white' />
                        </button>

                        <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>

                        <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}><BsCart className='text-2xl ml-2 text-white' /></button>
                      </div>
                    </div>
                  </Col>

                </Row>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <Row>
                  <Col span={12}>
                    <div class="main">
                      <Image

                        src="https://www.spotlessfruits.com/cdn/shop/products/FreshBlueberry-SpotlessFruitsIndia_370x370.png?v=1624076971"

                      />
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className='mt-8' >
                      <h2>Fresh Mulberry - 150 Grams</h2>
                      <span class="qv-discountprice regular" style={{ textDecoration: 'line-through', fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>
                      <span class="qv-discountprice regular" style={{ fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>

                      <div className='rate'>
                        <Rate allowHalf defaultValue={2.5} />
                      </div>

                      <div className='iconbox flex row mt-5'>
                        <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}>

                          <FaEye className='text-2xl ml-2 text-white' />
                        </button>

                        <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>

                        <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}><BsCart className='text-2xl ml-2 text-white' /></button>
                      </div>
                    </div>
                  </Col>

                </Row>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <Row>
                  <Col span={12}>
                    <div class="main">
                      <Image

                        src="https://www.spotlessfruits.com/cdn/shop/products/SpotlessFruitsIndia-Blackberry_370x370.png?v=1621838838"

                      />
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className='mt-8' >
                      <h2>Fresh Mulberry - 150 Grams</h2>
                      <span class="qv-discountprice regular" style={{ textDecoration: 'line-through', fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>
                      <span class="qv-discountprice regular" style={{ fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>

                      <div className='rate'>
                        <Rate allowHalf defaultValue={2.5} />
                      </div>

                      <div className='iconbox flex row mt-5'>
                        <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}>

                          <FaEye className='text-2xl ml-2 text-white' />
                        </button>

                        <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>

                        <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}><BsCart className='text-2xl ml-2 text-white' /></button>
                      </div>
                    </div>
                  </Col>

                </Row>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <Row>
                  <Col span={12}>
                    <div class="main">
                      <Image

                        src="https://www.spotlessfruits.com/cdn/shop/products/RedCurrant-SpotlessFruitsIndia_370x370.png?v=1630733265"

                      />
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className='mt-8' >
                      <h2>Fresh Mulberry - 150 Grams</h2>
                      <span class="qv-discountprice regular" style={{ textDecoration: 'line-through', fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>
                      <span class="qv-discountprice regular" style={{ fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>

                      <div className='rate'>
                        <Rate allowHalf defaultValue={2.5} />
                      </div>

                      <div className='iconbox flex row mt-5'>
                        <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}>

                          <FaEye className='text-2xl ml-2 text-white' />
                        </button>

                        <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>

                        <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}><BsCart className='text-2xl ml-2 text-white' /></button>
                      </div>
                    </div>
                  </Col>

                </Row>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <Row>
                  <Col span={12}>
                    <div class="main">
                      <Image

                        src="https://www.spotlessfruits.com/cdn/shop/products/SpotlessFruitsIndia-Gooseberry_370x370.png?v=1621880188"

                      />
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className='mt-8' >
                      <h2>Fresh Mulberry - 150 Grams</h2>
                      <span class="qv-discountprice regular" style={{ textDecoration: 'line-through', fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>
                      <span class="qv-discountprice regular" style={{ fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>

                      <div className='rate'>
                        <Rate allowHalf defaultValue={2.5} />
                      </div>

                      <div className='iconbox flex row mt-5'>
                        <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}>

                          <FaEye className='text-2xl ml-2 text-white' />
                        </button>

                        <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>

                        <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}><BsCart className='text-2xl ml-2 text-white' /></button>
                      </div>
                    </div>
                  </Col>

                </Row>
              </div>
            </SwiperSlide>

          </Swiper>

        </div>
        <center>
          <button class="bg-green-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ">
            View All Products

          </button>
        </center>

        <div className='w-full mt-10  ' style={{height:'410px',marginBottom:'-80px',zIndex:'-1'}}>
          <div className=''>
            <Row>
              <Col span={11}>
                <div className=''>
                  <h1 className='text-4xl font-medium text-center'>TODAY'S DEALS </h1>
                  <center>
                    <hr style={{ border: '1px solid #666666', width: '100px', opacity: '0.3' }} />
                  </center>

                </div>
              </Col>

              <Col span={13}>
                <div className={style.bgBox}>
                  <div className=''>
                    <h1 className='text-4xl font-medium text-center'>NEWSLETTER</h1>
                    <center>
                      <hr style={{ border: '1px solid #666666', width: '100px', opacity: '0.3' }} />
                    </center>

                    <div className='w-full'>
                      <div className='ml-20 flex '>
                        <HiOutlineMailOpen size={60} /><h1 className='ml-2 font-medium'>Sign Up & Get Offer</h1>

                      </div>
                      <p className='ml-20 mr-40 text-base'>
                        Sign up now to get offer's directly to your inbox. Get gift voucher that can be used on your second purchase on Spotless Fruits.
                      </p>
                      <div className='flex ml-20'>
                        <form className='onsubmit'>
                          <div className='flex row ' style={{ width: 650, height: 50, borderRadius: '0', marginTop: '40px' }}>
                            <input placeholder='Your Email Address ' className='w-full p-5 h-16' />
                            <Button type="submit" style={{ width: '200px', height: '65px', background: '#3B9048', marginLeft: '2px', borderRadius: '0px', fontFamily: 'sans-serif', fontSize: '20px', color: 'white' }} >SUBSCRIBE
                            </Button>
                          </div>

                        </form>
                      </div>


                    </div>

                  </div>

                </div>
              </Col>
            </Row>
          </div>

        </div>
      </div>

    </div>


  )
}
export default FreshFruits