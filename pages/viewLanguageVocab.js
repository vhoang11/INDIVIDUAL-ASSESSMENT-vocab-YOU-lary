import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const viewLanguageVocab = (obj) => {
  clearDom();

  let domString = `
  <div class="mt-5 d-flex flex-wrap">
  <div class="d-flex flex-column">
   <h1> ${obj.language} ${obj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h1>
  </div>;`;

  obj.vocabArray.map((item) => {
    domString += `<div class="text-white ms-5 details">
      <h5>${item.vocabulary_word}  ${item.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
      <p>${item.definition || ''}</p>
      <hr>
      <p>${item.favorite ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i>Favorite</span>
        ${item.date}` : `${item.date}`}</p>
       </div>
       </div>`;
    return renderToDOM('#view', domString);
  });
};

export default viewLanguageVocab;
