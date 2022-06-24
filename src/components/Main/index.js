import './main.scss';
import { Close, MenuOutlined, LinkedIn } from '@material-ui/icons';
import { useState } from 'react';

const Main = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="portfolio">
      <div className="header">
        <div className="header__logo">
          <h1>FB</h1>
        </div>
        <nav className={active ? 'navbar active' : 'navbar'}>
          <ul>
            <div className="closed">
              <Close className="close" onClick={showMenu} />
            </div>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#presentation">Présentation</a>
            </li>
            <li>
              <a href="#competences">Compétences</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="changer">
          <MenuOutlined className="menu" onClick={showMenu} />
        </div>
      </div>
      <div className="main" id="home">
        <div className="main__container">
          <div className="main__content">
            <div className="text">
              <p>Bonjour à tous</p>
              <h1>François Boudin</h1>
              <p>Developpeur Junior</p>
              <div className="icons">
                <a href="https://www.linkedin.com/in/françois-boudin-77078a226/">
                  <LinkedIn className="icon" src="https://www.intagram.com/patte_molle/" />
                </a>
              </div>
            </div>
            <div className="main__img">
              <img src="https://sdk.bitmoji.com/render/panel/10207747-100107024734_1-s5-v1.png?transparent=1&palette=1&scale=2" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="section" id="presentation">
        <div className="section__container">
          <div className="section__content">
            <h1>Présentation</h1>
            <p>
              Je m'appelle François Boudin et j'ai 30 ans.<br />
              Menuisier, Soudeur, Applicateur dans le marquage au sol ou encore conducteur
              de travaux, rien ne laisser présager qu'un jour je puisse devenir Développeur Web,
              et pourtant, ayant toujours était faciné par les métiers numériques et suite à
              un licenciement économique, j'y ai vu l'occasion de faire une formation<br />
              J'ai donc suivi une formation de Développeur Web FullStack avec une spécialisation
              Réact chez <a href="https://oclock.io/formations/developpeur-web">O'clock.</a> <br />
              Je suis quelqu'un de sérieux, respectueux, et toujours de bonne humeur.<br />
              J'ai envie d'apprendre et d'évoluer au sein d'une entreprise qui m'aura
              donner ma chance et qui m'aura donné l'opportunité de vivre de ma passion.
            </p>
          </div>
        </div>
      </div>
      <div className="skills" id="competences">
        <div className="skills__container">
          <div className="skills__img">
            <img src="https://cdn.discordapp.com/attachments/518594672122134538/989440810758074419/any_questions.png" alt="" />
          </div>
          <div className="skills__content">
            <h1>Mes Compétences</h1>
            <p>HTML, CSS, SCSS, JSX</p>
            <p>JS, REACT</p>
            <p>PHP, MySQL, ADMINER, POO</p>
            <p>GitHub, COMPOSER, MVC, SEO</p>
            <p>Bootstrap, Material-ui, API</p>
            <p>REDUX, REACT-ROUTER-DOM, REDUCER, STATE, HOOKS </p>
            <p>Management, Gestion, Communication</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
