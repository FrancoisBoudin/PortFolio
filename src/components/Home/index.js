import './home.scss';
import MediaQuery from 'react-responsive';

const Home = () => (
  <div className="home-page" id="home">
    <MediaQuery minWidth={600}>
      <div className="welcome-div">
        <h1 className="welcome-title">
          <span>W</span>
          <span>E</span>
          <span>L</span>
          <span>C</span>
          <span>O</span>
          <span>M</span>
          <span>E</span>
        </h1>
        <a href="#header">
          <img src="https://cdn.discordapp.com/attachments/518594672122134538/989047978062913567/fleche-vers-le-bas.png" alt="fleche-bas" />
        </a>
      </div>
      <div className="header" id="header">
        <h1 className="name">Boudin François</h1>
        <p className="work">Développeur Frontend</p>
        <div className="link">
          <a href="#presentation">présentation</a>
          <a href="#competences">competences</a>
          <a href="#formation">formation</a>
        </div>

      </div>
      <div className="presentation" id="presentation">
        <h2 className="title-presentation">PRESENTATION</h2>
        <p className="text-presentation">
          Je vis à Scionzier en Haute-Savoie et j'ai 30 ans .<br />
          j'ai fait pas mal de boulot, menuisier, soudeur, contrôleur qualité et
          applicateur routier.<br />J'ai monté les échelons dans ce dernier
          jusqu'à devenir conducteur de travaux pour Signalisation 44 à Nantes.<br />
          Néanmoins suite à mon licenciement économique, je me suis demandé qu'est-ce que
          je voulais VRAIMENT faire.
          Passionné par l'informatique depuis tout petit, je décide donc tout naturellement de faire
          une formation de Développeur Web chez <a className="oclock" href="https://oclock.io/?utm_source=google&utm_medium=cpc&utm_campaign=Brand&adgroupname=Oclock&keyword=oclock&gclid=CjwKCAjwqauVBhBGEiwAXOepkRjc4McH2McVnU_uvXkyqKK4epZ-YbWXNKmQREATbqpT01c1d19PyxoCPEkQAvD_BwE">O'clock</a>.<br />
          Généralement, les gens me décrivent comme quelqu'un de bonne humeur, sérieux, rigoureux et
          sociable.
        </p>
      </div>
      <div className="skill" id="competences">
        <h2 className="title-skill">COMPETENCES</h2>
        <div className="pictures-skills">
          <img src="https://cdn.discordapp.com/attachments/518594672122134538/988165434543067146/html-51.png" alt="logo-html" />
          <img src="https://cdn.discordapp.com/attachments/518594672122134538/988165449890037770/css-31.png" alt="logo-CSS" />
          <img src="https://cdn.discordapp.com/attachments/518594672122134538/986918720435793980/js.png" alt="logo-Javascript" />
          <img src="https://cdn.discordapp.com/attachments/518594672122134538/986918720700047400/react.png" alt="logo-react" />
        </div>
        <div className="pictures-skills-under">
          <img src="https://cdn.discordapp.com/attachments/518594672122134538/988157402656423986/github.png" alt="logo-github" />
          <img src="https://cdn.discordapp.com/attachments/518594672122134538/988157756001361970/mysql.png" alt="logo-mysql" />
          <img src="https://cdn.discordapp.com/attachments/518594672122134538/988165465576710164/php.png" alt="logo-php" />
        </div>
      </div>
      <div className="formation" id="formation">
        <h2 className="title-formation">MA FORMATION CHEZ O'CLOCK</h2>
        <p className="text-formation">
          Nous avons commencer par découvrir le HTML, CSS dans un premier temps, apprit a ce
          familiariser avec l'environnement Linux et la ligne de commande et GIT.<br /><br />
          Vient au tour de la programmation avec PHP, Javascript, et la découverte du DOM.<br />
          Suite à ça, nous nous sommes mis à la Programmation Orienté Object, le responsive, et SQL
          pour la découverte des BDD, le système MVC, du SEO, et du back office.<br />
          Ajax, les API, et le CMS WordPress ont conclu les toutes dernières semaines avant la
          spécialisation.<br /><br />
          Ensuite, tout comme Airbnb, Uber ou Netflix, J'ai choisi REACT.<br />
          Pendant la spécialisation, j'ai découvert REDUX, YARN, AXIOS, REACT-ROUTER-DOM, les HOOKS,
          utiliser un REDUCER.<br /> <br />
          Pour finir nous avons dû créé de A à Z un projet, avec trois de mes camarades, nous avons
          choisi de créer un TMS pour une société de transports.<br />
          J'ai particulièrement aimé travailler en équipe, pendant ces trois semaines de code
          j'avais
          le rôle de Product Owner, et j'ai codé coté front en REACT, bien entendu.<br />
          J'ai aimé aussi le fait de me confronter à des problèmes, souvent, mais de trouver
          la solution et pouvoir continuer à avancer avec la satisfaction que cela procure.
        </p>
        <div className="picture-formation">
          <img src="https://cdn.discordapp.com/attachments/518594672122134538/988326542243430410/unknown.png" alt="" />
          <img src="https://cdn.discordapp.com/attachments/518594672122134538/988327034629546024/unknown.png" alt="" />
        </div>
      </div>
      <div className="footer">
        <a href="#home">
          <img src="https://cdn.discordapp.com/attachments/518594672122134538/988177037107802152/chevron-haut.png" alt="remonter en haut de la page" />
        </a>
      </div>
    </MediaQuery>
  </div>
);

export default Home;
