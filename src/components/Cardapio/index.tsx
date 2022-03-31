/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { styled } from '../../../stitches.config';

const SectionMenu = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
  justifyContent: 'center',
  height: '600px',
  flex: 'none',
  position: 'relative',
  backgroundColor: '#f5f5f5',
  padding: '20px 0',

  '& img.imagem': {
    position: 'absolute',
    top: '-30px',
    left: '0px',
    width: 'auto',
    height: '660px',

    '@bp2': {
      top: '-20px',
      left: '-10px',
    },
  },

  '& .cardAlmoco': {
    display: 'flex',
    flexDirection: 'column',
    height: '300px',
    width: '50%',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '$primary',
    padding: '20px',
    paddingLeft: '200px',
    position: 'relative',

    '& h1': {
      color: '#fff',
    },

    '@bp2': {
      width: '80%',
      height: 'auto',
    },

    '@bp1': {
      width: '100%',
      paddingLeft: '20px',
    },

    '& img.prato': {
      position: 'absolute',
      top: '-30px',
      left: '-260px',
      width: 'auto',
      height: '400px',

      '@bp2': {
        top: '10px',
        left: '-100px',
        width: 'auto',
        height: '300px',
      },

      '@bp1': {
        top: '-130px',
        left: 'calc(50% - 75px)',

        width: '150px',
        height: '150px',
      },
    },
    '& .content': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      maxWidth: '300px',

      '@bp1': {
        maxWidth: '100%',
      },

      '& p': {
        color: '#fff',
      },
    },
  },
});

const Button = styled('a', {
  display: 'flex',
  alignItems: 'center',
  border: 'none',
  height: '40px',
  width: 'fit-content',
  padding: '0 30px',
  background: '#FF9900',
  borderRadius: '20px',

  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease',

  '&:hover': {
    background: '#ffaa2a',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
});

const Cardapio = () => {
  return (
    <SectionMenu>
      <img
        className='imagem'
        src='/images/lateralExecutivo.svg'
        alt='legumes soltos'
      />
      <div className='cardAlmoco'>
        <img className='prato' src='/images/prato2.png' alt='prato executivo' />
        <div className='content'>
          <h1>Almoço Executivo</h1>
          <p>
            Sempre tem aquela pausa para almoço e fica ainda melhor com aquele
            sabor de comida caseira.{' '}
          </p>
          <p>
            Temos uma variação de pratos especialmente pensados em você, não
            deixe de consultar nossas sobremesas
          </p>

          <Button
            href={
              ' https://drive.google.com/file/d/1gJhLveFN-EwvoyqrHrbcSYUVCHm9We_S/view'
            }
            target='_blank'
          >
            Ver Cardápio
          </Button>
        </div>
      </div>
    </SectionMenu>
  );
};

export default Cardapio;
