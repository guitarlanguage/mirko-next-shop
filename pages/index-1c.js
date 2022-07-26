//option 1b: fetch products on the server sie 
//but with get server side props

import Head from 'next/head'
import Title from '../components/Title';
import { getProducts } from '../lib/products';

export async function getServerSideProps() {
  const products = await getProducts()
  return { 
    props: { products }
  };
}

function HomePage({ products }) {
  console.log('[HomePage] render:', products);
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="p-2 px-4 py-6">
       <Title>Next Shop</Title>
       <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title}
          </li>
        ))}
       </ul>
      </main>
    </>
  )
}

export default HomePage;
