/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { styled } from '../../../stitches.config';

const SectionFooter = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 'fit-content',
  backgroundColor: '$primary',
  color: '#fff',
  padding: '40px 20px 10px ',
  gap: '20px',

  '& .container': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '800px',
    gap: '20px',
  },
  '& p': {
    fontSize: '0.7rem',
    fontWeight: '400',
  },
  '& .area': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100px',
    width: '100%',
    maxWidth: '300px',
    height: 'fit-content',

    gap: '20px',

    '@bp2': {
      flexDirection: 'column',
      gap: '15px',
    },

    '& .help': {
      color: '#fff',
      '&:hover': {
        color: '$secondary',
      },
    },

    '& .subArea': {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      width: '100%',

      '@bp2': {
        gap: '5px',
      },

      '& .linksSocial': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px',

        '& a': {
          width: 'fit-content',
          height: 'fit-content',
          transition: 'all 0.3s ease-in-out',
        },

        '& a:hover': {
          transform: 'scale(1.1)',
        },
      },
      '& h4': {
        color: '#fff',
      },
      '& img.cards': {
        width: '200px',
        height: '100%',
      },
      '& img.social': {
        width: '30px',
        height: '30px',
      },
    },
  },

  '& .area.btn': {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'fit-content',
  },

  '& .area.about': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '300px',
    height: 'fit-content',
  },

  '@bp2': {
    gap: '15px',
  },
});

const FooterSection = styled('div', {
  width: '100%',
  height: '26px',
  backgroundColor: '#3b3b3b',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& img': {
    height: '14px',
  },
});

const Button = styled('a', {
  display: 'flex',
  alignItems: 'center',
  border: 'none',
  height: '46px',
  width: 'fit-content',
  padding: '0 30px',
  background: '#29A71A',
  borderRadius: '20px',
  gap: '20px',

  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease',

  '& img': {
    width: '30px',
    height: '30px',
  },

  '&:hover': {
    background: '#3dc92d',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
});

const Footer = () => {
  return (
    <>
      <SectionFooter>
        <div className='container'>
          <div className='area about'>
            <div className='subArea'>
              <h4>QUEM SOMOS</h4>
              <p className='about'>
                Chegamos com um novo conceito de mercado, através de um ambiente
                mais confortável e com muito mais que só produtos, estamos a
                cada dia nos dedicando a trasnformar sua experiência em fazer
                compras.
              </p>
            </div>
            <div className='subArea '>
              <h4>AJUDA</h4>
              <a
                className='help'
                href='mailto:contato@mainfoodsmarket.com.br'
                target='_blank'
                rel='noopener noreferrer'
              >
                Fale conosco
              </a>
              <a
                className='help'
                href='https://wa.me/+5521970963131?text=Ol%C3%A1,%20preciso%20de%20informa%C3%A7%C3%A3o%20'
                target='_blank'
                rel='noopener noreferrer'
              >
                SAC
              </a>
            </div>
          </div>
          <div className='area'>
            <div className='subArea'>
              <h4>ACEITAMOS</h4>
              <img className='cards' src='/cards.svg' alt='cartoes' />
            </div>

            <div className='subArea'>
              <h4>SIGA NOSSAS REDES SOCIAIS</h4>
              <div className='linksSocial'>
                <a
                  href='https://www.facebook.com/Mainfoodsmarket'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    className='social'
                    src='/icons/facebook.png'
                    alt='facebook'
                  />
                </a>
                <a
                  href='https://instagram.com/mainfoodsmarket?utm_medium=copy_link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    className='social'
                    src='/icons/instagram.png'
                    alt='instagram'
                  />
                </a>
              </div>
            </div>

            <div className='subArea'>
              <h4>COMO CHEGAR?</h4>
              <div className='linksSocial'>
                <a
                  href='https://www.google.com/maps/place/MAIN+FOODS+Market/@-22.9927804,-43.3659534,17z/data=!4m9!1m2!2m1!1smain+foods+casa+shopping+bloco+p+pav+0!3m5!1s0x9bdbde1c562a69:0x50bdb1839b63c38f!8m2!3d-22.9928071!4d-43.3638843!15sCiZtYWluIGZvb2RzIGNhc2Egc2hvcHBpbmcgYmxvY28gcCBwYXYgMFooIiZtYWluIGZvb2RzIGNhc2Egc2hvcHBpbmcgYmxvY28gcCBwYXYgMJIBBm1hcmtldJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSdGVsbElhRlozRUFF'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    className='social'
                    src='/icons/local.png'
                    alt='cartoes'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='area btn'>
          <Button href='https://wa.me/message/QDF24RATQPW3M1' target='_blank'>
            <img src='/icons/whatsapp.png' alt='whatsapp' />
            <span>Peça pelo Whatsapp</span>
          </Button>
        </div>
        <p>Copyright Reserverd2021 @MainFoodsmarket.com.br</p>
      </SectionFooter>
      <FooterSection>
        <img src='/logop.svg' alt='DIV' />
      </FooterSection>
    </>
  );
};

export default Footer;
