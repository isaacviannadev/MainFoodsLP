import type { NextPage } from 'next';
import Head from 'next/head';
import Cardapio from '../components/Cardapio';
import Intro from '../components/Intro';
import Navbar from '../components/NavBar';
import Products from '../components/Products';
import SectionMobile from '../components/SectionMobile';
import VideoSection from '../components/VideoSection';
import CardsServices from '../components/CardsServices';
import Form from '../components/Form';
import Footer from '../components/Footer';

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
      <VideoSection />
      <CardsServices />
      <Form />
      <Footer />
    </>
  );
};

export default Home;
