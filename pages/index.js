import Head from 'next/head'
import Title from '../components/Title';

function HomePage() {
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="p-2 px-4 py-6">
       <Title>Next Shop</Title>
      </main>
    </>
  )
}

export default HomePage;
