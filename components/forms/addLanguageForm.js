import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addLanguageForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="submit-author ${obj.firebaseKey ? `update-author--${obj.firebaseKey}` : 'submit-author'}" class="mb-4">
      <div class="form-group">
        <label for="image">Language</label>
        <input type="text" class="form-control" id="first_name" placeholder="Language" value="${obj.language || ''}" required>
      </div>
      <div class="form-group">
      <label for="description">Description</label>
      <textarea class="form-control" placeholder="Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <div class="form-check">
      <input type="checkbox" class="form-check-input" id="favoriteLanguage" ${obj.favorite ? 'checked' : ''}>
      <label class="form-check-label" for="favorite">Favorite?</label>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Language</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addLanguageForm;
