import { deleteVocab, getSingleVocab, getVocab } from '../../api/vocabData';
import { showVocab } from '../../pages/vocab';
import addVocabForm from '../forms/addVocabForm';
import { getVocabDetails, getLanguageVocab, deleteLanguageVocabRelationship } from '../../api/mergedData';
import viewVocab from '../../pages/viewVocab';
import {
  deleteSingleLanguage, getLanguage, getSingleLanguage
} from '../../api/languageData';
import { showLanguages } from '../../pages/language';
import addLanguageForm from '../forms/addLanguageForm';
import viewLanguageVocab from '../../pages/viewLanguageVocab';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A VOCAB
    if (e.target.id.includes('delete-book')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = (e.target.id.split('--'));

        deleteVocab(firebaseKey).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A VOCAB
    if (e.target.id.includes('add-book-btn')) {
      addVocabForm({}, user.uid);
    }

    // TODO: CLICK EVENT EDITING/UPDATING A VOCAB
    if (e.target.id.includes('edit-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleVocab(firebaseKey).then((obj) => addVocabForm(obj, user));
    }
    // TODO: CLICK EVENT FOR VIEW VOCAB DETAILS
    if (e.target.id.includes('view-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getVocabDetails(firebaseKey).then(viewVocab);
    }

    // TODO: CLICK EVENT DELETING A LANGUAGE
    if (e.target.id.includes('delete-author-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = (e.target.id.split('--'));

        deleteSingleLanguage(firebaseKey).then(() => {
          getLanguage(user.uid).then(showLanguages);
        });
      }
    }
    // FIXME: ADD CLICK EVENT FOR SHOWING FORM FOR ADDING A LANGUAGE
    if (e.target.id.includes('add-author-btn')) {
      addLanguageForm();
    }

    // FIXME: ADD CLICK EVENT FOR EDITING A LANGUAGE
    if (e.target.id.includes('update-author')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleLanguage(firebaseKey).then((languageObj) => addLanguageForm(languageObj));
    }

    // TODO: CLICK EVENT FOR VIEW LANGUAGES VOCAB
    if (e.target.id.includes('view-author-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getLanguageVocab(firebaseKey).then(viewLanguageVocab);
    }

    // CLICK EVENT FOR DELETING A LANGUAGE / VOCAB
    if (e.target.id.includes('delete-author-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteLanguageVocabRelationship(firebaseKey).then(() => {
          getLanguage(user.uid).then(showLanguages);
        });
      }
    }
  });
};

export default domEvents;
