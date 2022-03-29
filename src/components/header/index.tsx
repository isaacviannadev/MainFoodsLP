import Image from 'next/image';
import { styled } from '../../../stitches.config';

import Logo from '../../assets/Vector.svg';

const HeaderContainer = styled('header', {
  display: 'flex',
  width: '100%',
  height: '60px',
  justifyContent: 'center',
  alignItems: 'center',
});

const HeaderContent = styled('header', {
  display: 'inline-flex',
  width: '100%',
  height: '100%',
  maxWidth: '1200px',
  padding: '0 20px',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Image src={Logo} width='100px' height='60px' alt='Logo Main Foods' />
        <div>Menu</div>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
