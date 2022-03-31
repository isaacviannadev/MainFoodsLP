import { useEffect, useRef, useState } from 'react';
import { styled } from '../../../stitches.config';

const itens = [
  {
    id: 0,
    name: 'Qualidade',
    bgImage: 'url("/images/main.png")',
    description: `Chegamos com a missão de trazer
muito mais que um mercado, 
trazemos pizzas, pratos executivos,
variados rótulos de vinhos e muito
mais para você e sua família.
  `,
  },
  {
    id: 1,
    name: 'Café da manhã',
    bgImage: 'url("/images/cafemanha.png") ',
    description: `Temos um CAFÉ DA MANHÃ completo para você e sua família com muito sabor e variedade, são muitas opções com diversos 
tipos de pães, sucos da fruta, laticínios, frios, bolos, ovos e muito mais!
  `,
  },
  {
    id: 2,
    name: 'Produtos Orgânicos',
    bgImage: 'url("/images/organicos.png")',
    description: `Você pode contar com muitos produtos ORGÂNICOS para o seu dia a dia, temos uma área especial para você! `,
  },
  {
    id: 3,
    name: 'Cortes especiais',
    bgImage: 'url("/images/acougue.png")',
    description: `Em nosso AÇOUGUE você vai encontrar cortes nobres e as melhores opções para o 
seu dia a dia.`,
  },
  {
    id: 4,
    name: 'Peixe fresco',
    bgImage: 'url("/images/peixe.png")',
    description: `PEIXE FRESCO todo dia! Uma seleção de frutos  do mar com camarão vg, salmão, polvo, lula, 
variados tipos de peixe, tudo com opções já porcionadas pensando em você!`,
  },
  {
    id: 5,
    name: 'Hortifruti',
    bgImage: 'url("/images/hortifruti.png")',
    description: `Aqui no nosso HORTIFRUTI você vai encontrar muita qualidade e variedade alem de opções já porcionadas para o seu dia a dia, podemos fazer do seu jeito combinando legumes e verduras à sua escolha.`,
  },
  {
    id: 6,
    name: 'Vegano',
    bgImage: 'url("/images/vegano.png")',
    description: `Você pode se deliciar com nossas opções VEGANAS, temos lasanhas, pizza, risoto, gnocchi, bruchetta e muito mais.  `,
  },
  {
    id: 7,
    name: 'Pizza',
    bgImage: 'url("/images/pizza.png")',
    description: `Nossas PIZZAS são produzidas aqui mesmo e com um processo de fermentação natural,
são varios sabores aguardando você! `,
  },
  {
    id: 8,
    name: 'Mercearia',
    bgImage: 'url("/images/mercearia.png")',
    description:
      'Na nossa MERCEARIA você encontra s eus produtos favoritos e muitos outros para você se deliciar!',
  },
  {
    id: 9,
    name: 'Laticínios',
    bgImage: 'url("/images/queijo.png")',
    description:
      'Em nosso setor de LATICÍNIOS temos uma variedade de produtos para completar e deixar ainda mais gostoso seu café da manhã, jantar especial ou o lanchinho das crianças!',
  },
  {
    id: 10,
    name: 'Adega',
    bgImage: 'url("/images/adega.png")',
    description:
      'Uma ADEGA completa com os melhores rótulos de vinho, além de licores e espumantes .',
  },
  {
    id: 11,
    name: 'Padaria',
    bgImage: 'url("/images/padaria.png")',
    description:
      'Uma PADARIA completa com muita coisa gostosa, você pode contar com pães de fermentação natural, bombas de chocolate, pães doces, pão de queijo e muitas outras opções!',
  },
];

const SectionProducts = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '80px 20px  ',
  width: '100%',
  minHeight: '600px',
  position: 'relative',
  overflow: 'hidden',

  '@bp2': {
    minHeight: '520px',
    padding: '40px 20px 20px',
  },

  '& .productsDescription': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '800px',
    height: '200px',
    backgroundColor: '#7C9338',
    borderRadius: '6px',
    gap: '10px',
    padding: '20px',

    '& h1': {
      color: '#fff',
    },
  },

  '& .productsContainer': {
    display: 'flex',
    width: '800px',
    gap: '30px',
    overflowY: 'auto',
    position: 'absolute',
    left: '40%',
    marginTop: '140px',
    height: 'fit-content',
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    scrollBehavior: 'smooth',
    padding: '0 40px',

    '@bp2': {
      width: '100%',
      left: '0',
      marginTop: '160px',
    },

    '& .productItem': {
      display: 'flex',
      height: '260px',
      width: '400px',
      flex: 'none',
      padding: '20px',
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
    },
  },

  '& .productNav': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    width: '100%',
    height: '20px',

    '& .productNavItem': {
      display: 'block',
      backgroundColor: '#FF9900',
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.3s ease-in-out',

      '&:hover': {
        boxShadow: '0px 0px 10px #FF9900',
      },

      '&.active': {
        width: '16px',
        height: '16px',
      },
    },
  },
});

const Products = () => {
  const [card, setCard] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  const handleItem = (id: number) => {
    if (carousel.current) {
      if (id < card) {
        carousel.current.scrollLeft -= 430 * (card - id);
      } else {
        carousel.current.scrollLeft += 430 * (id - card);
      }
    }

    setCard(id);
  };

  return (
    <>
      <SectionProducts>
        <div className='productsDescription'>
          <>
            <h1>{itens[card].name}</h1>
            <p>{itens[card].description}</p>
          </>
        </div>

        <div className='productsContainer' ref={carousel}>
          {itens.map((item) => {
            return (
              <div
                key={item.id}
                id={String(item.id)}
                className='productItem'
                style={{ backgroundImage: item.bgImage, borderRadius: '6px' }}
              ></div>
            );
          })}
        </div>

        <div className='productNav'>
          {itens.map((item) => {
            return (
              <div
                className={`productNavItem ${card === item.id ? 'active' : ''}`}
                key={item.id}
                onClick={() => handleItem(item.id)}
              ></div>
            );
          })}
        </div>
      </SectionProducts>
    </>
  );
};

export default Products;
