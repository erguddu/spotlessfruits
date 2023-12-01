
import {Row, Col ,Image, Rate} from 'antd'


import React, { useRef, useState } from 'react';
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



  
const SaleProduct = ()=>{
    return (
       <div className="mt-10">
            <div style={{fontWeight:'600',fontSize:'40px',lineHeight:'40px',verticalAlign:'baseline'}}>
                  <center>
                  <h2 class="class" >DEAL OF THE DAY</h2>
                  <hr style={{border:'1px solid #666666',width:'80px',marginTop:'5px',opacity:'0.1'}} />
                  </center>    
            </div>

            <div className='slider pt-5 pb-5 w-full' style={{height:'auto'}}>
                  <div className='slider-item  mx-52 flex row'>
                        <Swiper
                              slidesPerView={2}
                              grid={{
                                rows: 1,
                              }}
                              spaceBetween={30}
                              pagination={{
                                clickable: true,
                              }}
                              modules={[Grid, Pagination]}
                              className="mySwiper"
                              
                            > 
                            <div className='mt-20'></div>
                            <div>
                                  {/*firstt c*/}
                              <SwiperSlide className=''>
                                  <div className='border border-slate-200 '>
                                      <Row>
                                          <Col span={12}>
                                            <div class="main">
                                            <Image
                                
                                                src="https://www.spotlessfruits.com/cdn/shop/products/ApricotImported-SpotlessFruitsIndia_370x480.png?v=1630043573"

                                              />
                                            </div>
                                          </Col>
                                          <Col span={12}>
                                            <div className='mt-8' >
                                                <h2>Fresh Mulberry - 150 Grams</h2>
                                                <span class="qv-discountprice regular" style={{textDecoration: 'line-through',fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                
                                                <div className='rate'>
                                                <Rate allowHalf defaultValue={2.5} />
                                                </div>
                                                
                                                <div className='iconbox flex row mt-5'>
                                                    <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}>
                                                         
                                                         <FaEye className='text-2xl ml-2 text-white'/>  
                                                    </button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}><BsCart className='text-2xl ml-2 text-white'/></button>
                                                </div>
                                            </div>
                                          </Col>
                                          
                                      </Row>
                                  </div>
                              </SwiperSlide>
                              
                              <SwiperSlide>
                                  <div className='border border-slate-200'>
                                      <Row>
                                          <Col span={12}>
                                            <div class="main">
                                            <Image
                                
                                                src="https://www.spotlessfruits.com/cdn/shop/products/FreshBlueberry-SpotlessFruitsIndia_370x480.png?v=1624076971"

                                              />
                                            </div>
                                          </Col>
                                          <Col span={12}>
                                            <div className='mt-8' >
                                                <h2>Fresh Mulberry - 150 Grams</h2>
                                                <span class="qv-discountprice regular" style={{textDecoration: 'line-through',fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                
                                                <div className='rate'>
                                                <Rate allowHalf defaultValue={2.5} />
                                                </div>
                                                
                                                <div className='iconbox flex row mt-5'>
                                                    <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}>
                                                         
                                                         <FaEye className='text-2xl ml-2 text-white'/>  
                                                    </button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}><BsCart className='text-2xl ml-2 text-white'/></button>
                                                </div>
                                            </div>
                                          </Col>
                                          
                                      </Row>
                                  </div>
                              </SwiperSlide>
                              
                              <SwiperSlide>
                              <div className='border border-slate-200'>
                                      <Row>
                                          <Col span={12}>
                                            <div class="main">
                                            <Image
                                
                                                src="https://www.spotlessfruits.com/cdn/shop/products/SpotlessFruitsIndia-Mulberry_370x480.png?v=1621839039"

                                              />
                                            </div>
                                          </Col>
                                          <Col span={12}>
                                            <div className='mt-8' >
                                                <h2>Fresh Mulberry - 150 Grams</h2>
                                                <span class="qv-discountprice regular" style={{textDecoration: 'line-through',fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                
                                                <div className='rate'>
                                                <Rate allowHalf defaultValue={2.5} />
                                                </div>
                                                
                                                <div className='iconbox flex row mt-5'>
                                                    <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}>
                                                         
                                                         <FaEye className='text-2xl ml-2 text-white'/>  
                                                    </button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}><BsCart className='text-2xl ml-2 text-white'/></button>
                                                </div>
                                            </div>
                                          </Col>
                                          
                                      </Row>
                                  </div>
                              </SwiperSlide>
                              
                              <SwiperSlide>
                              <div className='border border-slate-200'>
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
                                                <span class="qv-discountprice regular" style={{textDecoration: 'line-through',fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                
                                                <div className='rate'>
                                                <Rate allowHalf defaultValue={2.5} />
                                                </div>
                                                
                                                <div className='iconbox flex row mt-5'>
                                                    <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}>
                                                         
                                                         <FaEye className='text-2xl ml-2 text-white'/>  
                                                    </button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}><BsCart className='text-2xl ml-2 text-white'/></button>
                                                </div>
                                            </div>
                                          </Col>
                                          
                                      </Row>
                                  </div>
                              </SwiperSlide>
                              
                              <SwiperSlide> 
                                <div className='border border-slate-200'>
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
                                                <span class="qv-discountprice regular" style={{textDecoration: 'line-through',fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                
                                                <div className='rate'>
                                                <Rate allowHalf defaultValue={2.5} />
                                                </div>
                                                
                                                <div className='iconbox flex row mt-5'>
                                                    <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}>
                                                         
                                                         <FaEye className='text-2xl ml-2 text-white'/>  
                                                    </button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}><BsCart className='text-2xl ml-2 text-white'/></button>
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
                                                <span class="qv-discountprice regular" style={{textDecoration: 'line-through',fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                
                                                <div className='rate'>
                                                <Rate allowHalf defaultValue={2.5} />
                                                </div>
                                                
                                                <div className='iconbox flex row mt-5'>
                                                    <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}>
                                                         
                                                         <FaEye className='text-2xl ml-2 text-white'/>  
                                                    </button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}><BsCart className='text-2xl ml-2 text-white'/></button>
                                                </div>
                                            </div>
                                          </Col>
                                          
                                      </Row>
                                  </div>
                              </SwiperSlide>

                              <SwiperSlide>
                                   <div className='border border-slate-200'>
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
                                                <span class="qv-discountprice regular" style={{textDecoration: 'line-through',fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                
                                                <div className='rate'>
                                                <Rate allowHalf defaultValue={2.5} />
                                                </div>
                                                
                                                <div className='iconbox flex row mt-5'>
                                                    <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}>
                                                         
                                                         <FaEye className='text-2xl ml-2 text-white'/>  
                                                    </button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}><BsCart className='text-2xl ml-2 text-white'/></button>
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
                                                <span class="qv-discountprice regular" style={{textDecoration: 'line-through',fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                
                                                <div className='rate'>
                                                <Rate allowHalf defaultValue={2.5} />
                                                </div>
                                                
                                                <div className='iconbox flex row mt-5'>
                                                    <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}>
                                                         
                                                         <FaEye className='text-2xl ml-2 text-white'/>  
                                                    </button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}><BsCart className='text-2xl ml-2 text-white'/></button>
                                                </div>
                                            </div>
                                          </Col>
                                          
                                      </Row>
                                  </div>
                              </SwiperSlide>

                              <SwiperSlide>
                                   <div className='border border-slate-200'>
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
                                                <span class="qv-discountprice regular" style={{textDecoration: 'line-through',fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                
                                                <div className='rate'>
                                                <Rate allowHalf defaultValue={2.5} />
                                                </div>
                                                
                                                <div className='iconbox flex row mt-5'>
                                                    <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}>
                                                         
                                                         <FaEye className='text-2xl ml-2 text-white'/>  
                                                    </button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}><BsCart className='text-2xl ml-2 text-white'/></button>
                                                </div>
                                            </div>
                                          </Col>
                                          
                                      </Row>
                                  </div>
                              </SwiperSlide>
                           
                            </div>
                              
                            </Swiper>
                  </div>
            </div>
           
       </div>     

       
    )
}
export default SaleProduct