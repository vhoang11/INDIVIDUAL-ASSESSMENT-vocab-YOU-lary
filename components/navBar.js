import renderToDOM from '../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-secondary mb-5" id="navbar-color">
    <div class="container-fluid">
      <img src="https://st2.depositphotos.com/7752738/11936/v/450/depositphotos_119369736-stock-illustration-learn-abc-letters-vector-icon.jpg" class="icon"
        <a class="navbar-brand title" href="#">Vocabulary Wiz</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="all-vocab">
                All Vocabulary <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="starred">Favorite Vocab</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="languages">Languages</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#" id="fav-languages">Favorite Languages</a>
          </li>
            <li>
            <input
              class="form-control mr-sm-2"
              id="search"
              placeholder="Search Vocab"
              aria-label="Search"
            />
            </li>
          </ul>
          <span class="navbar-text">
            <div id="cart-button"></div>
            <div id="logout-button"></div>
          </span>
        </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
