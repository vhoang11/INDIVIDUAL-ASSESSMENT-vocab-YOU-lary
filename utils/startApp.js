import domBuilder from '../components/domBuilder';
import domEvents from '../components/events/domEvents';
import formEvents from '../components/events/formEvents';
import navBar from '../components/navBar';
import logoutButton from '../components/buttons/logoutButton';
import navigationEvents from '../components/events/navigationEvents';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
};

export default startApp;
