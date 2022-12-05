import { createLanguage, getLanguage, updateLanguage } from '../../api/languageData';
import { createVocab, getVocab, updateVocab } from '../../api/vocabData';
import { showLanguages } from '../../pages/language';
import { showVocab } from '../../pages/vocab';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A VOCAB
    if (e.target.id.includes('submit-book')) {
      const payload = {
        vocabulary_word: document.querySelector('#title').value,
        first_name: document.querySelector('#vocab-first_name').value,
        last_name: document.querySelector('#vocab-last_name').value,
        definition: document.querySelector('#description').value,
        language_id: document.querySelector('#author_id').value,
        favorite: document.querySelector('#favorite').checked,
        date: document.querySelector('#date').value,
        // uid: user.uid,
      };

      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab().then(showVocab);
        });
      });
    }

    // TODO: CLICK EVENT FOR EDITING A VOCAB
    if (e.target.id.includes('update-book')) {
      const [, firebaseKey] = e.target.id.split('--');

      const payload = {
        vocabulary_word: document.querySelector('#title').value,
        first_name: document.querySelector('#vocab-first_name').value,
        last_name: document.querySelector('#vocab-last_name').value,
        definition: document.querySelector('#description').value,
        language_id: document.querySelector('#author_id').value,
        favorite: document.querySelector('#favorite').checked,
        date: document.querySelector('#date').value,
        firebaseKey,
      };

      updateVocab(payload).then(() => {
        getVocab().then(showVocab);
      });
    }

    // TODO: CLICK EVENT FOR SUBMITTING A LANGUAGE
    if (e.target.id.includes('submit-author')) {
      const languagePayload = {
        language: document.querySelector('#first_name').value,
        description: document.querySelector('#description').value,
        favorite: document.querySelector('#favorite').checked,
        // uid: user.uid,
      };

      createLanguage(languagePayload).then(({ name }) => {
        const patchLanguagePayload = { firebaseKey: name };

        updateLanguage(patchLanguagePayload).then(() => {
          getLanguage().then(showLanguages);
        });
      });
    }

    // FIXME:ADD CLICK EVENT FOR EDITING A LANGUAGE
    if (e.target.id.includes('update-author')) {
      const [, firebaseKey] = e.target.id.split('--');

      const languagePayload = {
        language: document.querySelector('#first_name').value,
        description: document.querySelector('#description').value,
        favorite: document.querySelector('#favorite').checked,
        firebaseKey,
      };

      updateLanguage(languagePayload).then(() => {
        getLanguage().then(showLanguages);
      });
    }
  });
};

export default formEvents;
