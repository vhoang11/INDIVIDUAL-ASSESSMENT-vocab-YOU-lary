import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewVocab = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <div class="mt-5">
       <i id="edit-book-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-book--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
   </div>
   <div class="text-white ms-5 details">
     <h5>${obj.vocabulary_word} by ${obj.first_name} ${obj.last_name} ${obj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
     <p>${obj.language}</p>
     <p>${obj.definition}</p>
     <hr>
     <p>${obj.favorite ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i>Favorite</span> 
       ${obj.date}` : `${obj.date}`}</p>      
      </div>
    </div>`;

  renderToDOM('#view', domString);
};

export default viewVocab;
