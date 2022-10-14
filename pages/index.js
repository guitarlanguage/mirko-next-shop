//option 1b: fetch products on the server sie 
//but with incremental static regeneration

import Head from 'next/head'
import Link from 'next/link';
import Title from '../components/Title';
import { getProducts } from '../lib/products';

export async function getStaticProps() {
  const products = await getProducts()
  return { 
    props: { products },
    revalidate: 5 * 60, // seconds 
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
            <Link href={`/products/${product.id}`}>
              <a>
                {product.title}
              </a>
            </Link>
          </li>
        ))}
       </ul>
      </main>
    </>
  )
}

export default HomePage;
