import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectLanguage from './selectLanguage';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-book--${obj.firebaseKey}` : 'submit-book'}" class="mb-4">
      <div class="form-group">
        <label for="title">Vocabulary Word</label>
        <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Vocabulary Word" value="${obj.vocabulary_word || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="Vocab Definition" id="description" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <div class="form-group" id="select-language">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="sale" ${obj.favorite ? 'checked' : ''}>
        <label class="form-check-label" for="sale">Favorite?</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit Vocabulary Word
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectLanguage(`${obj.language_id || ''}`);
};

export default addVocabForm;
