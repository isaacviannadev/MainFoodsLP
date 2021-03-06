import React, { useEffect } from 'react';
import { styled } from '../../../stitches.config';

const Section = styled('section', {
  display: 'flex',
  width: '100%',
  minHeight: '600px',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: 'url("/Images/introBg.jpg")',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% 35%',
  padding: '0',

  '@bp2': {
    minHeight: '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  '& .container': {
    display: 'flex',
    height: '100%',
    width: '100%',
    maxWidth: '1200px',

    '@bp2': {
      marginBottom: '20px',
    },
  },

  '& .welcomeMobile, .descriptionMobile': {
    display: 'none',
  },
});

const CardIntro = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'end',
  padding: '10px 20px',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  backdropFilter: 'blur(5px)',
  width: 'fit-content',
  borderRadius: '6px',
  gap: '10px',
  marginBottom: '40px',

  '& h1': {
    fontSize: '3rem',
    fontWeight: '400',
  },

  '& .welcome': {
    fontWeight: '600',
  },

  '& .description': {
    maxWidth: '600px',
  },

  '@bp2': {
    width: '100%',
    borderRadius: '0',
    marginBottom: '0',

    '& h1': {
      fontSize: '2rem',
      fontWeight: '400',
    },

    '& .welcome, .description': {
      display: 'none',
    },
  },
});

const Intro = () => {
  const refToComponent = React.useRef(null);

  useEffect(() => {
    async function animate() {
      if (refToComponent.current) {
        const sr = (await import('scrollreveal')).default;
        sr().reveal(refToComponent.current, { delay: 500 });
        sr().reveal('.container', {
          delay: 1000,

          distance: '50px',
        });
        sr().reveal('.welcome', {
          delay: 1000,

          distance: '50px',
          easing: 'ease-in-out',
        });
        sr().reveal('.description', {
          delay: 1000,

          distance: '50px',
        });
      }
    }
    animate();
  }, []);

  return (
    <Section id='intro' ref={refToComponent}>
      <div className='container'>
        <CardIntro>
          <p className='welcome'>Bem-vindo(a) ao Main Foods Market</p>

          <h1>
            A gente fez diferente, <br /> a gente pensou em voc??!
          </h1>
          <p className='description'>
            Chegamos para proporcionar a melhor experi??ncia ao fazer suas
            compras! Mais conforto, os melhores produtos e o atendimento que
            voc?? merece em um s?? lugar. Um novo conceito, o seu novo mercado!
          </p>
        </CardIntro>
      </div>
    </Section>
  );
};

export default Intro;
