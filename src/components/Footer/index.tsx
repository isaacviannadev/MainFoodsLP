import React from 'react';
import { styled } from '../../../stitches.config';

const SectionFooter = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '260px',
  flex: 'none',
  backgroundColor: '$primary',
});

const Footer = () => {
  return (
    <SectionFooter>
      <div>index</div>
    </SectionFooter>
  );
};

export default Footer;
