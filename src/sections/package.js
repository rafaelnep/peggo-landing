/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import PriceCard from 'components/price-card';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import PatternBG from 'assets/patternBG.png';

const packages = [
  {
    name: 'Por distância',
    description: 'Para poucos pedidos',
    buttonText: 'Baixe o app',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Número ilimitado de pedidos. Faça quantos quiser, em qualquer dia.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'Todas as funcionalidades disponíveis pelo aplicativo para Android e iOS.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Cálculo de preço em tempo real, enquanto informa origem e destino.',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Plano de cobrança personalizado, de acordo com a demanda de entregas.',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Pagamento por fatura e valor fixo por entrega, facilitando a contabilidade.',
        isAvailable: false,
      },
    ],
  },
  {
    header: 'Para empresas',
    name: 'Por volume',
    description: 'Para entregas frequentes',
    priceWithUnit: 'R$ 6,00',
    buttonText: 'Comece agora',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Número ilimitado de pedidos. Faça quantos quiser, em qualquer dia.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'Todas as funcionalidades disponíveis pelo aplicativo para Android e iOS.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Cálculo de preço em tempo real, enquanto informa origem e destino.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Plano de cobrança personalizado, de acordo com a demanda de entregas.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Pagamento por fatura e valor fixo por entrega, facilitando a contabilidade.',
        isAvailable: true,
      },
    ],
  },
];
export default function Package() {
  return (
    <section id="pricing" sx={styles.pricing}>
      <Container>
        <SectionHeader
          title="Para pedidos esporádicos ou frequentes"
          slogan="Cobrança dinâmica"
          isWhite={true}
        />
        <Flex
          sx={{
            justifyContent: 'center',
            flexWrap: ['wrap', null, null, 'nowrap'],
          }}
        >
          {packages.map((packageData) => (
            <PriceCard data={packageData} key={packageData.name} />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  pricing: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    py: [8, null, 9, null, null, 10],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      background:
        'linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)',
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
};
