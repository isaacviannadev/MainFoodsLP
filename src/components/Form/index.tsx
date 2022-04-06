/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { styled } from '../../../stitches.config';
import Image from 'next/image';

import logoClub from '../../assets/clubmf.svg';
import illustration from '../../assets/images/ilustration1.svg';

const SectionForm = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '600px',
  flex: 'none',
  padding: '20px 0px 0px',
  position: 'relative',

  '& .greenBar': {
    position: 'absolute',
    width: '100%',
    height: '50px',
    backgroundColor: '$secondary',
    bottom: '-10px',
  },

  '& .sectionDescription': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'fit-content',
    gap: '20px',
    padding: '20px 20px 40px',

    '& p': {
      width: '100%',
      maxWidth: '500px',
      lineHeight: '1.5',
      textAlign: 'center',
    },

    '@bp2': {},
  },

  '& .register': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'fit-content',
    flex: 1,
    background:
      ' linear-gradient(142deg, rgba(129,129,129,1) 0%, rgba(232,232,232,1) 50%, rgba(129,129,129,1) 100%)',

    '& .contentRegister': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      maxWidth: '1200px',
      height: '100%',
      padding: '20px ',

      '& .contentText': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: '1',
        gap: '20px',

        '& .clubLogo': {
          width: '100%',
          maxWidth: '300px',
          height: 'auto',
        },

        '& p': {
          width: '100%',
          maxWidth: '220px',

          color: '$primary',
        },
      },
      '& .contentImg': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        width: '100%',
        height: '100%',
        maxHeight: '400px',
        flex: '1',

        '@bp1': {
          display: 'none',
        },
      },
    },
  },
});

const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  border: 'none',
  height: '40px',
  width: 'fit-content',
  padding: '0 30px',
  background: '$primary',
  borderRadius: '20px',

  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease',

  '&:hover:not(:disabled)': {
    background: '$primaryLight',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },

  '&:disabled': {
    background: '#ccc',
    cursor: 'not-allowed',
  },
});

const Form = () => {
  const refToComponentForm = React.useRef(null);

  useEffect(() => {
    async function animate() {
      if (refToComponentForm.current) {
        const sr = (await import('scrollreveal')).default;
        sr().reveal(refToComponentForm.current, { delay: 200, reset: true });
        sr().reveal('.sectionDescription', {
          delay: 500,
          reset: true,
          origin: 'bottom',
          distance: '30px',
        });
        sr().reveal('.register', {
          delay: 500,
          reset: true,
          origin: 'top',
          distance: '30px',
          duration: 1000,
        });
      }
    }
    animate();
  }, []);

  return (
    <SectionForm id='contato' ref={refToComponentForm}>
      <div className='sectionDescription'>
        <h1>FIQUE POR DENTRO</h1>
        <p>
          Acompanhe todas as novidades em primeira mão, são promoções
          exclusivas, lançamentos de produtos, novos sabores e muito mais!
        </p>
      </div>
      <div className='register'>
        <div className='contentRegister'>
          <div className='contentText'>
            <div className='clubLogo'>
              <Image src={logoClub} alt={'club logo'} />
            </div>

            <p>Um club de vantagens exclusivas para você.</p>
            <p>Aproveite ofertas, descontos e benefícios exclusivos.</p>
            <Button>CADASTRE-SE</Button>
          </div>
          <div className='contentImg'>
            <Image src={illustration} alt={'club logo illustration'} />
          </div>
        </div>
      </div>
      <div className='greenBar'></div>
    </SectionForm>
  );
};

export default Form;
