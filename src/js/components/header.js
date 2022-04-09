class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/src/views/profile.html">Profile</a>
              </li>
              <li class = "nav-item">
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">
              Login
            </button>
              </li>
            </ul>
          </div>
          
        </div>
        <!-- Modal -->
<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login or Create an Account</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <input type="Email" class="form-control marginInput" id="email" placeholder="Email">
      <input type="password" class="form-control marginInput" id="password" placeholder="password">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Login</button>
      </div>
    </div>
  </div>
</div>
      </nav>`;
  }
}

customElements.define("header-component", Header);
