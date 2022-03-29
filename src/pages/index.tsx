import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Main Foods</title>
      </Head>
      <Header />
      <h1>Main Foods 2</h1>
    </>
  );
};

export default Home;
