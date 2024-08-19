import React, {useState, useEffect } from 'react';
import Slider from 'react-slick';
import './css/homePage.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './css/privacy.css';
import './css/Faq.css';
import { Link } from 'react-router-dom';
import bannerImage from './assets/banner1.jpg';
import bannerImage2 from './assets/banner2.jpg';
import bannerImage3 from './assets/banner3.jpg';
import logoImg from './assets/logoPrincipal.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaInstagram, FaFacebookF, FaClock, FaMapMarkerAlt, FaPhoneAlt, FaCar, FaGasPump, FaUsers, FaWhatsapp, FaCheck, FaDollarSign, FaThumbsUp, FaMapMarkedAlt, FaCalendarCheck, FaMoneyBillWave, FaLinkedin, FaEnvelope, FaQuestion } from 'react-icons/fa';
import logoAut from './assets/logo.svg';
import logoCons from './assets/LogoConsorcio.png';
import cars from './assets/cars_image.jpg';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <h3 onClick={toggleOpen} className="faq-question">
        {question}
        <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} faq-icon`}></i>
      </h3>
      <div className="faq-answer" style={{ maxHeight: isOpen ? '300px' : '0' }}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const HomePage = () => {
  const carros = [
    {
      id: 1,
      marca: 'Renault',
      modelo: 'Kwid',
      tipo: 'Suv Compacto',
      portas: '5 portas',
      capacidade: 5,
      combustivel: 'Flex',
      precoDiaria: 180.00,
      imagem: cars,
    },
    {
      id: 2,
      marca: 'Volkswagen',
      modelo: 'Polo',
      tipo: 'Suv Compacto',
      portas: '5 portas',
      capacidade: 5,
      combustivel: 'Flex',
      precoDiaria: 200.00,
      imagem: cars,
    },
    {
      id: 3,
      marca: 'Volkswagen',
      modelo: 'Virtus',
      tipo: 'Sedan',
      portas: '5 portas',
      capacidade: 5,
      combustivel: 'Flex',
      precoDiaria: 250.00,
      imagem: cars,
    }, {
      id: 3,
      marca: 'Volkswagen',
      modelo: 'T-Cross',
      tipo: 'Suv',
      portas: '5 portas',
      capacidade: 5,
      combustivel: 'Flex',
      precoDiaria: 270.00,
      imagem: cars,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,  
  };
  const settings_info = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Para dispositivos menores
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    ReactGA.initialize('');
    ReactGA.pageview(window.location.pathname + window.location.search, null, document.referrer);

    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -20.5457488178805, lng: -47.42482845873358 },
        zoom: 15,
      });

      new window.google.maps.Marker({
        position: { lat: -20.5457488178805, lng: -47.42482845873358 },
        map,
        title: 'Francauto Locadora',
      });
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  return (
    <div className="home-page">
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#">
            <img src={logoImg} alt="Logo Francauto" className="header-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#destaques">Destaques</Nav.Link>
              <Nav.Link href="#carros">Carros</Nav.Link>
              <Nav.Link href="#contato">Contato</Nav.Link>
              <Nav.Link href="#faq-section">Duvidas Frequentes</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="banner-container">
        <Slider {...settings}>
          <div>
            <img src={bannerImage} alt="Banner 1" className="banner-img" />
          </div>
          <div>
            <img src={bannerImage2} alt="Banner 2" className="banner-img" />
          </div>
          <div>
            <img src={bannerImage3} alt="Banner 3" className="banner-img" />
          </div>
        </Slider>
      </div>
      <div className="vantagens-aluguel">
        <h2>Vantagens de Alugar um Carro</h2>
        <div className="row">
          <div className="col-md-6">
            <img src={cars} alt="Vantagens de Alugar um Carro" className="vantagens-img" />
          </div>
          <div className="col-md-6">
            <ul>
              <li><FaCheck /> Flexibilidade de escolha entre diferentes modelos de veículos.</li>
              <li><FaDollarSign /> Economia em manutenção e despesas com seguros.</li>
              <li><FaThumbsUp /> Conforto e conveniência para viagens e passeios.</li>
              <li><FaCalendarCheck /> Possibilidade de alugar conforme a necessidade, sem compromisso de longo prazo.</li>
              <li><FaMapMarkedAlt /> Ideal para viagens e deslocamentos temporários.</li>
            </ul>
          </div>
        </div>
      </div>
       
      <div className="informacoes">
        <h2>Por que escolher a Francauto Locadora?</h2>
        <Slider {...settings_info}>
          <div className="por-que-item">
            <FaCheck />
            <p>Veículos modernos e bem mantidos</p>
          </div>
          <div className="por-que-item">
            <FaDollarSign />
            <p>Preços acessíveis e transparentes</p>
          </div>
          <div id='destaques' className="por-que-item">
            <FaThumbsUp />
            <p>Atendimento ao cliente dedicado</p>
          </div>
          <div className="por-que-item">
            <FaCalendarCheck />
            <p>Processo de reserva fácil e rápido</p>
          </div>
          <div className="por-que-item">
            <FaMapMarkedAlt />
            <p>Localização conveniente e acessível</p>
          </div>
        </Slider>
      </div>
    );

      <div className="destaques">
        <h2>Destaques</h2>
        <p>Na Francauto Locadora, oferecemos uma experiência única de aluguel de veículos. Confira algumas de nossas vantagens:</p>
        <div className="destaque-item">
          <FaMoneyBillWave /> <strong>Preço Unico:</strong> Conheça os melhores preços da região.
        </div>
        <div className="destaque-item">
          <FaGasPump /> <strong>Consumo Eficiente:</strong> Veículos com baixa emissão e alta eficiência de combustível.
        </div>
        <div className="destaque-item" id="contato">
          <FaUsers /> <strong>Atendimento Personalizado:</strong> Nossa equipe está pronta para ajudar você a escolher o veículo ideal.
        </div>
      </div>
      <div className="locadora-info">
        <h1>Francauto Locadora</h1>
        <p>Encontre o veículo perfeito para suas necessidades com a Francauto Locadora. Oferecemos preços imbatíveis e um atendimento excepcional.</p>
        <div className="horarios">
          <p><FaClock /> <strong> Horário de Funcionamento:</strong></p>
          <p>Segunda a Sexta: 08:00 às 18:00</p>
          <p id="carros">Sábados: 09:00 às 12:00</p>
          <p><FaMapMarkerAlt /> Avenida Severino T.Meireles, 1660 - Distrito Industrial I</p>
          <p><FaPhoneAlt /> (16) 99966-1580</p>
          <p><FaPhoneAlt /> (16) 3711-5034</p>
          <p><FaEnvelope/> francautolocadora@gmail.com </p> 
        </div>
      </div>
      <div className="car-list">
        {carros.map((carro) => (
          <div key={carro.id} className="car-card">
            <img src={carro.imagem} alt={`${carro.marca} ${carro.modelo}`} className="car-image" />
            <div className="car-info">
              <h2>{carro.marca} {carro.modelo}</h2>
              <p>{carro.tipo}</p>
              <div className="car-details">
                <span><FaCar /> {carro.portas}</span><br />
                <span><FaGasPump /> {carro.combustivel}</span><br />
                <span><FaUsers /> {carro.capacidade} pessoas</span>
              </div>
              <p className="car-price">A partir de R$ {carro.precoDiaria.toFixed(2)} por dia</p>
              <a
                href={`https://api.whatsapp.com/send?phone=+5516999661580&text=Olá%2C%20gostaria%20de%20alugar%20um%20${carro.marca}%20${carro.modelo}%20com%20a%20Francauto%20Locadora.`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
              >
                <FaWhatsapp /> Consulte Disponibilidade
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="conheca">
        <h2>Conheça também</h2>
        <div className="row">
          <div className="col-md-6 d-flex flex-column align-items-center">
            <a href="https://www.francauto.com.br/" target="_blank" rel="noopener noreferrer">
              <img src={logoAut} alt="Francauto Automoveis" className="conheca-img" /><br/>
              <span className="conheca-text">Francauto Automoveis</span>
            </a>
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center">
            <a href="https://www.francautoconsorcio.com.br/?_ga=2.33647969.1107436243.1663268555-675625438.1663268555" target="_blank" rel="noopener noreferrer">
              <img src={logoCons} alt="Francauto Consorcio" className="conheca-img" /> <br/>
              <span className="conheca-text">Francauto Consorcio</span>
            </a>
          </div>
        </div>
      </div>
      <div className="map-container">
        <h2>Nosso Endereço</h2>
        <div id="map"></div>
      </div>

      <div id='faq-section'  className="faq-section">
<h2 > Dúvidas Frequentes <FaQuestion/></h2>
<FAQItem question="O veículo já é entregue abastecido?" answer="Sim, o veículo já entregue de tanque cheio, e devolvido na mesma condição." />
<FAQItem question="O veículo já vem com o Sem Parar?" answer="Não, o cliente faz o cadastro da tag em uma loja conveniada." />
<FAQItem question="Consigo devolver o veículo em outra cidade?" answer="Não, nossa agência é somente em Franca – SP." />
<FAQItem question="Como é feito o caução do veículo?" answer="O caução é feito no cartão de crédito do contratante do veículo, ou por pix." />
<FAQItem question="Posso colocar mais de um condutor?" answer="Sim, desde que atenda aos requisitos sendo maior de 21 anos e CNH por mais de 2 anos, e mediante ao pagamento da tarifa de condutor adicional." />
<FAQItem question="O veículo pode ser utilizado em aplicativos de mobilidade?" answer="Sim, nossos planos vão de acordo com a necessidade do cliente, seja para uso pessoal ou trabalho." />
<FAQItem question="Posso atravessar as fronteiras do país?" answer="Não, é proibido o uso do veículo fora do território nacional." />
<FAQItem question="O que acontece se eu exceder a franquia de KM contratada no plano mensal?" answer="Será cobrado o valor de KM excedente de acordo com contrato de locação." />
< FAQItem  question="Preciso pagar algum valor em caso de sinistro?" answer="Sim, o valor de franquia vai de acordo com a categoria do veículo, e fica de total responsabilidade do cliente o pagamento da mesma, ou quaisquer danos que houver no veículo."  />
</div>


      <footer className="footer">
        <p>© 2024 Grupo Francauto - Todos os direitos reservados.</p>
        <Link to="/privacy-policy" className="privacy-link">Termos de Privacidade</Link>
        <div className="social-icons">
          <a href="https://www.facebook.com/francautolocadora1?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/francautolocadora/" target="_blank" rel="noopener noreferrer" className="social-icon">
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
}

export default HomePage;
