import { styled } from '../../../stitches.config';

const Ul = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  flexFlow: 'row nowrap',

  '&  li': {
    color: '$primary',

    padding: '18px 10px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontWeight: '500',

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
      boxShadow: '-4px 0px 6px rgba(0, 0, 0, 0.25)',
    },
    '&.closed': {
      transform: 'translateX(100%)',
    },
  },
});

type RightNavProps = {
  open: 'closed' | 'opened';
  setOpen: (open: 'closed' | 'opened') => void;
};

const RightNav: React.FC<RightNavProps> = ({ open, setOpen }) => {
  return (
    <Ul className={open}>
      <a href='#products' onClick={() => setOpen('closed')}>
        <li>Nossos Produtos</li>
      </a>
      <a href='#cardapio' onClick={() => setOpen('closed')}>
        <li>Cardápio</li>
      </a>

      <a href='#services' onClick={() => setOpen('closed')}>
        <li>Nosso Diferencial</li>
      </a>

      <a href='#contato' onClick={() => setOpen('closed')}>
        <li>Cadastre-se</li>
      </a>
    </Ul>
  );
};

export default RightNav;
