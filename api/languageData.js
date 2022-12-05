import client from '../utils/client';

const endpoint = client.databaseURL;

const getLanguage = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/language.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getFavoriteLanguage = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/language.json?orderBy="favorite"&equalTo=true`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// FIXME: CREATE LANGUAGE
const createLanguage = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/language.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// FIXME: GET SINGLE LANGUAGE
const getSingleLanguage = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/language/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// FIXME: DELETE LANGUAGE
const deleteSingleLanguage = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/language/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// FIXME: UPDATE LANGUAGE
const updateLanguage = (languagePayload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/language/${languagePayload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(languagePayload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// TODO: GET A SINGLE LANGUAGES VOCAB
const getLanguagesVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="language_id"&equalTo="${firebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getLanguage,
  createLanguage,
  getSingleLanguage,
  deleteSingleLanguage,
  updateLanguage,
  getFavoriteLanguage,
  getLanguagesVocab
};
