
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



  
const TrendingProduct = ()=>{
    return (
       <div className="mt-10">
            <div style={{fontWeight:'600',fontSize:'40px',lineHeight:'40px',verticalAlign:'baseline'}}>
                  <center>
                  <h2 class="class" >TRENDING NOW</h2>
                  <hr style={{border:'1px solid #666666',width:'80px',marginTop:'5px',opacity:'0.1'}} />
                  </center>    
            </div>

            <div className='slider w-full mt-10'>
                  <div className='slider-item  mx-52 flex row'>
                        <Swiper
                              slidesPerView={3}
                              grid={{
                                rows: 1,

                              }}
                              spaceBetween={30}
                              pagination={{
                                clickable: true,
                                
                              }}
                              modules={[Grid, Pagination]}
                              className="mySwiper h-[500px] "
                              
                            >
                              
                              {/*firstt c*/}
                              <SwiperSlide>
                                  <div>
                                      <Row>
                                        <div className='product flex row w-full'>
                                        <Col span={18}>
                                            <div class="main">
                                            <Image
                                
                                                src="https://www.spotlessfruits.com/cdn/shop/products/FreshNectarine-SpotlessFruitsIndia_370x370.png?v=1630128993"

                                              />
                                              
                                            </div>
                                             <div className='w-full  text-center'>
                                             <div className='rate'>
                                                <Rate allowHalf defaultValue={2.5} />
                                              </div>
                                              <div className=' text-center mt-3 mb-2'>
                                                    <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}>
                                                         
                                                         <FaEye className='text-2xl ml-2 text-white'/>  
                                                    </button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}><BsCart className='text-2xl ml-2 text-white'/></button>
                                                </div> 
                                             
                                                 <h2 className='Poppins #666666 text-lg font-Poppins'>Fresh Nectarine Imported</h2>
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',letterSpacing:'1px',color:'#666666'}}>
                                                Fresh Imported Nectarine delivered directly to your home within 24 hours in Mumbai, Nav...  
                                                </span><br />
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                <span class="qv-discountprice regular"  style={{textDecoration: 'line-through',fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                               
                                                  
                                            </div>
                                          </Col>
                                          <Col span={6}>
                                              <div className=' '>
                                                    <div className='w-20  '>
                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>
                                                        
                                                    </div>
                                              </div>
                                          </Col>
                                        </div>
                                      </Row>
                                  </div>
                              </SwiperSlide>
                              
                              <SwiperSlide>
                                  <div>
                                      <Row>
                                        <div className='product flex row w-full'>
                                        <Col span={18}>
                                            <div class="main">
                                            <Image
                                
                                                src="https://www.spotlessfruits.com/cdn/shop/products/fruit_10-300x300_f855c9b2-13b4-4fc9-bd1c-e72a4949a6b7_370x370.jpg?v=1667233760"

                                              />
                                              
                                            </div>
                                             <div className='w-full  text-center'>
                                             <div className='rate'>
                                                <Rate allowHalf defaultValue={2.5} />
                                              </div>
                                              <div className=' text-center mt-3 mb-2'>
                                                    <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}>
                                                         
                                                         <FaEye className='text-2xl ml-2 text-white'/>  
                                                    </button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}><BsCart className='text-2xl ml-2 text-white'/></button>
                                                </div> 
                                             
                                                 <h2 className='Poppins #666666 text-lg font-Poppins'>Fresh Nectarine Imported</h2>
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',letterSpacing:'1px',color:'#666666'}}>
                                                Fresh Imported Nectarine delivered directly to your home within 24 hours in Mumbai, Nav...  
                                                </span><br />
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                <span class="qv-discountprice regular"  style={{textDecoration: 'line-through',fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                               
                                                  
                                            </div>
                                          </Col>
                                          <Col span={6}>
                                              <div className=' '>
                                                    <div className='w-20  '>
                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>
                                                        
                                                    </div>
                                              </div>
                                          </Col>
                                        </div>
                                      </Row>
                                  </div>
                              </SwiperSlide>
                              
                              <SwiperSlide>
                                  <div>
                                      <Row>
                                        <div className='product flex row w-full'>
                                        <Col span={18}>
                                            <div class="main">
                                            <Image
                                
                                                src="https://www.spotlessfruits.com/cdn/shop/products/SpotlessFruitsIndia-Gooseberry_370x370.png?v=1621880188"

                                              />
                                              
                                            </div>
                                             <div className='w-full  text-center'>
                                             <div className='rate'>
                                                <Rate allowHalf defaultValue={2.5} />
                                              </div>
                                              <div className=' text-center mt-3 mb-2'>
                                                    <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}>
                                                         
                                                         <FaEye className='text-2xl ml-2 text-white'/>  
                                                    </button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}><BsCart className='text-2xl ml-2 text-white'/></button>
                                                </div> 
                                             
                                                 <h2 className='Poppins #666666 text-lg font-Poppins'>Fresh Nectarine Imported</h2>
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',letterSpacing:'1px',color:'#666666'}}>
                                                Fresh Imported Nectarine delivered directly to your home within 24 hours in Mumbai, Nav...  
                                                </span><br />
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                <span class="qv-discountprice regular"  style={{textDecoration: 'line-through',fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                               
                                                  
                                            </div>
                                          </Col>
                                          <Col span={6}>
                                              <div className=' '>
                                                    <div className='w-20  '>
                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>
                                                        
                                                    </div>
                                              </div>
                                          </Col>
                                        </div>
                                      </Row>
                                  </div>
                              </SwiperSlide>
                              
                              <SwiperSlide>
                                  <div>
                                      <Row>
                                        <div className='product flex row w-full'>
                                        <Col span={18}>
                                            <div class="main">
                                            <Image
                                
                                                src="https://www.spotlessfruits.com/cdn/shop/products/FreshNectarine-SpotlessFruitsIndia_370x370.png?v=1630128993"

                                              />
                                              
                                            </div>
                                             <div className='w-full  text-center'>
                                             <div className='rate'>
                                                <Rate allowHalf defaultValue={2.5} />
                                              </div>
                                              <div className=' text-center mt-3 mb-2'>
                                                    <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}>
                                                         
                                                         <FaEye className='text-2xl ml-2 text-white'/>  
                                                    </button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}><BsCart className='text-2xl ml-2 text-white'/></button>
                                                </div> 
                                             
                                                 <h2 className='Poppins #666666 text-lg font-Poppins'>Fresh Nectarine Imported</h2>
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',letterSpacing:'1px',color:'#666666'}}>
                                                Fresh Imported Nectarine delivered directly to your home within 24 hours in Mumbai, Nav...  
                                                </span><br />
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                <span class="qv-discountprice regular"  style={{textDecoration: 'line-through',fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                               
                                                  
                                            </div>
                                          </Col>
                                          <Col span={6}>
                                              <div className=' '>
                                                    <div className='w-20  '>
                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>
                                                        
                                                    </div>
                                              </div>
                                          </Col>
                                        </div>
                                      </Row>
                                  </div>
                              </SwiperSlide>
                              
                              <SwiperSlide>
                                  <div>
                                      <Row>
                                        <div className='product flex row w-full'>
                                        <Col span={18}>
                                            <div class="main">
                                            <Image
                                
                                                src="https://www.spotlessfruits.com/cdn/shop/products/FreshNectarine-SpotlessFruitsIndia_370x370.png?v=1630128993"

                                              />
                                              
                                            </div>
                                             <div className='w-full  text-center'>
                                             <div className='rate'>
                                                <Rate allowHalf defaultValue={2.5} />
                                              </div>
                                              <div className=' text-center mt-3 mb-2'>
                                                    <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}>
                                                         
                                                         <FaEye className='text-2xl ml-2 text-white'/>  
                                                    </button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}><BsCart className='text-2xl ml-2 text-white'/></button>
                                                </div> 
                                             
                                                 <h2 className='Poppins #666666 text-lg font-Poppins'>Fresh Nectarine Imported</h2>
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',letterSpacing:'1px',color:'#666666'}}>
                                                Fresh Imported Nectarine delivered directly to your home within 24 hours in Mumbai, Nav...  
                                                </span><br />
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                <span class="qv-discountprice regular"  style={{textDecoration: 'line-through',fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                               
                                                  
                                            </div>
                                          </Col>
                                          <Col span={6}>
                                              <div className=' '>
                                                    <div className='w-20  '>
                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>
                                                        
                                                    </div>
                                              </div>
                                          </Col>
                                        </div>
                                      </Row>
                                  </div>
                              </SwiperSlide>
                              
                              <SwiperSlide>
                                  <div>
                                      <Row>
                                        <div className='product flex row w-full'>
                                        <Col span={18}>
                                            <div class="main">
                                            <Image
                                
                                                src="https://www.spotlessfruits.com/cdn/shop/products/FreshNectarine-SpotlessFruitsIndia_370x370.png?v=1630128993"

                                              />
                                              
                                            </div>
                                             <div className='w-full  text-center'>
                                             <div className='rate'>
                                                <Rate allowHalf defaultValue={2.5} />
                                              </div>
                                              <div className=' text-center mt-3 mb-2'>
                                                    <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}>
                                                         
                                                         <FaEye className='text-2xl ml-2 text-white'/>  
                                                    </button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}><BsCart className='text-2xl ml-2 text-white'/></button>
                                                </div> 
                                             
                                                 <h2 className='Poppins #666666 text-lg font-Poppins'>Fresh Nectarine Imported</h2>
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',letterSpacing:'1px',color:'#666666'}}>
                                                Fresh Imported Nectarine delivered directly to your home within 24 hours in Mumbai, Nav...  
                                                </span><br />
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                <span class="qv-discountprice regular"  style={{textDecoration: 'line-through',fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                               
                                                  
                                            </div>
                                          </Col>
                                          <Col span={6}>
                                              <div className=' '>
                                                    <div className='w-20  '>
                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>
                                                        
                                                    </div>
                                              </div>
                                          </Col>
                                        </div>
                                      </Row>
                                  </div>
                              </SwiperSlide>

                              <SwiperSlide>
                                  <div>
                                      <Row>
                                        <div className='product flex row w-full'>
                                        <Col span={18}>
                                            <div class="main">
                                            <Image
                                
                                                src="https://www.spotlessfruits.com/cdn/shop/products/FreshNectarine-SpotlessFruitsIndia_370x370.png?v=1630128993"

                                              />
                                              
                                            </div>
                                             <div className='w-full  text-center'>
                                             <div className='rate'>
                                                <Rate allowHalf defaultValue={2.5} />
                                              </div>
                                              <div className=' text-center mt-3 mb-2'>
                                                    <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}>
                                                         
                                                         <FaEye className='text-2xl ml-2 text-white'/>  
                                                    </button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}><BsCart className='text-2xl ml-2 text-white'/></button>
                                                </div> 
                                             
                                                 <h2 className='Poppins #666666 text-lg font-Poppins'>Fresh Nectarine Imported</h2>
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',letterSpacing:'1px',color:'#666666'}}>
                                                Fresh Imported Nectarine delivered directly to your home within 24 hours in Mumbai, Nav...  
                                                </span><br />
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                <span class="qv-discountprice regular"  style={{textDecoration: 'line-through',fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                               
                                                  
                                            </div>
                                          </Col>
                                          <Col span={6}>
                                              <div className=' '>
                                                    <div className='w-20  '>
                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>
                                                        
                                                    </div>
                                              </div>
                                          </Col>
                                        </div>
                                      </Row>
                                  </div>
                              </SwiperSlide>

                              <SwiperSlide>
                                  <div>
                                      <Row>
                                        <div className='product flex row w-full'>
                                        <Col span={18}>
                                            <div class="main">
                                            <Image
                                
                                                src="https://www.spotlessfruits.com/cdn/shop/products/FreshNectarine-SpotlessFruitsIndia_370x370.png?v=1630128993"

                                              />
                                              
                                            </div>
                                             <div className='w-full  text-center'>
                                             <div className='rate'>
                                                <Rate allowHalf defaultValue={2.5} />
                                              </div>
                                              <div className=' text-center mt-3 mb-2'>
                                                    <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}>
                                                         
                                                         <FaEye className='text-2xl ml-2 text-white'/>  
                                                    </button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}><BsCart className='text-2xl ml-2 text-white'/></button>
                                                </div> 
                                             
                                                 <h2 className='Poppins #666666 text-lg font-Poppins'>Fresh Nectarine Imported</h2>
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',letterSpacing:'1px',color:'#666666'}}>
                                                Fresh Imported Nectarine delivered directly to your home within 24 hours in Mumbai, Nav...  
                                                </span><br />
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                <span class="qv-discountprice regular"  style={{textDecoration: 'line-through',fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                               
                                                  
                                            </div>
                                          </Col>
                                          <Col span={6}>
                                              <div className=' '>
                                                    <div className='w-20  '>
                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>
                                                        
                                                    </div>
                                              </div>
                                          </Col>
                                        </div>
                                      </Row>
                                  </div>
                              </SwiperSlide>

                              <SwiperSlide>
                                  <div>
                                      <Row>
                                        <div className='product flex row w-full'>
                                        <Col span={18}>
                                            <div class="main">
                                            <Image
                                
                                                src="https://www.spotlessfruits.com/cdn/shop/products/FreshNectarine-SpotlessFruitsIndia_370x370.png?v=1630128993"

                                              />
                                              
                                            </div>
                                             <div className='w-full  text-center'>
                                             <div className='rate'>
                                                <Rate allowHalf defaultValue={2.5} />
                                              </div>
                                              <div className=' text-center mt-3 mb-2'>
                                                    <button className='rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}>
                                                         
                                                         <FaEye className='text-2xl ml-2 text-white'/>  
                                                    </button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>
                                                    
                                                    <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{background:'#3B9048'}}><BsCart className='text-2xl ml-2 text-white'/></button>
                                                </div> 
                                             
                                                 <h2 className='Poppins #666666 text-lg font-Poppins'>Fresh Nectarine Imported</h2>
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',letterSpacing:'1px',color:'#666666'}}>
                                                Fresh Imported Nectarine delivered directly to your home within 24 hours in Mumbai, Nav...  
                                                </span><br />
                                                <span class="qv-discountprice regular" style={{fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                                <span class="qv-discountprice regular"  style={{textDecoration: 'line-through',fontWeight:'bold',lineHeight:'40px',letterSpacing:'1px',color:'#666666'}}>Rs. 169.00</span>
                                               
                                                  
                                            </div>
                                          </Col>
                                          <Col span={6}>
                                              <div className=' '>
                                                    <div className='w-20  '>
                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>

                                                        <div className='w-20 h-16 mt-2 text-black border bg-white-500  hover:bg-green-700 text-center'>
                                                              <div>
                                                                  <h1>0 0</h1>
                                                                  
                                                              </div>
                                                        </div>
                                                        
                                                    </div>
                                              </div>
                                          </Col>
                                        </div>
                                      </Row>
                                  </div>
                              </SwiperSlide>
                            
                            </Swiper>
                  </div>
            </div>
           
       </div>     

       
    )
}
export default TrendingProduct