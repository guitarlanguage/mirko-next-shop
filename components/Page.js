import Head from 'next/head';
import Title from './Title';
import Navbar from  "./Navbar"

function Page({ title, children }) {
  return (
    <>
      <Head>
        <title>{`${title} - Next Shop`}</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="px-6 py-4">
        <Title>{title}</Title>
        {children}
      </main>
    </>
  );
}

export default Page;