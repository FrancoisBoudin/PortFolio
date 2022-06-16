import './home.scss';

const Home = () => (
  <div className="home-page">
    <div className="header">
      <h1 className="title">Boudin François</h1>
      <p className="under-title">Développeur Frontend React</p>
    </div>
    <div className="div-skill">
      <h2 className="title-skill">SKILLS</h2>
      <div className="pictures-skills">
        <img className="html" data-text="HTML" src="https://cdn.discordapp.com/attachments/518594672122134538/986918721006207006/html-5.png" alt="logo-html" />
        <img data-text="CSS" src="https://cdn.discordapp.com/attachments/518594672122134538/986918747874922526/css-3.png" alt="" />
        <img data-text="Javascript" src="https://cdn.discordapp.com/attachments/518594672122134538/986918720435793980/js.png" alt="" />
        <img data-text="React.js" src="https://cdn.discordapp.com/attachments/518594672122134538/986918720700047400/react.png" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  </div>
);

export default Home;
