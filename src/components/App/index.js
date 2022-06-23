// == Import
import './styles.scss';
import Header from '../Header';
import Main from '../Main';
import Section from '../Section';
import Skills from '../Skills';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Section />
    <Skills />
  </div>
);

// == Export
export default App;
