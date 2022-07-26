//option 1 fetch products client side with useEffect
// from an internal api 


import Head from 'next/head'
import Title from '../components/Title';
import { getProducts } from '../lib/products';

function HomePage({ products }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch('/api/products');
      const products = await response.json();
      setProducts(products);
    })
  }, []);
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
