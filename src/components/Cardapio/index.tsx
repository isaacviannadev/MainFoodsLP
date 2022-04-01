/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { styled } from '../../../stitches.config';

import Image from 'next/image';

import prato from '../../assets/images/prato2.png';
import lateralExecutivo from '../../assets/images/lateralExecutivo.svg';

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

  '& .imagem': {
    position: 'absolute',
    top: '-50px',
    left: '-30px',
    width: '100%',
    height: '200px',
    maxWidth: '320px',

    '@bp2': {
      top: '-30px',
      left: '-20px',
      maxWidth: '280px',
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
    paddingLeft: '240px',
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

    '& .prato': {
      position: 'absolute',
      top: '-80px',
      left: '-280px',
      width: '500px',
      height: '500px',

      '@bp2': {
        top: '10px',
        left: '-100px',
        width: '300px',
        height: '300px',
      },

      '@bp1': {
        top: '-135px',
        left: '50%',
        transform: 'translateX(-50%)',

        width: '160px',
        height: '160px',
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
    <SectionMenu id='cardapio'>
      <div className='imagem'>
        <Image src={lateralExecutivo} alt='legumes soltos' />
      </div>
      <div className='cardAlmoco'>
        <div className='prato'>
          <Image src={prato} alt='prato executivo' />
        </div>
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
