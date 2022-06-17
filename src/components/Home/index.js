import './home.scss';

const Home = () => (
  <div className="home-page">
    <div className="header">
      <h1 className="title">Boudin François</h1>
      <p className="under-title">Développeur Junior Frontend React</p>
    </div>
    <div className="presentation">
      <h2 className="title-secondary">PRESENTATION</h2>
      <p className="paragraphe">
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
    <div className="div-skill">
      <h2 className="title-secondary-skill">SKILLS</h2>
      <div className="pictures-skills">
        <img className="html" data-text="HTML" src="https://cdn.discordapp.com/attachments/518594672122134538/986918721006207006/html-5.png" alt="logo-html" />
        <img data-text="CSS" src="https://cdn.discordapp.com/attachments/518594672122134538/986918747874922526/css-3.png" alt="" />
        <img data-text="Javascript" src="https://cdn.discordapp.com/attachments/518594672122134538/986918720435793980/js.png" alt="" />
        <img data-text="React.js" src="https://cdn.discordapp.com/attachments/518594672122134538/986918720700047400/react.png" alt="" />
      </div>
    </div>
  </div>
);

export default Home;
