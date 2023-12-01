import Hero from './hero';
import LetestProduct from './letestProduct';
import ProductImage from './productImage';
import SaleProduct from './saleProduct';
import Layout from '../shared/layout';
import Trending from './premiumPro';
import NewProduct from './newProduct'
import Offer from './offer'
import Time from './time'
import FreshFruits from './freshFruits';
const Home = () => {
  return (
    <Layout title="Homepage" >
      <div className='all'>
         <Hero />
         <LetestProduct />
          <ProductImage />
          <SaleProduct />
          <NewProduct />
          <Trending />
          <Offer />
          <FreshFruits />
         
          

      </div>
    </Layout>
  )
}

export default Home