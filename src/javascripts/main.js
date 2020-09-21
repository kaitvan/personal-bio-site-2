import '../styles/main.scss';
import Data from './helpers/projectData';
import Cards from './components/projectCards';

const init = () => {
  Cards.createProjectCards(Data.getProjectData());
};

init();
