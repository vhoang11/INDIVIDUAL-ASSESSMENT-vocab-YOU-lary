import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectLanguage from './selectLanguage';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-book--${obj.firebaseKey}` : 'submit-book'}" class="mb-4">
    <div class="form-group">
    <label for="image">First Name</label>
    <input type="text" class="form-control" id="vocab-first_name" placeholder="First Name" value="${obj.first_name || ''}" required>
    </div>
    <div class="form-group">
      <label for="image">Last Name</label>
      <input type="text" class="form-control" id="vocab-last_name" placeholder="Last Name" value="${obj.last_name || ''}" required>
    </div>  
    <div class="form-group">
        <label for="title">Vocabulary Word</label>
        <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Vocabulary Word" value="${obj.vocabulary_word || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="Vocab Definition" id="description" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group">
      <label for="language">Language</label>
      <input type="text" class="form-control" id="language" placeholder="Language" value="${obj.language || ''}" required>
    </div> 
      <div class="form-group" id="select-language">
      </div>
      <div class="form-group">
        <label for="date">Date</label>
        <input type="date" class="form-control" id="date" aria-describedby="bookTitle" placeholder="mm/dd/yyyy" value="${obj.date || ''}" required>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="favorite" ${obj.favorite ? 'checked' : ''}>
        <label class="form-check-label" for="sale">Favorite?</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit Vocabulary Word
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectLanguage(`${obj.language_id || ''}`);
};

export default addVocabForm;
