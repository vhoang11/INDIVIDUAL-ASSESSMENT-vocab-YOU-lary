import { getFavoriteLanguage, getLanguage } from '../../api/languageData';
import { favoriteVocab, getVocab } from '../../api/vocabData';
import { emptyLanguages, showLanguages } from '../../pages/language';
import { emptyVocab, showVocab } from '../../pages/vocab';
import { signOut } from '../../utils/auth';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // TODO: FAVORITE VOCAB
  document.querySelector('#starred').addEventListener('click', () => {
    favoriteVocab().then(showVocab);
  });

  // TODO: ALL VOCAB
  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab().then((vocabArray) => {
      if (vocabArray.length) {
        showVocab(vocabArray);
      } else {
        emptyVocab();
      }
    });
  });

  // FIXME: STUDENTS Create an event listener for the Authors
  // 1. When clicks the authors link, make a call to firebase to get all authors
  // 2. Convert the response to an array because that is what the makeAuthors function is expecting
  // 3. If the array is empty because there are no authors, make sure to use the emptyAuthor function
  document.querySelector('#authors').addEventListener('click', () => {
    getLanguage().then((languageArray) => {
      if (languageArray.length) {
        showLanguages(languageArray);
      } else {
        emptyLanguages();
      }
    });
  });
  // FAVORITE LANGUAGES
  document.querySelector('#favorite-authors').addEventListener('click', () => {
    getFavoriteLanguage().then(showLanguages);
  });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();

    // WHEN T PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      showLanguages(searchValue);
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE

      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
