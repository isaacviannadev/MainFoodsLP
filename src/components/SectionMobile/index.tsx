import { styled } from '../../../stitches.config';

const WelcomeMobile = styled('section', {
  display: 'none',
  height: 'fit-content',

  '@bp2': {
    display: 'block',
    width: '100%',
    maxWidth: '1200px',
    gap: '10px',
  },

  '& .welcome': {
    fontWeight: '600',
    marginBottom: '10px',
  },
});

const SectionMobile = () => {
  return (
    <>
      <WelcomeMobile>
        <p className='welcome'>Bem-vindo(a) ao Main Foods Market</p>

        <p className='description'>
          Chegamos para proporcionar a melhor experiência ao fazer suas compras!
          Mais conforto, os melhores produtos e o atendimento que você merece em
          um só lugar. Um novo conceito, o seu novo mercado!
        </p>
      </WelcomeMobile>
    </>
  );
};

export default SectionMobile;
