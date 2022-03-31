import type { NextPage } from 'next';
import Head from 'next/head';
import Cardapio from '../components/Cardapio';
import Intro from '../components/Intro';
import Navbar from '../components/NavBar';
import Products from '../components/Products';
import SectionMobile from '../components/SectionMobile';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Main Foods</title>
      </Head>
      <Navbar />
      <Intro />
      <SectionMobile />
      <Products />
      <Cardapio />
    </>
  );
};

export default Home;
