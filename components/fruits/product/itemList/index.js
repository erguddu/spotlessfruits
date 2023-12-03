import { Row, Col, Image,Button, Space,Rate } from "antd"
import { FaEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { BsCart } from "react-icons/bs";

import React, { useState } from 'react';
import { Pagination } from 'antd';

// product list coding 
const ItemList = () => {

    const [current, setCurrent] = useState(3);
    const onChange = (page) => {
      console.log(page);
      setCurrent(page);
    };

    return (
        <div>
            {/* first row product list here */}
            <Row>
                <Col span={8}>
                    <div className="productItemList"> 
                    <div>
                        <button className="bg-lime-500 w-10 h-10 rounded-3xl">SALE</button>
                        <span className="p-2 text-xs font-bold">JACKFRUITS - PEELED</span>
                        <button className="bg-red-500 w-20 h-8 text-xs text-white rounded-lg"> SOLD OUT </button>
                    </div>
                    <div class="main">
                        <Image

                            src="https://www.spotlessfruits.com/cdn/shop/products/IMG_0396_370x370.jpg?v=1619024524"
                            width={250}
                            height={200}    
                        />
                    </div>
                    <div className="text-center w-full" >
                        <h2>Fresh Mulberry - 150 Grams</h2>
                        <span class="qv-discountprice regular" style={{ textDecoration: 'line-through', fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>
                        <span class="qv-discountprice regular" style={{ fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>

                        <div className='rate'>
                            <Rate allowHalf defaultValue={2.5} />
                        </div>

                        <div className='iconbox flex row mt-5 '>
                            <button className='rounded-3xl w-10 h-10 ml-16  hover:bg-black-700' style={{ background: '#3B9048' }}>

                                <FaEye className='text-2xl ml-2 text-white ' />
                            </button>

                            <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>

                            <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}><BsCart className='text-2xl ml-2 text-white' /></button>
                        </div>
                    </div>   
                    </div>
                      
                </Col>
                <Col span={8}>
                <div className="productItemList"> 
                    <div>
                        <button className="bg-lime-500 w-10 h-10 rounded-3xl">SALE</button>
                        <span className="p-2 text-xs font-bold">JACKFRUITS - PEELED</span>
                        <button className="bg-red-500 w-20 h-8 text-xs text-white rounded-lg"> SOLD OUT </button>
                    </div>
                    <div class="main">
                        <Image

                            src="https://www.spotlessfruits.com/cdn/shop/products/SpotlessFruitsIndia-Mulberry_370x370.png?v=1621839039"
                            width={250}
                            height={200}    
                        />
                    </div>
                    <div className="text-center w-full" >
                        <h2>Fresh Mulberry - 150 Grams</h2>
                        <span class="qv-discountprice regular" style={{ textDecoration: 'line-through', fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>
                        <span class="qv-discountprice regular" style={{ fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>

                        <div className='rate'>
                            <Rate allowHalf defaultValue={2.5} />
                        </div>

                        <div className='iconbox flex row mt-5 '>
                            <button className='rounded-3xl w-10 h-10 ml-16  hover:bg-black-700' style={{ background: '#3B9048' }}>

                                <FaEye className='text-2xl ml-2 text-white ' />
                            </button>

                            <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>

                            <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}><BsCart className='text-2xl ml-2 text-white' /></button>
                        </div>
                    </div>   
                    </div>
                </Col>
                <Col span={8}>
                <div className="productItemList"> 
                    <div>
                        <button className="bg-lime-500 w-10 h-10 rounded-3xl">SALE</button>
                        <span className="p-2 text-xs font-bold">JACKFRUITS - PEELED</span>
                        <button className="bg-red-500 w-20 h-8 text-xs text-white rounded-lg"> SOLD OUT </button>
                    </div>
                    <div class="main">
                        <Image

                            src="https://www.spotlessfruits.com/cdn/shop/products/SpotlessFruitsIndia-PeeledJackfruit_370x370.png?v=1644989723"
                            width={250}
                            height={200}    
                        />
                    </div>
                    <div className="text-center w-full" >
                        <h2>Fresh Mulberry - 150 Grams</h2>
                        <span class="qv-discountprice regular" style={{ textDecoration: 'line-through', fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>
                        <span class="qv-discountprice regular" style={{ fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>

                        <div className='rate'>
                            <Rate allowHalf defaultValue={2.5} />
                        </div>

                        <div className='iconbox flex row mt-5 '>
                            <button className='rounded-3xl w-10 h-10 ml-16  hover:bg-black-700' style={{ background: '#3B9048' }}>

                                <FaEye className='text-2xl ml-2 text-white ' />
                            </button>

                            <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>

                            <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}><BsCart className='text-2xl ml-2 text-white' /></button>
                        </div>
                    </div>   
                    </div>
                </Col>

            </Row>
            {/*  */}
            <Row>
                <Col span={8}>
                    <div className="productItemList"> 
                    <div>
                        <button className="bg-lime-500 w-10 h-10 rounded-3xl">SALE</button>
                        <span className="p-2 text-xs font-bold">JACKFRUITS - PEELED</span>
                        <button className="bg-red-500 w-20 h-8 text-xs text-white rounded-lg"> SOLD OUT </button>
                    </div>
                    <div class="main">
                        <Image

                            src="https://www.spotlessfruits.com/cdn/shop/products/IMG_0450_370x370.jpg?v=1619036714"
                            width={250}
                            height={200}    
                        />
                    </div>
                    <div className="text-center w-full" >
                        <h2>Fresh Mulberry - 150 Grams</h2>
                        <span class="qv-discountprice regular" style={{ textDecoration: 'line-through', fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>
                        <span class="qv-discountprice regular" style={{ fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>

                        <div className='rate'>
                            <Rate allowHalf defaultValue={2.5} />
                        </div>

                        <div className='iconbox flex row mt-5 '>
                            <button className='rounded-3xl w-10 h-10 ml-16  hover:bg-black-700' style={{ background: '#3B9048' }}>

                                <FaEye className='text-2xl ml-2 text-white ' />
                            </button>

                            <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>

                            <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}><BsCart className='text-2xl ml-2 text-white' /></button>
                        </div>
                    </div>   
                    </div>
                      
                </Col>
                <Col span={8}>
                <div className="productItemList"> 
                    <div>
                        <button className="bg-lime-500 w-10 h-10 rounded-3xl">SALE</button>
                        <span className="p-2 text-xs font-bold">JACKFRUITS - PEELED</span>
                        <button className="bg-red-500 w-20 h-8 text-xs text-white rounded-lg"> SOLD OUT </button>
                    </div>
                    <div class="main">
                        <Image

                            src="https://www.spotlessfruits.com/cdn/shop/products/Litchi-SpotlessFruitsIndia_370x370.png?v=1621569583"
                            width={250}
                            height={200}    
                        />
                    </div>
                    <div className="text-center w-full" >
                        <h2>Fresh Mulberry - 150 Grams</h2>
                        <span class="qv-discountprice regular" style={{ textDecoration: 'line-through', fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>
                        <span class="qv-discountprice regular" style={{ fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>

                        <div className='rate'>
                            <Rate allowHalf defaultValue={2.5} />
                        </div>

                        <div className='iconbox flex row mt-5 '>
                            <button className='rounded-3xl w-10 h-10 ml-16  hover:bg-black-700' style={{ background: '#3B9048' }}>

                                <FaEye className='text-2xl ml-2 text-white ' />
                            </button>

                            <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>

                            <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}><BsCart className='text-2xl ml-2 text-white' /></button>
                        </div>
                    </div>   
                    </div>
                </Col>
                <Col span={8}>
                <div className="productItemList"> 
                    <div>
                        <button className="bg-lime-500 w-10 h-10 rounded-3xl">SALE</button>
                        <span className="p-2 text-xs font-bold">JACKFRUITS - PEELED</span>
                        <button className="bg-red-500 w-20 h-8 text-xs text-white rounded-lg"> SOLD OUT </button>
                    </div>
                    <div class="main">
                        <Image

                            src="https://www.spotlessfruits.com/cdn/shop/products/FreshBlueberry-SpotlessFruitsIndia_370x370.png?v=1624076971"
                            width={250}
                            height={200}    
                        />
                    </div>
                    <div className="text-center w-full" >
                        <h2>Fresh Mulberry - 150 Grams</h2>
                        <span class="qv-discountprice regular" style={{ textDecoration: 'line-through', fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>
                        <span class="qv-discountprice regular" style={{ fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>

                        <div className='rate'>
                            <Rate allowHalf defaultValue={2.5} />
                        </div>

                        <div className='iconbox flex row mt-5 '>
                            <button className='rounded-3xl w-10 h-10 ml-16  hover:bg-black-700' style={{ background: '#3B9048' }}>

                                <FaEye className='text-2xl ml-2 text-white ' />
                            </button>

                            <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>

                            <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}><BsCart className='text-2xl ml-2 text-white' /></button>
                        </div>
                    </div>   
                </div>
                </Col>
            </Row>

            <Row>
                <Col span={8}>
                    <div className="productItemList"> 
                    <div>
                        <button className="bg-lime-500 w-10 h-10 rounded-3xl">SALE</button>
                        <span className="p-2 text-xs font-bold">JACKFRUITS - PEELED</span>
                        <button className="bg-red-500 w-20 h-8 text-xs text-white rounded-lg"> SOLD OUT </button>
                    </div>
                    <div class="main">
                        <Image

                            src="https://www.spotlessfruits.com/cdn/shop/products/15.1_f4bbe1b7-21bb-44cc-9856-fb905d21376b_370x370.jpg?v=1616429727"
                            width={250}
                            height={200}    
                        />
                    </div>
                    <div className="text-center w-full" >
                        <h2>Fresh Mulberry - 150 Grams</h2>
                        <span class="qv-discountprice regular" style={{ textDecoration: 'line-through', fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>
                        <span class="qv-discountprice regular" style={{ fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>

                        <div className='rate'>
                            <Rate allowHalf defaultValue={2.5} />
                        </div>

                        <div className='iconbox flex row mt-5 '>
                            <button className='rounded-3xl w-10 h-10 ml-16  hover:bg-black-700' style={{ background: '#3B9048' }}>

                                <FaEye className='text-2xl ml-2 text-white ' />
                            </button>

                            <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>

                            <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}><BsCart className='text-2xl ml-2 text-white' /></button>
                        </div>
                    </div>   
                    </div>
                      
                </Col>
                <Col span={8}>
                <div className="productItemList"> 
                    <div>
                        <button className="bg-lime-500 w-10 h-10 rounded-3xl">SALE</button>
                        <span className="p-2 text-xs font-bold">JACKFRUITS - PEELED</span>
                        <button className="bg-red-500 w-20 h-8 text-xs text-white rounded-lg"> SOLD OUT </button>
                    </div>
                    <div class="main">
                        <Image

                            src="https://www.spotlessfruits.com/cdn/shop/products/SpotlessFruitsIndia-Jamun_AAGrade_370x370.png?v=1622023633"
                            width={250}
                            height={200}    
                        />
                    </div>
                    <div className="text-center w-full" >
                        <h2>Fresh Mulberry - 150 Grams</h2>
                        <span class="qv-discountprice regular" style={{ textDecoration: 'line-through', fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>
                        <span class="qv-discountprice regular" style={{ fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>

                        <div className='rate'>
                            <Rate allowHalf defaultValue={2.5} />
                        </div>

                        <div className='iconbox flex row mt-5 '>
                            <button className='rounded-3xl w-10 h-10 ml-16  hover:bg-black-700' style={{ background: '#3B9048' }}>

                                <FaEye className='text-2xl ml-2 text-white ' />
                            </button>

                            <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>

                            <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}><BsCart className='text-2xl ml-2 text-white' /></button>
                        </div>
                    </div>   
                    </div>
                </Col>
                <Col span={8}>
                <div className="productItemList"> 
                    <div>
                        <button className="bg-lime-500 w-10 h-10 rounded-3xl">SALE</button>
                        <span className="p-2 text-xs font-bold">JACKFRUITS - PEELED</span>
                        <button className="bg-red-500 w-20 h-8 text-xs text-white rounded-lg"> SOLD OUT </button>
                    </div>
                    <div class="main">
                        <Image

                            src="https://www.spotlessfruits.com/cdn/shop/products/IMG_0495Cropped_370x370.jpg?v=1645602219"
                            width={250}
                            height={200}    
                        />
                    </div>
                    <div className="text-center w-full" >
                        <h2>Fresh Mulberry - 150 Grams</h2>
                        <span class="qv-discountprice regular" style={{ textDecoration: 'line-through', fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>
                        <span class="qv-discountprice regular" style={{ fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>

                        <div className='rate'>
                            <Rate allowHalf defaultValue={2.5} />
                        </div>

                        <div className='iconbox flex row mt-5 '>
                            <button className='rounded-3xl w-10 h-10 ml-16  hover:bg-black-700' style={{ background: '#3B9048' }}>

                                <FaEye className='text-2xl ml-2 text-white ' />
                            </button>

                            <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }} ><FaRegHeart className='text-2xl ml-2 text-white' /></button>

                            <button className='ml-2 rounded-3xl w-10 h-10   hover:bg-black-700' style={{ background: '#3B9048' }}><BsCart className='text-2xl ml-2 text-white' /></button>
                        </div>
                    </div>   
                    </div>
                </Col>

            </Row> 

        {/* pagination coding of product */}
       
        <div className="w-full">
            <div className="mt-10 border p-3 pt-2">
                <div className="flex content-evenly">
                    <span className="mt-4">showing 13 - 24 of 74 items</span>
                       <div className="ml-80 mt-3">
                              <Pagination current={current} onChange={onChange} total={50} />
                       </div>
                </div>  
            </div>
        </div>
        </div>
    
    )

}

export default ItemList 