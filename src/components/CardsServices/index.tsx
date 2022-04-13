/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { styled } from '../../../stitches.config';
import Modal from '../Modal';

const serviceItem = [
  {
    id: 'carona',
    icon: '/icons/carona.png',
    title: 'Carona Main',
    text: `Aqui no Main Foods nós temos o prazer de levar você e suas compras até seu veículo!`,
    video: 'https://www.youtube.com/embed/xTv4_ddAqYg',
  },
  {
    id: 'delivery',
    icon: '/icons/delivery.png',
    title: 'Delivery Programado',
    text: `Você só se preocupa em montar 
sua lista de compras, entregamos 
no melhor horário para você.`,
    video: 'https://www.youtube.com/embed/2z5DN36jzDg',
  },
  {
    id: 'maps',
    icon: '/icons/location.png',
    title: 'Como chegar?',
    text: `Estamos localizados dentro do 
 CasaShopping, Bloco P - Pav 0 `,
    embed: true,
  },
  {
    id: 'estacionamento',
    icon: '/icons/estacionamento.png',
    title: 'Vagas exclusivas',
    text: `Não se preocupe`,
    video: 'https://www.youtube.com/embed/BaloeZ_9xzA',
  },
  {
    id: 'pizzaria',
    icon: '/icons/pizzaria.png',
    title: 'Pizzaria',
    text: `Todo mundo gosta de pizza!
Experimente as nossas produzidas 
com fermentação natural.`,
  },
  {
    id: 'adega',
    icon: '/icons/wine.png',
    title: 'Adega',
    text: `São muitos rótulos a sua escolha,
encontre também licores 
e espumantes `,
    image:
      'https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
];

const SectionServices = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px 0 0',
  flex: 'none',
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: '$gray200',

  '& .cardsWrapper': {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    overflowX: 'scroll',
    scrollBehavior: 'smooth',

    '&::-webkit-scrollbar': {
      width: '10px',
      height: '10px',
    },

    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      background: '$primaryLight',

      '&:hover': {
        background: '$primary',
      },
    },

    '@bp2': {
      justifyContent: 'start',
    },
  },
});

const CardService = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '40px 20px',
  gap: '20px',
  width: '300px',
  height: '360px',
  flex: 'none',
  marginBottom: '20px',
  '&:not(:first-child)': {
    borderLeft: '3px solid $primary',
  },

  '& img': {
    width: 'auto',
    height: '80px',
  },

  '& h3': {
    textTransform: 'uppercase',
    color: '$yellow',
    letterSpacing: '1px',
  },

  '& p': {
    textAlign: 'center',
    height: '100%',
  },

  '& footer': {
    display: 'flex',
    width: '100%',
    height: '50px',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Button = styled('button', {
  background: '$primary',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease',

  '&:hover': {
    background: '$primaryLight',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.25)',
  },
});

type ServiceTypes = {
  id: string;
  icon: string;
  title: string;
  text: string;
  video?: string;
  embed?: boolean;
  image?: string;
};

const Services = () => {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceTypes>();

  const openModal = (id: string) => {
    const selected = serviceItem.find((item) => item.id === id);

    if (id === 'pizzaria') {
      window.open(
        'https://drive.google.com/file/d/1my-aax1TOMThD_mSNyzs6gEKNpEKXq_Z/view?usp=sharing',
        '_blank'
      );
    } else {
      setOpen(true);
      setSelectedService(selected);
    }
  };

  const refToComponentServ = React.useRef(null);

  useEffect(() => {
    async function animate() {
      if (refToComponentServ.current) {
        const sr = (await import('scrollreveal')).default;
        sr().reveal(refToComponentServ.current, { delay: 200 });
        sr().reveal('.cardsWrapper', {
          delay: 500,

          distance: '50px',
          origin: 'bottom',
          duration: 1000,
        });
      }
    }
    animate();
  }, []);

  return (
    <>
      <SectionServices id='services' ref={refToComponentServ}>
        <div className='cardsWrapper' id='scroller'>
          {serviceItem.map((item) => {
            return (
              <CardService key={item.id} className='cardsServItem'>
                <img src={item.icon} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <footer>
                  <Button onClick={() => openModal(item.id)}>
                    {item.title !== 'Pizzaria' ? 'Saiba Mais' : 'Cardápio'}
                  </Button>
                </footer>
              </CardService>
            );
          })}
        </div>
      </SectionServices>
      {selectedService && (
        <Modal
          open={open}
          text={selectedService?.text}
          title={selectedService.title}
          video={selectedService.video}
          embed={selectedService.embed}
          image={selectedService.image}
          closeModal={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Services;
