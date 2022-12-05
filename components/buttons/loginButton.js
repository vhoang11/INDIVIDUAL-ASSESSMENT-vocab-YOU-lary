import { signIn } from '../../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<h1 id="welcome">Welcome to Vocab-YOU-lary!</h1><button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>';
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
