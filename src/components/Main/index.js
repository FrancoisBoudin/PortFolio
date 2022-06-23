import './main.scss';
import { Instagram, LinkedIn } from '@material-ui/icons';

const Main = () => (
  <div className="main">
    <div className="main__container">
      <div className="main__content">
        <div className="text">
          <p>Bonjour à tous</p>
          <h1>François Boudin</h1>
          <p>Developer Junior</p>
          <div className="icons">
            <Instagram className="icon" />
            <LinkedIn className="icon" />
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
