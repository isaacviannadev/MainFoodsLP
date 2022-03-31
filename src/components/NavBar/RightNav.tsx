import { styled } from '../../../stitches.config';

const Ul = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  flexFlow: 'row nowrap',

  '&  li': {
    padding: '18px 10px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
      fontWeight: 'bold',
    },
  },

  '@bp2': {
    flexFlow: 'column nowrap',
    backgroundColor: '$secondary',
    position: 'fixed',
    top: '0',
    right: '0',
    height: '100vh',
    width: '300px',
    paddingTop: '3.5rem',
    transition: 'all 0.3s ease-in-out',
    zIndex: 98,

    '&  li': {
      color: '#fff',
      fontSize: '1.4rem',
      textAlign: 'center',
      transition: 'all 0.2s ease-in-out',

      '&:hover': {
        backgroundColor: '$graySecondary',
      },
    },

    '&.opened': {
      transform: 'translateX(0)',
    },
    '&.closed': {
      transform: 'translateX(100%)',
    },
  },
});

type RightNavProps = {
  open: 'closed' | 'opened';
};

const RightNav: React.FC<RightNavProps> = ({ open }) => {
  return (
    <Ul className={open}>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
    </Ul>
  );
};

export default RightNav;
