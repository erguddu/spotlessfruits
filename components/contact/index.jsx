import Layout from '../shared/layout'
import GoogleMapComponent from '../GoogleMap.js';

import style from '../../styles/index.module.css'
import { InstagramOutlined, FacebookOutlined } from '@ant-design/icons';
import React from 'react';
import { Row, Col ,Button,Form, Input} from 'antd'

const containerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: 37.7749, // Replace with your desired latitude
    lng: -122.4194, // Replace with your desired longitude
};


const Contact = () => {
    return (
        <Layout title="Contact">
            <div className='main w-full'>
                <div className={style.fruisbg}>
                    <div className='mt-20'>
                        <center>
                            <h2 className='text-2xl'>Contact Us </h2>
                            <h2> Home ‐ contact us </h2>
                        </center>

                    </div>
                </div>

                <div className='w-full flex bg-white ' style={{ height: 'auto' }} >
                    <div className='bg-white w-full mx-48 bg-white'>
                        <Row >
                            <Col span={12}>
                                <div className='mt-50 '>
                                    <h1 className='font-black text-4xl tracking-widest'>GET  IN  TOUCH</h1>
                                    <h2 style={{ fontSize: '16px', fontFamily: 'sans-serif', color: '#666666' }}>We'd Love to Hear From You, Lets Get In Touch!</h2>

                                    <h2 style={{ fontSize: '16px', fontFamily: 'sans-serif', marginTop: '40px' }}>Address</h2>

                                    <h2 style={{ fontSize: '14px', fontFamily: 'poppins', marginTop: '10px', letterSpacing: '0.9px', lineHeight: '25px' }}>SPOTLESS FRUITS INDIA, OFFICE NO 1, FIRST FLOOR, , VIJAY AUTO WORKS, OPP L&T GATE NO - 6, SAKI VIHAR ROAD, POWAI

                                        India</h2>

                                    <h2 style={{ fontSize: '14px', fontFamily: 'poppins', marginTop: '10px', letterSpacing: '0.9px', lineHeight: '25px' }}>
                                        Email

                                    </h2>
                                    <h2 style={{ fontSize: '14px', fontFamily: 'poppins', marginTop: '10px', letterSpacing: '0.9px', lineHeight: '25px' }}>care@spotlessfruits.com</h2>

                                    <h2 style={{ fontSize: '14px', fontFamily: 'poppins', marginTop: '10px', letterSpacing: '0.9px', lineHeight: '25px' }}>social</h2>

                                    <div className='flex'>
                                        <button className='border rounded-3xl bg-white w-12 h-12 border-gray-300 hover:border-blue-700  ' style={{ background: 'white', }}> <FacebookOutlined /> </button>
                                        <button className='border rounded-3xl bg-white w-12 h-12 border-gray-300 hover:border-blue-700 ml-5' style={{ background: 'white', }}> <InstagramOutlined /> </button>
                                    </div>

                                </div>
                            </Col>
                            <Col span={12}>
                                <div className='w-full'>
                                    <div className='mt-36 ml-20'>
                                        <h2>Phone</h2>
                                        <h2 className='pt-5 '>+ 91 9304125565</h2>
                                    </div>
                                    <div className='mt-20 ml-20'>
                                        <h2>Phone</h2>
                                        <h2 className='pt-5 '>+ 91 9304125565</h2>
                                    </div>

                                </div>

                            </Col>
                        </Row>
                        <div className=''>
                            <center>
                                <h1 className='font-arial font-black tracking-widest text-5xl leading-10'>Leave us a Message</h1>
                                <span style={{ color: '#666666', fontSize: '16px' }}>-Natures Best, Just for you - </span>
                            </center>
                            <div className='mx-20'>
                                <Row>
                                    <Col span={24}>
                                        <div >
                                            <Form >
                                                <Row>
                                                    <Col span={8}>
                                                        <div className='username w-50 h-40 p-2 '>
                                                        <input type='text' required placeholder='Name' style={{width:'300px',height:'40px',border:'1px solid green',marginLeft:'20px',padding:'10px'}}/>
                                                        </div>
                                                    </Col>
                                                    <Col span={8} >
                                                        <div className='email p-2'>
                                                        <input type='email' required placeholder='Email' style={{width:'300px',height:'40px',border:'1px solid green',marginLeft:'20px',padding:'10px'}}/>
                                                        </div>
                                                    </Col>
                                                    <Col span={8}>
                                                        <div className='phone p-2'>
                                                            <input placeholder='Phone' style={{width:'300px',height:'40px',border:'1px solid green',marginLeft:'20px',padding:'10px'}}/>
                                                        </div>

                                                    </Col>
                                                    <div className='w-full' style={{marginTop:'-80px',marginLeft:'30px',color:'#666666'}}>
                                                     <textarea  rows="12" cols="150" style={{border:'1px solid #666666'}}>
                                                      Your messaage .............
                                                     </textarea>

                                                     <center className='mt-3'>
                                                            <Button type='submit' className='text-white bg-yellow-500 hover:bg-black-600 active:bg-green-800 focus:outline-none focus:ring focus:ring-white-300 ' style={{width:'90px',height:'40px',fontSize:'18px'}}>Send</Button>
                                                     </center>
                                                </div> 
                                                </Row>
                                                
                                                  

                                            </Form>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>


                    </div>
                </div>


            </div>
        </Layout>
    )
}

export default Contact