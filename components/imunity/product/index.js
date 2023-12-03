import ProductItem from './itemList' 
import SpecialProduct from './collection'
import style from '../../../styles/index.module.css'
import React from 'react';
import Router from 'next/router';
import { FaList } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme,Button,Checkbox, Radio, Select, Space } from 'antd';
const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});

const Routers = () =>{
    <Router>

    </Router>
}

// option select 
const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}
// end 

const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };

const Fruits = () => {

        const [size, setSize] = useState('middle');
        const handleSizeChange = (e) => {
            setSize(e.target.value);
        }

    const {
        token: { colorBgContainer },
    } = theme.useToken();


    
    return (
        
            <div className='main w-full'>
                <div className={style.fruisbg}>
                    <div className='mt-20'>
                        <center>
                            <h2 className='text-2xl'>Buy Fresh Foods </h2>
                            <h2>Home ‐ Buy fresh fruits</h2>
                        </center>

                    </div>
                </div>

                <div className='w-full '>
                    <div className='bg-white w-full '>
                        <div className='w-full  '>
                            <div className='flex mx-48 '>
                                <Layout>
                                        <Layout>
                                            <Sider
                                                width={260}
                                                style={{
                                                    background: colorBgContainer,
                                                }}
                                            >
                                            <div className='w-full '>
                                                <div className='w-full'> 
                                                    <div className='w-full h-10 text-left text-base' style={{background:'#F5F5F5',padding:'10px'}}>Filter</div>
                                                </div>

                                                <div className='main'>
                                                    <div className='pl-2'>
                                                        <h2 className='text-base'>Tags</h2>
                                                    </div>
                                                    <div className='checkbox p-2 font-serif'>
                                                        <Checkbox defaultChecked={true} enable /> <span>Git</span>
                                                        <br />
                                                        <Checkbox defaultChecked={true} enable /> <span>Imported</span>
                                                        <br /> 
                                                        <Checkbox defaultChecked={true} enable /> <span>Jackfruits</span>
                                                        <br />
                                                        <Checkbox defaultChecked={true} enable /> <span>juicy Fruits</span>
                                                        <br /> 
                                                        <Checkbox defaultChecked={true} enable /> <span>Malawi Mangoes</span>
                                                        <br />
                                                        <Checkbox defaultChecked={true} enable /> <span>Natural Fruits</span>
                                                        <br /> 
                                                        <Checkbox defaultChecked={true} enable /> <span>Seasonal Fruits</span>
                                                        <br />
                                                    
                                                        <br />  <Checkbox defaultChecked={true} enable /> <span>Git</span>   
                                                        
                                                    
                                                    </div>
                                                </div>

                                                <div className='feature collection mt-5'>
                                                <div className='w-full'> 
                                                    <div className='w-full h-10 text-left text-base' style={{background:'#F5F5F5',padding:'10px'}}>Featured Collection</div>
                                                </div>

                                                <div className='main'>
                                                    <div className='pl-2'>
                                                        <h2 className='text-base'>Tags</h2>
                                                    </div>
                                                    <div className='checkbox p-2 font-serif'>
                                                    <SpecialProduct />    
                                                    </div>
                                                </div>  
                                                </div>

                                                <div className='Images show mt-10'>
                                            
                                                <div className='main'>
                                                   
                                                    <div className='imageshow'>
                                                        <img src='https://www.spotlessfruits.com/cdn/shop/files/Spotless_Fruits_India_-_Fight_Covid_270x350.png?v=1624826401' 
                                                            width={270}
                                                            height={350}
                                                        />   
                                                    
                                                    </div>
                                                </div>  
                                                </div>

                                                {/*Product collection */}
                                                <div className='Special collection mt-10'>
                                                <div className='w-full'> 
                                                    <div className='w-full h-10 text-left text-base' style={{background:'#F5F5F5',padding:'10px'}}>Special Collection</div>
                                                </div>

                                                <div className='main'>
                                                    <div className='pl-2'>
                                                        <h2 className='text-base'>Tags</h2>
                                                    </div>
                                                    <div className='checkbox p-2 font-serif'>
                                                        {/* special product now */}
                                                        <SpecialProduct />
                                                    </div>
                                                </div>  
                                                </div>

                                                {/* End Product collection  */}
                                            </div>
                                                {/* <Menu
                                                    onClick={(item)=>{

                                                    }}
                                                    items={[
                                                        {
                                                            label: 'Dashboard',
                                                            key:'/',
                                                            
                                                        },

                                                        {
                                                            label: "Inventry",
                                                            key: "/Inventory",

                                                        },

                                                        {
                                                            label: "Orders",
                                                            key: "/Order"
                                                        },


                                                    ]}
                                                
                                                /> */}
                                            </Sider>
                                            <Layout
                                                style={{
                                                    padding: '0 24px 24px',
                                                }}
                                            >
                                                <Breadcrumb
                                                    style={{
                                                        margin: '20px 0',
                                                        marginLeft:'30px',
                                                        

                                                    }}
                                                >
                                                    {/* dashboard menubar */}

                                                  <div className='w-full border border-white'>
                                                    <div className='icon flex'>
                                                        <TbGridDots size={30}   className='ml-5 cursor-pointer'/>
                                                        
                                                        <FaList size={30} className='ml-5 cursor-pointer'/>
                                                    
                                                        <div className='flex'>
                                                            <span className='ml-4'>There are one product : </span>
                                                            <div className=' flex  ml-72 gap-5 content-end'>
                                                                <h2>Short By :</h2>
                                                                
                                                            <Select
                                                                size={size}
                                                                defaultValue="Select"
                                                                onChange={handleChange}
                                                                style={{
                                                                    width: 250,
                                                                    height:40
                                                                }}
                                                                options={options}
                                                                />
                                                            </div>
                                                            <div className=''>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>      
                                                    
                                                   
                                                </Breadcrumb>
                                                <Content
                                                    style={{
                                                        padding: 24,
                                                        margin: 0,
                                                        minHeight: 280,
                                                        background: colorBgContainer,
                                                        marginLeft: '20px'
                                                    }}
                                                >
                                                    <div className='w-full'>
                                                        <div>
                                                            <ProductItem />
                                                        </div>
                                                    </div>
                                                </Content>
                                            </Layout>
                                        </Layout>
                                    
                               
                                </Layout>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
    )
}

export default Fruits