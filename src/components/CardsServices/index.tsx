/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { styled } from '../../../stitches.config';
import Modal from '../Modal';

const serviceItem = [
  {
    id: 'carona',
    icon: '/icons/carona.png',
    title: 'Carona Main',
    text: `Aqui no main foods nós temos 
o prazer te levar você até 
seu veiculo! `,
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
 Casa Shopping, Bloco P - Pav 0 `,
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
  padding: '40px 0',
  flex: 'none',
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: '$gray200',

  '& .scrollLeft': {
    display: 'none',
    position: 'absolute',
    top: '50%',
    left: '5px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    zIndex: '1',
    width: '40px',
    height: '40px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primary',
    borderRadius: '50%',
    color: '#fff',
  },
  '& .scrollRight': {
    display: 'none',
    position: 'absolute',
    top: '50%',
    right: '5px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    zIndex: '1',
    width: '40px',
    height: '40px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primary',
    borderRadius: '50%',
    color: '#fff',
  },

  '@bp2': {
    '& .scrollLeft': {
      display: 'flex',

      '&:hover': {
        boxShadow: '0 0 4px 3px rgba(127, 52, 87, 0.4)',
        backgroundColor: '$primaryLight',
      },
    },
    '& .scrollRight': {
      display: 'flex',
      '&:hover': {
        boxShadow: '0 0 4px 3px rgba(127, 52, 87, 0.4)',
        backgroundColor: '$primaryLight',
      },
    },
  },

  '&:hover': {
    '& .scrollLeft': {},
    '& .scrollRight': {},
  },

  '& .cardsWrapper': {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    overflowX: 'scroll',
    scrollBehavior: 'smooth',

    '&::-webkit-scrollbar': {
      display: 'none',
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

  let scrolling: any = null;

  function scrollRight() {
    const d = document.getElementById('scroller');
    if (d) {
      d.scrollLeft = d.scrollLeft - 10;

      scrolling = window.setTimeout(function () {
        scrollRight();
      }, 100);
    }
  }

  function scrollLeft() {
    const d = document.getElementById('scroller');
    if (d) {
      d.scrollLeft = d.scrollLeft + 10;

      scrolling = window.setTimeout(function () {
        scrollLeft();
      }, 100);
    }
  }

  function stopScroll() {
    window.clearTimeout(scrolling);
  }

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

  console.log(selectedService);

  return (
    <>
      <SectionServices id='services'>
        <div
          className='scrollLeft'
          onMouseOver={scrollRight}
          onMouseOut={stopScroll}
        >
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth={0}
            viewBox='0 0 320 512'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z'></path>
          </svg>
        </div>
        <div
          className='scrollRight'
          onMouseOver={scrollLeft}
          onMouseOut={stopScroll}
        >
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth={0}
            viewBox='0 0 320 512'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z'></path>
          </svg>
        </div>
        <div className='cardsWrapper' id='scroller'>
          {serviceItem.map((item) => {
            return (
              <CardService key={item.id}>
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
