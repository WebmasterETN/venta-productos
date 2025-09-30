class LayoutLogin extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
      <div class="container-fluid d-flex justify-content-center align-items-center login-container">
          <div class="card shadow-lg p-4">
              <div class="card-body">
                  <h2 class="card-title text-center mb-4">Iniciar Sesión</h2>
                  <form id="login-form" class="needs-validation" novalidate>
                      <div class="mb-3">
                          <label for="username" class="form-label">Usuario</label>
                          <input type="text" class="form-control" id="username" placeholder="Usuario" required minlength="3" maxlength="20">
                          <div class="invalid-feedback">
                            Por favor, introduce un nombre de usuario válido (3-20 caracteres).
                          </div>
                      </div>
                      <div class="mb-3">
                          <label for="password" class="form-label">Contraseña</label>
                          <input type="password" class="form-control" id="password" placeholder="Contraseña" required minlength="8">
                          <div class="invalid-feedback">
                            La contraseña debe tener al menos 8 caracteres.
                          </div>
                      </div>
                      <div class="d-grid gap-2">
                          <button type="submit" class="btn btn-primary">Entrar</button>                          
                          <button type="button" class="btn btn-link">¿Olvidaste tu contraseña?</button>
                      </div>
                  </form>
                  <hr>
                  <p class="text-center">¿No tienes cuenta? <a href="#">Regístrate</a></p>
              </div>
          </div>
      </div>
    `;

		this.addEventListeners();
	}

	addEventListeners() {
		const loginForm = this.querySelector("#login-form");
		if (loginForm) {
			loginForm.addEventListener("submit", (event) => {
				event.preventDefault();
				event.stopPropagation();

				if (loginForm.checkValidity()) {
					// Si el formulario es válido, redirige
					window.location.href = "./pedidos/";
				}

				loginForm.classList.add("was-validated");
			});
		}
	}
}

customElements.define("layout-login", LayoutLogin);
