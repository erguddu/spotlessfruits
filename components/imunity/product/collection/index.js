import { Row, Col, Image,Button, Space,Rate } from "antd"
import React, { useState } from 'react';
// product list coding 
const ItemList = () => {

    const [current, setCurrent] = useState(3);
    const onChange = (page) => {
      console.log(page);
      setCurrent(page);
    };
}

const Collection = ()=> {
   
    return (
        <div className="spcial product ">
             <Row>
                <Col span={8}>
                    <div className="productItemList"> 
                    <div class="main">
                        <Image
                            src="https://www.spotlessfruits.com/cdn/shop/products/9_370x370_d13993f3-ad69-4b85-91ab-2ca1f79a4595_370x370.jpg?v=1616429727"
                            width={80}
                            height={50}    
                        />
                    </div>    
                    </div>
                      
                </Col>
                <Col span={16}>
                <div className="text-center w-full " >
                        <h2>Fresh Mulberry - 150 Grams</h2>
                        <span className="qv-discountprice regular" style={{ textDecoration: 'line-through', fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>
                        <span className="qv-discountprice regular pt-1" style={{ fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>

                        <div className='rate'>
                            <Rate allowHalf defaultValue={2.5} />
                        </div>

                    </div> 
                </Col>    
            </Row>


            {/* second product items show */}

            <Row>
                <Col span={8}>
                    <div className="productItemList"> 
                    <div class="main ">
                        <Image
                            src="https://www.spotlessfruits.com/cdn/shop/products/IMG_0396_370x370.jpg?v=1619024524"
                            width={80}
                            height={50}    
                        />
                    </div>    
                    </div>
                      
                </Col>
                <Col span={16}>
                <div className="text-center w-full " >
                        <h2>Fresh Mulberry - 150 Grams</h2>
                        <span className="qv-discountprice regular" style={{ textDecoration: 'line-through', fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>
                        <span className="qv-discountprice regular" style={{ fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>

                        <div className='rate'>
                            <Rate allowHalf defaultValue={2.5} />
                        </div>

                    </div> 
                </Col>    
            </Row>
                {/* third special product now */}
                <Row>
                <Col span={8}>
                    <div className="productItemList"> 
                    <div class="main ">
                        <Image
                            src="https://www.spotlessfruits.com/cdn/shop/products/15.1_f4bbe1b7-21bb-44cc-9856-fb905d21376b_370x370.jpg?v=1616429727"
                            width={80}
                            height={50}    
                        />
                    </div>    
                    </div>
                      
                </Col>
                <Col span={16}>
                <div className="text-center w-full " >
                        <h2>Fresh Mulberry - 150 Grams</h2>
                        <span className="qv-discountprice regular" style={{ textDecoration: 'line-through', fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>
                        
                        <span className="qv-discountprice regular" style={{ fontWeight: 'bold', lineHeight: '40px', letterSpacing: '1px', color: '#666666' }}>Rs. 169.00</span>

                        <div className='rate'>
                            <Rate allowHalf defaultValue={2.5} />
                        </div>

                    </div> 
                </Col>    
            </Row>

        </div>
    )

}

export default Collection