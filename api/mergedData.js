import { deleteSingleLanguage, getSingleLanguage } from './languageData';
import { deleteVocab, getSingleVocab, getVocabByLanguage } from './vocabData';

// for merged promises
const getVocabDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleVocab(firebaseKey).then((vocabObj) => {
    getSingleLanguage(vocabObj.language_id)
      .then((languageObj) => resolve({ ...vocabObj, languageObj }));
  }).catch(reject);
});

const getLanguageVocab = async (firebaseKey) => {
  const language = await getSingleLanguage(firebaseKey);
  const vocabArray = await getLanguageVocab(language.firebaseKey);

  return { ...language, vocabArray };
};

const deleteLanguageVocabRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getVocabByLanguage(firebaseKey).then((vocabArray) => {
    const deleteVocabPromises = vocabArray.map((vocab) => deleteVocab(vocab.firebaseKey));

    Promise.all(deleteVocabPromises).then(() => {
      deleteSingleLanguage(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export { getVocabDetails, getLanguageVocab, deleteLanguageVocabRelationship };
