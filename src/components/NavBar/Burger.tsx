import React, { useState } from 'react';
import { styled } from '../../../stitches.config';
import RightNav from './RightNav';

const StyledBurger = styled('div', {
  display: 'none',
  zIndex: 99,
  top: '15px',
  right: '20px',
  width: '2rem',
  height: '2rem',
  cursor: 'pointer',

  '@bp2': {
    display: 'flex',
    justifyContent: 'space-around',
    flexFlow: 'column nowrap',
  },

  '& div': {
    width: '2rem',
    height: '0.25rem',
    backgroundColor: '$primary',
    borderRadius: '10px',
    transformOrigin: '1px',
    transition: 'all 0.3s linear',
  },

  '&.closed': {
    '& div:nth-child(1)': {
      transform: 'rotate(0deg)',
    },
    '& div:nth-child(2)': {
      transform: 'translateX(0)',
      opacity: 1,
    },
    '& div:nth-child(3)': {
      transform: 'rotate(0deg)',
    },
  },
  '&.opened': {
    '& div:nth-child(1)': {
      transform: 'rotate(45deg)',
    },
    '& div:nth-child(2)': {
      transform: 'translateX(100%)',
      opacity: 0,
    },
    '& div:nth-child(3)': {
      transform: 'rotate(-45deg)',
    },
  },
});

const Burger = () => {
  const [open, setOpen] = useState<'opened' | 'closed'>('closed');

  return (
    <>
      <StyledBurger
        className={open}
        onClick={() => setOpen(open === 'closed' ? 'opened' : 'closed')}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} setOpen={setOpen} />
    </>
  );
};

export default Burger;
