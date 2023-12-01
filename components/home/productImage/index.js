import React from 'react';
import { Image,Row ,Col } from 'antd';

const ProductImage = ()=>{
    return (
      <div className="flex w-full ">
          <div className=" w-full ">
             <Row>
                <Col span={8}>
                    <div className='w-full z-0'>
                    <Image
                       width={526}
                       height={371}
                        src="https://www.spotlessfruits.com/cdn/shop/files/banner1_640x450_bea31dd1-b735-4254-966f-f0dc3033f6ea_640x450.png?v=1615531063"
                      />
                      <div style={{position:'absolute',marginTop:'-250px',marginLeft:'300px',width:'200px',height:'200px'}}>
                      <div>
                              <h2 style={{fontSize:'18px',fontWeight:'400', fontFamily:'sans-serif',}}>Premium</h2>
                              <h1 style={{fontWeight:'bold',opacity:'0.8'}}>Juicy Fruits</h1>
                              <button style={{background:'#3B9048',width:'125px',height:'31px',fontSize:'16px',borderRadius:'5px',fontWeight:'500',color:'white'}} href="/">SHOP NOW</button>
                            </div>
                      </div>
                            
                    </div>
                </Col>
                <Col span={8}>
                    <div >
                    <Image
                        width={526}
                        height={371}
                        
                        src="https://www.spotlessfruits.com/cdn/shop/files/c2_640x450_ee2ddfd7-88c7-472c-91a3-7df5f18baea2_640x450.png?v=1615531355"
                      
                      />
                       <div style={{position:'absolute',marginTop:'-250px',marginLeft:'300px',width:'200px',height:'200px'}}>
                      <div>
                              <h2 style={{fontSize:'18px',fontWeight:'400', fontFamily:'sans-serif',}}>FLAT 20% OFF FRUITS</h2>
                              <h1 style={{fontWeight:'bold',opacity:'0.8'}}>Healthy Food</h1>
                              <button style={{background:'#3B9048',width:'125px',height:'31px',fontSize:'16px',borderRadius:'5px',fontWeight:'500',color:'white'}} href="/">SHOP NOW</button>
                            </div>
                      </div>
                    </div>
                </Col>
                <Col span={8}>
                    <div>
                    <Image
                        width={526}
                        height={371}
                        src="https://www.spotlessfruits.com/cdn/shop/files/banner3_640x450_620b13c1-2e14-4be2-bf57-ceb768d7b69e_640x450.png?v=1615531383"
                      />

                        < div style={{position:'absolute',marginTop:'-250px',marginLeft:'300px',width:'200px',height:'200px'}}>
                      <div>
                              <h2 style={{fontSize:'18px',fontWeight:'400', fontFamily:'sans-serif',}}>BIG SEASON SALE</h2>
                              <h1 style={{fontWeight:'bold',opacity:'0.8'}}>Fresh Papaya</h1>
                              <button style={{background:'#3B9048',width:'125px',height:'31px',fontSize:'16px',borderRadius:'5px',fontWeight:'500',color:'white'}} href="/">SHOP NOW</button>
                            </div>
                      </div>
                    </div>
                </Col>
             </Row>
             <div className='w-full mt-10 '>
              <div className=' mx-60 '>
                  <Row>
                      <Col span={6}>
                          <div className='w-full '>
                              <div style={{width:'100px',height:'100px',border:'2px solid #FFFFFF', textAlign:'center',marginLeft:'80px',marginTop:'10px',borderRadius:'100px',padding:'30px',background:'#ffffff'}} className='shadow-2xl'>    
                                
                                 <Image 
                                      src='https://www.spotlessfruits.com/cdn/shop/files/sr3_small_small_92dfcad5-aefe-4346-aad5-0bbac213523d_small.png?v=1615612346'
                                  />

                              </div>
                              <div className='p-5'>
                                      <h2 style={{fontSize:'16px',textAlign:'center',color:'#666666'}}>FREE 24 HOURS DELIVERY mumbai | Thane | Navi Mumbai</h2>
                                  </div>
                          </div>
                      </Col>
                      <Col span={6}>
                      <div className='w-full '>
                              <div style={{width:'100px',height:'100px',border:'2px solid #FFFFFF', textAlign:'center',marginLeft:'80px',marginTop:'10px',borderRadius:'100px',padding:'30px',background:'#ffffff'}} className='shadow-2xl'>    
                                
                                 <Image 
                                      src='https://www.spotlessfruits.com/cdn/shop/files/sr1_small_small_061fe13a-4950-4f28-a063-27574506a718_small.png?v=1615612420'
                                  />

                              </div>
                              <div className='p-5'>
                                      <h2 style={{fontSize:'16px',textAlign:'center',color:'#666666'}}>Call | WhatsApp | Messenger | Thane | Navi Mumbai</h2>
                                  </div>
                          </div>
                      </Col>
                      <Col span={6}>
                      <div className='w-full '>
                              <div style={{width:'100px',height:'100px',border:'2px solid #FFFFFF', textAlign:'center',marginLeft:'80px',marginTop:'10px',borderRadius:'100px',padding:'30px',background:'#ffffff'}} className='shadow-2xl'>    
                                
                                 <Image 
                                      src='https://www.spotlessfruits.com/cdn/shop/files/sr2_small_small_1645f553-19e6-45eb-a069-73f3a105d1e4_small.png?v=1615612461'
                                  />

                              </div>
                              <div className='p-5'>
                                      <h2 style={{fontSize:'16px',textAlign:'center',color:'#666666'}}>24X7 SUPPORT ASSISTANCE | Thane | Navi Mumbai</h2>
                                  </div>
                          </div>
                      </Col>
                      <Col span={6}>

                      <div className='w-full '>
                              <div style={{width:'100px',height:'100px',border:'2px solid #FFFFFF', textAlign:'center',marginLeft:'80px',marginTop:'10px',borderRadius:'100px',padding:'30px',background:'#ffffff'}} className='shadow-2xl'>    
                                
                                 <Image 
                                      src='https://www.spotlessfruits.com/cdn/shop/files/sr4_small_small_27f2dfb8-84fa-44d7-aec1-8f73d7e2313a_small.png?v=1615612539'
                                  />

                              </div>
                              <div className='p-5'>
                                      <h2 style={{fontSize:'16px',textAlign:'center',color:'#666666'}}>GUARANTEED EXCHANGE | Exchange within 24 hours</h2>
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
export default ProductImage