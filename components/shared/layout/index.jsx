import Link from 'next/link';
import { usePathname } from 'next/navigation'
import Head from 'next/head'
import { Image, Col, Row, Menu } from 'antd';
import { BsCart4 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { SearchOutlined, HomeOutlined, ContactsOutlined, UserOutlined, AppstoreOutlined, MailOutlined, SettingOutlined, CloseOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react';

import { HiOutlineMailOpen } from "react-icons/hi";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Carousel, Space, Input, Button } from 'antd';

import { AudioOutlined } from '@ant-design/icons'

const { Search } = Input;


const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1677ff',
        }}
    />
);

const onSearch = (value, _e, info) => console.log(info?.source, value);

const contentStyle = {
    height: '60px',

    color: 'white',

    textAlign: 'center',

};

const menus = [
    {
        label: "home",
        href: "/",
        icon: <HomeOutlined />

    },

    {
        label: "Fresh Fruits",
        href: "",
        icon: <UserOutlined />
    },
    {
        label: "Immunity Booster",
        href: "/",
        icon: <UserOutlined />
    },
    {
        label: "Dry Fruits",
        href: "/",
        icon: <UserOutlined />
    },
    {
        label: "contact",
        href: "/contact",
        icon: <ContactsOutlined />
    },

]


function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,

    };

}


const items = [
    getItem('CATEGORIES', 'sub1', <CloseOutlined />, [
        getItem('Home'),
        getItem('Buy Fresh Fruits'),
        getItem('Buy Exotic Mangoes'),
        getItem('Buy Important Fruits'),
        getItem('Buy Seasonal Fruits'),
        getItem('Buy Dry Fruits'),
        getItem('Fruit Pulp'),
        getItem('Bestseller'),
        getItem('About Us'),
        getItem('FAQs')
    ])

];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
import { FreeMode, Pagination } from 'swiper/modules';
const Layout = ({ children, title = "Page title is empty" }) => {

    // dropdown menubar coding //
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
     
    const [scrollHeight, setScrollHeight] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollHeight =
                typeof window !== "undefined"
                    ? window.pageYOffset || document.documentElement.scrollTop
                    : 0;
            setScrollHeight(currentScrollHeight);
        };
    
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }

    }, [])

console.log(scrollHeight)

    const pathname = usePathname()
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div>
                <nav className="bg-zinc-800 h-36 text-white">
                    <div class="container mx-auto px-40">
                        <div className=' p-5' >

                            {/*swiper js coding for animation one  */}

                            <Swiper
                                slidesPerView={6}
                                spaceBetween={30}
                                freeMode={true}

                                modules={[FreeMode, Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className='main flex'>
                                        <div className='image-box'>
                                            <Image
                                                width={40}
                                                padding={0}
                                                src="https://www.spotlessfruits.com/cdn/shop/files/c4_40x37_5cf147e2-eb89-4771-b8ac-f49dad6c967c_40x37.png?v=1615530077"

                                            />
                                        </div>

                                        <div class="text-white p-2  " >
                                            <span className='hover:text-green-500 font-bold'>
                                                WATERMELON
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                {/*second slider */}
                                <SwiperSlide>
                                    <div className='main flex'>
                                        <div className='image-box'>
                                            <Image
                                                width={40}
                                                padding={0}
                                                src="https://www.spotlessfruits.com/cdn/shop/files/c5_40x37_b250d146-c984-478d-9a04-ff78346475b2_40x37.png?v=1615530077"

                                            />
                                        </div>

                                        <div class="text-white p-2  " >
                                            <span className='hover:text-green-500 font-bold'>
                                                ORANGE
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/*end slider */}

                                {/*third slider */}
                                <SwiperSlide>
                                    <div className='main flex'>
                                        <div className='image-box'>
                                            <Image
                                                width={40}
                                                padding={0}
                                                src="https://www.spotlessfruits.com/cdn/shop/files/c6_40x37_360ca1fe-c782-4378-9eb5-ec34dc980411_40x37.png?v=1615530077"

                                            />
                                        </div>

                                        <div class="text-white p-2  " >
                                            <span className='hover:text-green-500 font-bold'>
                                                PAPAYA
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/*end slider */}

                                {/*fourth slider */}
                                <SwiperSlide>
                                    <div className='main flex'>
                                        <div className='image-box'>
                                            <Image
                                                width={40}
                                                padding={0}
                                                src="https://www.spotlessfruits.com/cdn/shop/files/fru3-40x34_40x37.png?v=1615611422"

                                            />
                                        </div>

                                        <div class="text-white p-2  " >
                                            <span className='hover:text-green-500 font-bold'>
                                                STRAWBERY
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/*end slider */}

                                {/*five slider */}
                                <SwiperSlide>
                                    <div className='main flex'>
                                        <div className='image-box'>
                                            <Image
                                                width={40}
                                                padding={0}
                                                src="https://www.spotlessfruits.com/cdn/shop/files/fru4-40x34_40x37.png?v=1615611411"

                                            />
                                        </div>

                                        <div class="text-white p-2  " >
                                            <span className='hover:text-green-500 font-bold'>
                                                WATERMELON
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/*end slider */}

                                {/*six slider */}
                                <SwiperSlide>
                                    <div className='main flex'>
                                        <div className='image-box'>
                                            <Image
                                                width={40}
                                                padding={0}
                                                src="https://www.spotlessfruits.com/cdn/shop/files/fru2-40x34_40x37.png?v=1615611382"

                                            />
                                        </div>

                                        <div class="text-white p-2  " >
                                            <span className='hover:text-green-500 font-bold'>
                                                APPLE
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/*end slider */}

                                {/*seven slider */}
                                <SwiperSlide>
                                    <div className='main flex'>
                                        <div className='image-box'>
                                            <Image
                                                width={40}
                                                padding={0}
                                                src="https://www.spotlessfruits.com/cdn/shop/files/fru5-40x34_40x37.png?v=1615611393"

                                            />
                                        </div>

                                        <div class="text-white p-2  " >
                                            <span className='hover:text-green-500 font-bold'>
                                                AVACADO
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/*end slider */}

                                {/*eight slider */}
                                <SwiperSlide>
                                    <div className='main flex'>
                                        <div className='image-box'>
                                            <Image
                                                width={40}
                                                padding={0}
                                                src="https://www.spotlessfruits.com/cdn/shop/files/c4_40x37_5cf147e2-eb89-4771-b8ac-f49dad6c967c_40x37.png?v=1615530077"

                                            />
                                        </div>

                                        <div class="text-white p-2  " >
                                            <span className='hover:text-green-500 font-bold'>
                                                WATERMELON
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/*end slider */}

                                {/*Nine slider */}
                                <SwiperSlide>
                                    <div className='main flex'>
                                        <div className='image-box'>
                                            <Image
                                                width={40}
                                                padding={0}
                                                src="https://www.spotlessfruits.com/cdn/shop/files/c4_40x37_5cf147e2-eb89-4771-b8ac-f49dad6c967c_40x37.png?v=1615530077"

                                            />
                                        </div>

                                        <div class="text-white p-2  " >
                                            <span className='hover:text-green-500 font-bold'>
                                                WATERMELON
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/*end slider */}
                            </Swiper>

                            {/* end */}

                        </div>
                    </div>
                    {/* menudbar coding */}

                    <div className='container mx-auto px-40 z-40 '>
                        <div className='bg-white text-black h-32 shadow-2xl '>
                           <div style={{zIndex:'-1px'}}>
                            <Row>
                                <Col span={6}>
                                    <a className='p-3 '>

                                        <img src='data:image/webp;base64,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'
                                            width={150}
                                            className='ml-5'

                                        />
                                    </a>
                                </Col>
                                <Col span={6}></Col>
                                <Col span={6}>
                                    <div className='flex row bg-white'>
                                        <a>
                                            <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAkADsDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAQFAgMGAf/EACwQAAEEAAIJBAIDAAAAAAAAAAIAAQMEBREWISIxMkFUo9EGEnHBM1FisfD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7NERBX2Maw6tOUMtkWkDiFhcsvnJlhpDhfVdsvCgV6UpTXbtEmC5HaNsn4ZR1bJfT8lcYffjvwuQM4SA/tkiLijL9OgjaQ4X1XbLwptW1BcgGatIMsZbiFV080mLzHUqG4VAf2z2B3k/MAf+3Xvp+III70UQsEYWzERbczZMgtkREBERBz1e7KM12lRFjtyWjd3dtmIdW0X03NSX9PQsIvHYnjmLNp5hLamZ97P/ALUpNjBcPszlPNWF5D4iYnbP5yda9HsL6XuF5QaTrFghPPRjcqT/AJq463D+Yfbc1n6flCeO9LETHGdsyEm3O2TLPR7C+l7heVNq1YKcAw1ohijHcIoNyIiAiIgIiICIiAiIg//Z'
                                                className='mt-5'
                                            />
                                        </a>
                                        <span className='mt-5 text-base p-1'>care@spotlessfruits.com</span>
                                    </div>



                                </Col>
                                <Col span={6}>
                                    <div className='icon-account flex row'>
                                        <div>
                                            <VscAccount size={25} className='mt-6' />
                                        </div>
                                        <span className='mt-7 ml-3 font-serif'>My Account</span>
                                        <div className='w-32 h-11 ml-3 bg-slate-100 flex row  mt-5'>

                                            <div className='cart-item'>
                                                <BsCart4 size={25} className=' ml-5 mt-1 ' />
                                            </div>

                                            <span className='mt-1 text-xl ml-2'>0</span>
                                            <span className='mt-0 text-xl mx-1 mt-1 '>Item</span>
                                        </div>

                                    </div>


                                </Col>
                            </Row>
                            </div>
                            {/* dropdown menubar */}
                            <div className={` z-100    ${scrollHeight > 20 ? 'fixed top-0 z-100 bg-white h-18 w-9/12' : ''}`}>
                            <Row>
                                <Col span={6}>
                                    <div className='w-full'>
                                        <div>
                                            <Menu

                                                mode="inline"
                                                openKeys={openKeys}
                                                onOpenChange={onOpenChange}
                                                style={{
                                                    width: 256,
                                                }}
                                                items={items}

                                            />
                                        </div>
                                    </div>

                                </Col>
                                <Col span={12}>
                                    <div className='mt-4 ml-8 bg-white w-full h-10'>
                                        <div className='flex gap-8  '>
                                            {
                                                menus.map((item, index) => (
                                                    <Link href={item.href} legacyBehavior key={index}>
                                                        <a className={`capitalize ${item.href === pathname && 'text-red-500'}`}>{item.label}</a>
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className='w-full flex p-2 bg-white'>
                                        <div className='sans-serif mt-2 '>
                                            <Input addonAfter={<SearchOutlined />} defaultValue="search Our Catelog"
                                                style={{ width: '280px' }}
                                            />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            </div>
                           
                        </div>
                    </div>
                    {/* end menubar coding*/}
                </nav>
                <section className='mt-40'>{children}</section>
                <footer className=' flex text-white text-1xl mt-20 z-0'>
                    <div style={{ position: 'absolute', zIndex: '-1', marginTop: '60px' }}>
                        <img
                            src='https://www.spotlessfruits.com/cdn/shop/files/Fruits_Photo_Collage_Food_Facebook_Cover_1.png?v=1625941291'
                            width={1600}
                            height={500}
                        />
                    </div>

                    <div style={{ color: 'black' }}>
                        <div style={{ marginLeft: '191px', marginRight: '191px', width: '1194px', height: '114px', position: 'relative', background: 'white', borderRadius: '20px',zIndex:'-1' }} className='shadow-[0_3px_10px_rgb(0,0,0,0.9)]'  >
                            <div className='flex row'>
                                <Row>
                                    <Col span={12}>
                                        <div style={{ width: '597px', backgroundColor: 'white', height: 'auto' }}>
                                            <div style={{ background: '#3B9048', width: '70px', height: '70px', textAlign: 'center', borderRadius: '100%' }} className='p-4 ml-5 mt-5 flex'>
                                                <button className='text-white-500'><svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40" className='text-white'><path d="M0 0h24v24H0z" fill="none" /><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg></button>
                                                <h2 className='pl-8 ' style={{ fontFamily: 'Poppins sansSerif', fontSize: '16px', lineHeight: '24px', letterSpacing: '1.5px', color: '#666666' }}>WhatsApp :</h2>
                                            </div>
                                            <button style={{ position: 'absolute', marginTop: '-20px', marginLeft: '110px', fontFamily: 'sans-serif', fontWeight: '400', letterSpacing: '0.5px', color: '#666666', textDecoration: 'none solid rgb(102,102,102)' }}>+930412890</button>
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div style={{ width: '597px', backgroundColor: 'white', height: 'auto' }}>
                                            <div style={{ background: '#3B9048', width: '70px', height: '70px', textAlign: 'center', borderRadius: '100%' }} className='p-4 ml-5 mt-5 flex'>
                                                <button className='text-white-500'><svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40"><path d="M0 0h24v24H0z" fill="none" /><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg></button>
                                                <h2 className='pl-8 ' style={{ fontFamily: 'Poppins sansSerif', fontSize: '16px', lineHeight: '24px', letterSpacing: '1.5px', color: '#666666' }}>Email :</h2>
                                            </div>
                                            <button style={{ position: 'absolute', marginTop: '-20px', marginLeft: '110px', fontFamily: 'sans-serif', fontWeight: '400', letterSpacing: '0.5px', color: '#666666', textDecoration: 'none solid rgb(102,102,102)' }}>
                                                Care@Spotlessfruits.Com
                                            </button>
                                        </div>
                                    </Col>
                                </Row>


                            </div>

                        </div>

                        {/*contaner message coding */}

                        <div className='container mx-5 mt-20'>
                            <div style={{ textAlign: 'center' }}>
                                <center>
                                    <HiOutlineMailOpen size={50} style={{ color: 'green' }} />
                                    <h1 style={{ fontFamily: 'Rubik', fontSize: '40px' }}>NEVER MISS AN OFFER</h1>
                                    <hr className=' w-20 text-black ' />
                                    <h2 style={{ color: '#666666', fontFamily: 'Poppins', lineHeight: '24px', fontStyle: 'normal', fontWeight: '400', marginTop: '20px' }}>Subscribe Now To Receive Offers & Gift Vouchers Directly In Your Inbox.</h2>

                                    <form>
                                        <div className='flex row ' style={{ width: 650, height: 50, borderRadius: '0', marginTop: '40px' }}>
                                            <input placeholder='Your Email Address ' className='w-full p-5 ' />
                                            <Button type="submit" style={{ width: '200px', height: '50px', background: '#3B9048', marginLeft: '2px', borderRadius: '0px', fontFamily: 'sans-serif', fontSize: '20px', color: 'white' }} >SUBSCRIBE
                                            </Button>
                                        </div>

                                    </form>
                                    <div className='ml-80 pl-20 p-10'>
                                        <Row>

                                            <Col span={3} style={{ fontFamily: 'sans-serif', fontSize: '14px', color: '#666666' }}>
                                                <span>Exotic Fruits </span>
                                            </Col>
                                            <Col span={3} style={{ fontFamily: 'sans-serif', fontSize: '14px', color: '#666666' }}>
                                                <span>Premium Mangoes</span>
                                            </Col>
                                            <Col span={3} style={{ fontFamily: 'sans-serif', fontSize: '14px', color: '#666666' }}>
                                                <span> Imported Fruits</span>
                                            </Col>
                                            <Col span={3} style={{ fontFamily: 'sans-serif', fontSize: '14px', color: '#666666' }}>
                                                <span> Fresh Berries</span>
                                            </Col>
                                            <Col span={3} style={{ fontFamily: 'sans-serif', fontSize: '14px', color: '#666666' }}>
                                                <span> Seasonal Fruits</span>
                                            </Col>
                                        </Row>

                                        <Row className='mt-5 p-1'>

                                            <Col span={3} style={{ fontFamily: 'sans-serif', fontSize: '14px', color: '#666666' }}>
                                                <span>Exotic Fruits </span>
                                            </Col>
                                            <Col span={3} style={{ fontFamily: 'sans-serif', fontSize: '14px', color: '#666666' }}>
                                                <span>Premium Mangoes</span>
                                            </Col>
                                            <Col span={3} style={{ fontFamily: 'sans-serif', fontSize: '14px', color: '#666666' }}>
                                                <span> Imported Fruits</span>
                                            </Col>
                                            <Col span={3} style={{ fontFamily: 'sans-serif', fontSize: '14px', color: '#666666' }}>
                                                <span> Fresh Berries</span>
                                            </Col>
                                            <Col span={3} style={{ fontFamily: 'sans-serif', fontSize: '14px', color: '#666666' }}>
                                                <span> Seasonal Fruits</span>
                                            </Col>
                                        </Row>
                                    </div>
                                </center>
                            </div>
                        </div>

                        {/* container */}
                    </div>

                </footer>
            </div>
        </>
    )
}

export default Layout