import './home.scss';

const Home = () => (
  <div className="home-page" id="home">
    <div className="header">
      <h1 className="name">Boudin François</h1>
      <p className="work">Développeur Frontend</p>
    </div>
    <div className="presentation">
      <h2 className="title-presentation">PRESENTATION</h2>
      <p className="text-presentation">
        Je vis à Scionzier en Haute-Savoie où je recherche un poste de Développeur Web
        Frontend.<br />
        Passionné par l'informatique depuis tout petit, je décide donc de faire
        une formation de Développeur Web chez <a className="oclock" href="https://oclock.io/?utm_source=google&utm_medium=cpc&utm_campaign=Brand&adgroupname=Oclock&keyword=oclock&gclid=CjwKCAjwqauVBhBGEiwAXOepkRjc4McH2McVnU_uvXkyqKK4epZ-YbWXNKmQREATbqpT01c1d19PyxoCPEkQAvD_BwE">O'clock</a>.<br />
        Je découvre donc le HTML, CSS dans un premier temps, me familiarise avec Linux et
        la ligne de commande et GIT.<br />
        Vient au tour de la programmation avec PHP, Javascript, et la découverte du DOM.<br />
        Suite à ça, nous nous sommes mis à la Programmation Orienté Object, le responsive, et SQL
        pour la découverte des BDD, le système MVC, du SEO, et du back office.<br />
        Ajax, les API, et les CMS ont conclu la toute dernière semaine avant la
        spécialisation.<br />
        Et pour finir, tout comme Airbnb, Uber ou Netflix, J'ai choisi REACT.
      </p>
    </div>
    <div className="skill">
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
    <div className="footer">
      <a href="#home">
        <img src="https://cdn.discordapp.com/attachments/518594672122134538/988177037107802152/chevron-haut.png" alt="remonter en haut de la page" />
      </a>
    </div>
  </div>
);

export default Home;
