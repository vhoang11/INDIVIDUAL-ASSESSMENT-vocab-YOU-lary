import { getLanguage } from '../../api/languageData';
import renderToDOM from '../../utils/renderToDom';

const selectLanguage = (languageId, user) => {
  let domString = `<label for="author">Select a Language</label>
    <select class="form-control" id="author_id" required>
    <option value="">Select an Author</option>`;

  getLanguage(user).then((languageArray) => {
    languageArray.forEach((language) => {
      domString += `
          <option 
            value="${language.firebaseKey}" 
            ${languageId === language.firebaseKey ? 'selected' : ''}>
              ${language.first_name} ${language.last_name}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-author', domString);
  });
};

export default selectLanguage;
