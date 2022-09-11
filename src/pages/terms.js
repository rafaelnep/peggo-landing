import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import KeyFeature from 'sections/key-feature';
import CoreFeature from 'sections/core-feature';
import Feature from 'sections/feature';
import PartnerSection from 'sections/partner';
import WorkFlow from 'sections/workflow';
import TestimonialCard from 'sections/testimonial';
import SecurePayment from 'sections/secure-payment';
import Package from 'sections/package';
import Faq from 'sections/faq';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Peggo - Logística Inteligente" />
          
          <div type="sub" class="style__Text-sc-dr93wq-2 kckdHn">
          <p>O presente Aviso de Privacidade se destina aos usuários do site, aplicativo e outras propriedades eletrônicas (“Plataforma”), disponibilizadas pela Peggo Tecnologia Ltda. e suas empresas afiliadas (“Peggo”), e aos Tomadores, Embarcadores, Clientes de Embarcadores, Destinatários Finais, Entregadores e seus respectivos representantes legais, empregados, prepostos e/ou agentes, conforme aplicável.</p>
          <p>Para as finalidades desse Aviso de Privacidade, os usuários da Plataforma, em conjunto com os Tomadores, Embarcadores, Clientes de Embarcadores, Destinatários Finais, Entregadores e seus respectivos representantes legais, empregados, prepostos e/ou agentes, são definidos como “Clientes”.</p>
          <p>Através desse Aviso de Privacidade, os Clientes são informados:</p>
          <ol>
            <li>i. Sobre quais dados pessoais são tratados pela Peggo;</li>
            <li>ii. Para quais finalidades e por quanto tempo os dados pessoais são tratados pela Peggo;</li>
            <li>iii. Com quem os dados pessoais podem ser compartilhados;</li>
            <li>iv. Quais são os direitos dos Clientes em relação ao tratamento de seus dados pessoais;</li>
            <li>v. Sobre o canal a ser utilizado pelos Clientes para o exercício de seus direitos de titulares de dados pessoais.</li>
          </ol>
          <p>Outras políticas, notificações e informações poderão ser informadas aos Clientes em relação às atividades de tratamento com seus dados pessoais.</p>
          <p>De maneira geral, a Peggo é o controlador dos dados pessoais e toma as decisões de tratamento de dados pessoais nos termos do presente Aviso de Privacidade. No caso do Cliente do Embarcador, a Peggo é tanto o controlador de dados pessoais quando toma decisões de tratamento para as finalidades de negócio indicadas abaixo, como também desempenha o papel de operador dos dados pessoais coletados pelo Embarcador no que se refere à execução da entrega ao Cliente do Embarcador. O Embarcador é responsável por indicar ao Cliente do Embarcador o fato de que a Peggo é um controlador de dados pessoais.</p>
          </div>

        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
