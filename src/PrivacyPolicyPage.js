import React from 'react';
import { Button } from 'react-bootstrap';
import logoLoc from './assets/logoPrincipal.png';
import {FaRegFileAlt,FaFacebookF,FaInstagram,FaLinkedin, FaUserShield, FaEnvelope, FaPhoneAlt,  FaCheckCircle } from 'react-icons/fa'; // Adicionei ícones
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/privacy.css'; 

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-policy-page">
      <header className="header d-flex align-items-center justify-content-between p-3">
        <img src={logoLoc} alt="Logo" className="header-logo" />
        <Button 
          className="home-button" 
          onClick={() => window.location.href = '/'}
        >
          Voltar para Home
        </Button>
      </header>
      <div className="main-content container mt-4">
        <h1>Política de Privacidade - Grupo Francauto</h1>
        <p className="date">DATA: 19/07/2024</p>
        <p>
          Em 2018, foi sancionada a Lei nº 13.709 (Lei Geral de Proteção de Dados - LGPD), que estabelece um conjunto de regras para coleta, tratamento, armazenamento e compartilhamento de dados pessoais.
          Inspirada na norma europeia de Proteção de Dados (GDPR – General Data Protection Regulation), a LGPD entrou em vigor em 18.09.2020 e traz inúmeros impactos no processo de manipulação de dados pessoais.
        </p>
        <p>
          Nós do Grupo Francauto estamos comprometidos com sua privacidade e a segurança de seus dados pessoais. Esta Política de Privacidade tem como objetivo:
        </p>
        <ul className="animated-list">
          <li><FaCheckCircle className="icon" /> Informar quais dados pessoais tratamos e como o fazemos.</li>
          <li><FaCheckCircle className="icon" /> Informar com quem compartilhamos os dados pessoais.</li>
          <li><FaCheckCircle className="icon" /> Explicar seus direitos em relação aos seus dados pessoais coletados e tratados por nós.</li>
          <li><FaCheckCircle className="icon" /> Explicar como protegemos sua privacidade.</li>
        </ul>
        <h2>Sobre o Encarregado de Proteção de Dados (DPO):</h2>
        <p>
          <FaUserShield /> Encarregado: Ryan Machado Marques<br />
          <FaEnvelope /> E-mail: <a href="mailto:lgpd@francauto.com.br">lgpd@francauto.com.br</a><br />
          <FaPhoneAlt /> Telefone: 16 3711-5000
        </p>
        <h2>Objetivo e Aplicação</h2>
        <p>
          Esta Política aplica-se a você, cliente interessado em adquirir nossos produtos e/ou serviços, atual ou ex-proprietário de veículos, pessoa que interage com nosso website/blog/redes sociais/aplicativos, ou demonstra interesse em nossos produtos e serviços.
          Além disso, podemos enviar comunicações comerciais e/ou promocionais para mantê-lo informado sobre nossas novidades.
        </p>
        <h2>Coleta de Dados Pessoais</h2>
        <p>
          Coletamos dados pessoais como nome, CPF, RG, endereço, telefone, e-mail, entre outros necessários para os serviços prestados pela Francauto. Também podemos coletar dados de navegação em nosso site, conforme descrito na Política de Cookies.
        </p>
        <h2>Finalidades da Coleta</h2>
        <p>
          Utilizamos dados pessoais para agendamento, emissão de nota fiscal, atendimento em garantia, pesquisas de satisfação, vendas de veículos e serviços, marketing direto, entre outras finalidades específicas de cada departamento.
        </p>
        <h2>Tempo de Retenção dos Dados</h2>
        <p>
          Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades descritas nesta Política, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
        </p>
        <h2>Segurança dos Dados</h2>
        <p>
          Adotamos medidas de segurança físicas e digitais para proteger seus dados pessoais conforme padrões reconhecidos internacionalmente. Recomendamos precauções como fechar seu navegador após o uso para proteger suas informações.
        </p>
        <h2>Compartilhamento de Dados</h2>
        <p>
          Podemos compartilhar seus dados com parceiros e prestadores de serviços que nos ajudam a oferecer nossos produtos e serviços. Sempre garantimos que o compartilhamento respeite a legislação aplicável.
        </p>
        <h2>Seus Direitos</h2>
        <p>
          Você possui direitos sobre seus dados pessoais, incluindo acesso, correção, exclusão e portabilidade. Para exercer esses direitos ou tirar dúvidas, entre em contato com nosso Encarregado (DPO) pelo e-mail lgpd@francauto.com.br.
        </p>
        <h2>Alterações na Política</h2>
        <p>
          Esta Política pode ser revisada periodicamente, refletindo a versão mais recente em nosso site. A data de atualização estará indicada no topo deste documento.
        </p>
        <h2>Responsável pelo Processamento</h2>
        <p>
          Grupo Francauto<br />
          Para questões relacionadas ao tratamento de dados pessoais, entre em contato pelo e-mail lgpd@francauto.com.br.
        </p>
      </div>
      <div className="revocation-card animate__animated animate__fadeInUp">
          <div className="card-icon">
            <FaRegFileAlt />
          </div>
          <h3 className="card-title">Gerenciar Direitos</h3>
          <p className="card-description">
            Clique aqui para acessar sua página de gerenciamento de direitos sobre os seus dados pessoais.
          </p>
          <Button 
            className="revocation-button" 
            onClick={() => window.location.href = 'https://francautolgpd.netlify.app/'}
          >
            Gerenciar Direitos
          </Button>
        </div>
      <footer className="footer">
        <p>© 2024 Grupo Francauto - Todos os direitos reservados.</p>
             <div className="social-icons">
          <a href="https://www.facebook.com/vw.francauto/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/vwfrancauto/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/francautovw/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
        </div>
        <div className="footer-info">
          <small>
            Endereço: Avenida Severino T.Meireles, 1660 - Distrito Industrial I<br />
            CNPJ: 39.712.200/0001-02<br />
            Razão Social: Francauto Locadora De Veiculos Ltda.
          </small>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicyPage;
