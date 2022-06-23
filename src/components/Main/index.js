import './main.scss';
import { Instagram, LinkedIn } from '@material-ui/icons';

const Main = () => (
  <div className="main">
    <div className="main__container">
      <div className="main__content">
        <div className="text">
          <p>Bonjour à tous</p>
          <h1>François Boudin</h1>
          <p>Developpeur Junior</p>
          <div className="icons">
            <a href="https://www.instagram.com/patte_molle_/">
              <Instagram className="icon" />
            </a>
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
);

export default Main;
