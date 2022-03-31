import Image from 'next/image';
import Logo from '../../assets/logomf.svg';

import { styled } from '../../../stitches.config';
import Burger from './Burger';
import { useEffect, useState } from 'react';

const Nav = styled('nav', {
  width: '100%',
  height: '60px',
  maxWidth: '1200px',
  padding: '0 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'transparent',

  '&.logo': {
    padding: '15px 0',
  },
});

const HeaderContainer = styled('header', {
  display: 'flex',
  position: 'fixed',
  width: '100%',
  height: '60px',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: '1px solid #dfdfdf',
  transition: 'all 0.2s ease-in-out',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
  zIndex: 98,
});

const Navbar = () => {
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 5) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return (
    <HeaderContainer
      css={
        animateHeader
          ? { backgroundColor: '#fff' }
          : {
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(5px)',
            }
      }
    >
      <Nav>
        <Image src={Logo} width='140px' height='60px' alt='Logo Main Foods' />
        <Burger />
      </Nav>
    </HeaderContainer>
  );
};

export default Navbar;
