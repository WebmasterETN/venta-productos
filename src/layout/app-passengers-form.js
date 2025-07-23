import "../components/app-card-select-ticket.js";

class AppPassangersForm extends HTMLElement {
	connectedCallback() {
		// Bind the event handler method to the instance
		this._handleContinueClick = this.handleContinueClick.bind(this);

		this.innerHTML = `
            <article class="d-flex flex-column w-100">

                <div class="row">
                  <div class="col-12">
                    <div class="p-4 border rounded fondo-card">
                      <h2 class="titulo__page">
                        ¡Asegura tu asiento de regreso!
                        <span class="icon-on-time"><span class="path1"></span><span class="path2"></span><span
                            class="path3"></span><span class="path4"></span></span>
                      </h2>
                      <h4 class="titulo__route"><span class="icon-filled-pointer"></span>Guadalajara - Ciudad de México</h4>
                      <div class="row mt-3">
                        <div class="col-sm-4 mb-3 mb-sm-0">
                            <app-card-select-ticket
                                typecards='[{"typeCard": "Elegir horario"}]'
                                prices='[{"price": "$955"}]'
                            ></app-card-select-ticket>
                        </div>
                        <div class="col-sm-4">
                            <app-card-select-ticket
                                typecards='[{"typeCard": "Boleto abierto"}]'
                                prices='[{"price": "$945"}]'
                            ></app-card-select-ticket>
                        </div>
                      </div>
                      <div class="col d-flex align-items-center justify-content-between">
                        <h3 class="subtitulo__pages mt-5 me-2">¿Quiénes viajan?</h3>
                        <span class="subtitulo__onboard mb-0">1 a bordo</span>
                      </div>
                      <div class="d-flex align-items-center gap-2 mt-4 mb-3">
                        <img src="src/assets/icons/icons-img/icons/passenger.webp" style="height: 20px; margin: 0" alt="icono de pasajero" />

                        <p class="title__form mb-0">Pasajero 1</p>

                        <div class="badge text-wrap text-center" style="width: 3rem; background-color: #1e3b5a">
                          22
                        </div>
                      </div>

                      <form id="passenger-form" class="needs-validation"  novalidate>
                        <div class="row mb-3">
                          <!-- Nombres -->
                          <div class="col-12 col-xl">
                            <div class="field-renderer ">
                              <div>
                                <div class="css-1ildg7g">
                                  <div class="css-bjn8wh">
                                    <input id="passengers-0-firstName" type="text" placeholder="Nombre (s)" class="css-za6xmu" value=""></div><label
                                    for="passengers-0-firstName" class="css-1habs1z">Nombre (s)</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- Apellido Paterno -->
                          <div class="col-12 col-xl">
                            <div class="field-renderer ">
                              <div>
                                <div class="css-1ildg7g">
                                  <div class="css-bjn8wh">
                                    <input id="passengers-0-lastName" type="text"
                                      placeholder="Apellido Paterno" class="css-za6xmu" value=""></div><label
                                    for="passengers-0-lastName" class="css-1habs1z">Apellido Paterno</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <!-- Apellido Materno (mitad del ancho) -->
                          <div class="col-12 col-xl">
                            <div class="field-renderer ">
                              <div>
                                <div class="css-1ildg7g">
                                  <div class="css-bjn8wh">
                                    <input id="passengers-0-secondLastName" type="text"
                                       placeholder="Apellido Materno" class="css-za6xmu" value="">
                                  </div>
                                  <label for="passengers-0-secondLastName" class="css-1habs1z">Apellido Materno</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row mb-3">
                          <!-- Correo Electrónico -->
                          <div class="col-12">
                            <div class="field-renderer ">
                              <div>
                                <div class="css-1ildg7g">
                                  <div class="css-bjn8wh"><input id="passengers-0-email" type="text" name="passengers[0].email"
                                      placeholder="Correo electrónico" class="css-za6xmu" value=""></div><label
                                    for="passengers-0-email" class="css-1habs1z">Correo electrónico</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <span><strong>Categoría (Adulto, INSEN, Estudiante,
                          etc...)</strong></span>
                      <div class="container max-ancho mt-3 mb-3">
                        <div class="d-flex align-items-center flex-wrap gap-2">
                          <input type="radio" class="btn-check" id="check1" name="checkGroup" />
                          <label class="btn-check-label" for="check1">Adulto</label>

                          <input type="radio" class="btn-check" id="check2" name="checkGroup" />
                          <label class="btn-check-label" for="check2">INSEN</label>

                          <label class="text__advertise">
                            <span class="icon-block"></span>
                            Estudiante, profesor, PCD, no disponibles
                          </label>
                        </div>
                      </div>
                      <span>

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                          <circle cx="8" cy="8" r="8" fill="rgb(120, 159, 144)" />
                          <path
                            d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm.1-6.995a.905.905 0 0 1 1.8 0l-.35 4.5a.552.552 0 0 1-1.1 0l-.35-4.5z"
                            fill="white" />
                        </svg>

                        <strong>Por seguridad, no se permite que ningun menor viaje solo</strong>
                      </span>

                      <div class="container mt-3 max-ancho p-0">

                        <div class="btn-group__protected__traveler d-flex flex-column justify-content-start align-items-center gap-2 mb-3 p-2">

                          <div class="d-flex justify-content-start align-items-center w-100 gap-2">
                            <img src="src/assets/icons/icons-img/icons/logo-viajero-protegido.webp" style="height: 30px;" alt="Viajero protegido" />
                            <h3 class="subtitulo__pages">Viajero protegido</h3>
                          </div>

                          <div class="form-check w-100">
                            <input class="form-check-input" type="checkbox" value="" id="checkDefault">
                            <label class="form-check-label add__protected__traveler" for="checkDefault">
                              Agregar seguro en tu viaje de ida, costo $10.00 MXN 
                            </label>
                          </div>

                        </div>

                        <div class="d-flex align-items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 64 64" fill="none" stroke="black"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="4" y="12" width="56" height="40" rx="4" ry="4" />
                            <circle cx="20" cy="26" r="5" />
                            <path d="M13 38c1.5-4 5-6 7-6s5.5 2 7 6" />
                            <line x1="34" y1="24" x2="54" y2="24" />
                            <line x1="34" y1="32" x2="54" y2="32" />
                            <line x1="34" y1="40" x2="54" y2="40" />
                          </svg>
                          <p class="indicatios__text mb-0">
                            Recuerda que deberás presentar una <strong> identificación oficial para abordar el autobús y verifica que
                              tus datos
                              de pasajeros estén correctos.</strong>
                          </p>
                        </div>
                        <div class="d-flex align-items-start gap-2 mt-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 64 64" fill="none"
                            stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <!-- Usuario trasero (más pequeño y más alto) -->
                            <circle cx="24" cy="20" r="5" />
                            <path d="M17 30c0-3.5 4-6 7-6s7 2.5 7 6" />

                            <!-- Usuario delantero (más grande y centrado) -->
                            <circle cx="38" cy="28" r="6.5" />
                            <path d="M26 44c0-5.5 6-9 12-9s12 3.5 12 9" />
                          </svg>

                          <p class="indicatios__text mb-0">

                            Los pasajeros menores de edad deben viajar en compañía de 1 adulto
                          </p>
                        </div>
                        <!-- Menú de selección de extras -->
                        <div class="container mt-4 mb-4 extras-container">
                          <h4 class="subtitulo__pages mb-3">Agrega extras a tu viaje</h4>
                          <div class="row g-3">
                            <!-- Agua -->
                            <div class="col-12 col-md-4">
                              <div class="card p-3 h-100">
                                <div class="d-flex justify-content-between align-items-center">
                                  <span>Agua</span>
                                  <img src="src/assets/icons/icons-img/icons/water.webp" alt="Agua" class="extra-icon img-fluid">
                                  <span class="badge bg-primary">$15</span>
                                </div>
                                <div class="d-flex justify-content-center align-items-center mt-2">
                                  <button type="button" class="btn btn-outline-secondary btn-sm" id="agua-minus">-</button>
                                  <span id="agua-count" class="mx-2">0</span>
                                  <button type="button" class="btn btn-outline-secondary btn-sm" id="agua-plus">+</button>
                                </div>
                              </div>
                            </div>
                            <!-- Refresco -->
                            <div class="col-12 col-md-4">
                              <div class="card p-3 h-100">
                                <div class="d-flex justify-content-between align-items-center">
                                  <span>Refresco</span>
                                  <img src="src/assets/icons/icons-img/icons/refresh.webp" alt="Refresco" class="extra-icon img-fluid">
                                  <span class="badge bg-primary">$20</span>
                                </div>
                                <div class="d-flex justify-content-center align-items-center mt-2">
                                  <button type="button" class="btn btn-outline-secondary btn-sm" id="refresco-minus">-</button>
                                  <span id="refresco-count" class="mx-2">0</span>
                                  <button type="button" class="btn btn-outline-secondary btn-sm" id="refresco-plus">+</button>
                                </div>
                              </div>
                            </div>
                            <!-- Subway -->
                            <div class="col-12 col-md-4">
                              <div class="card p-3 h-100">
                                <div class="d-flex justify-content-between align-items-center">
                                  <span>Subway</span>
                                  <img src="src/assets/icons/icons-img/icons/subway.webp" alt="Subway" class="extra-icon img-fluid">
                                  <span class="badge bg-primary">$60</span>
                                </div>
                                <div class="d-flex justify-content-center align-items-center mt-2">
                                  <button type="button" class="btn btn-outline-secondary btn-sm" id="subway-minus">-</button>
                                  <span id="subway-count" class="mx-2">0</span>
                                  <button type="button" class="btn btn-outline-secondary btn-sm" id="subway-plus">+</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- Terminos y condiciones -->
                        <div class="btn-group__terminos__condiciones">
                          <div class="row">
                            <h3 class="subtitulo__pages d-flex align-items-center gap-2">
                              ✋ Al continuar
                            </h3>
                            <label class="d-flex align-items-center gap-2 mt-2">
                              <p class="add__protected__traveler">• Estás aceptando nuestros <a href="#"> términos y condiciones.</a>
                                Puedes revisar nuestro aviso de
                                privacidad
                                <a href="#"> aquí.</a>
                              </p>
                            </label>
                          </div>
                        </div>
                        <button id="continue-to-payment-btn" type="button" class="btn btn-continue d-flex align-items-center me-0 mt-5">
                          <label class="tab-content__onboard__continue">Continuar</label>
                          <div class="container">
                            <div class="arrow">&#62;</div>
                            <div class="arrow">&#62;</div>
                            <div class="arrow">&#62;</div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
            </article>
                `;
		// Add event listener after rendering
		this.addEventListeners();
	}

	disconnectedCallback() {
		this.removeEventListeners();
	}

	addEventListeners() {
		const continueButton = this.querySelector("#continue-to-payment-btn");
		if (continueButton) {
			continueButton.addEventListener("click", this._handleContinueClick);
		} else {
			console.error(
				"#continue-to-payment-btn not found in app-passengers-form."
			);
		}

		// Extras: Agua
		const aguaMinus = this.querySelector("#agua-minus");
		const aguaPlus = this.querySelector("#agua-plus");
		const aguaCount = this.querySelector("#agua-count");
		let aguaValue = 0;
		if (aguaMinus && aguaPlus && aguaCount) {
			aguaMinus.addEventListener("click", () => {
				if (aguaValue > 0) aguaValue--;
				aguaCount.textContent = aguaValue;
			});
			aguaPlus.addEventListener("click", () => {
				aguaValue++;
				aguaCount.textContent = aguaValue;
			});
		}

		// Extras: Refresco
		const refrescoMinus = this.querySelector("#refresco-minus");
		const refrescoPlus = this.querySelector("#refresco-plus");
		const refrescoCount = this.querySelector("#refresco-count");
		let refrescoValue = 0;
		if (refrescoMinus && refrescoPlus && refrescoCount) {
			refrescoMinus.addEventListener("click", () => {
				if (refrescoValue > 0) refrescoValue--;
				refrescoCount.textContent = refrescoValue;
			});
			refrescoPlus.addEventListener("click", () => {
				refrescoValue++;
				refrescoCount.textContent = refrescoValue;
			});
		}

		// Extras: Subway
		const subwayMinus = this.querySelector("#subway-minus");
		const subwayPlus = this.querySelector("#subway-plus");
		const subwayCount = this.querySelector("#subway-count");
		let subwayValue = 0;
		if (subwayMinus && subwayPlus && subwayCount) {
			subwayMinus.addEventListener("click", () => {
				if (subwayValue > 0) subwayValue--;
				subwayCount.textContent = subwayValue;
			});
			subwayPlus.addEventListener("click", () => {
				subwayValue++;
				subwayCount.textContent = subwayValue;
			});
		}
	}

	removeEventListeners() {
		const continueButton = this.querySelector("#continue-to-payment-btn");
		if (continueButton) {
			continueButton.removeEventListener("click", this._handleContinueClick);
		}
	}

	handleContinueClick(e) {
		if (e) e.preventDefault();
		// --- INICIO: Validación (Ejemplo simple) ---
		// Deberías implementar una validación más robusta según tus necesidades
		const firstNameInput = this.querySelector("#passengers-0-firstName");
		const lastNameInput = this.querySelector("#passengers-0-lastName");
		const emailInput = this.querySelector("#passengers-0-email");

		if (!firstNameInput?.value || !lastNameInput?.value || !emailInput?.value) {
			alert("Por favor, completa todos los campos obligatorios del pasajero.");
			// Aquí podrías añadir lógica para resaltar los campos inválidos
			return; // Detiene la ejecución si la validación falla
		}
		// --- FIN: Validación ---

		// Obtén los valores de los extras
		const aguaCount =
			parseInt(this.querySelector("#agua-count").textContent, 10) || 0;
		const refrescoCount =
			parseInt(this.querySelector("#refresco-count").textContent, 10) || 0;
		const subwayCount =
			parseInt(this.querySelector("#subway-count").textContent, 10) || 0;
		const precios = { agua: 15, refresco: 20, subway: 60 };
		const extras = [
			{ nombre: "Agua", cantidad: aguaCount, precio: precios.agua },
			{ nombre: "Refresco", cantidad: refrescoCount, precio: precios.refresco },
			{ nombre: "Subway", cantidad: subwayCount, precio: precios.subway },
		].filter((e) => e.cantidad > 0);

		this.dispatchEvent(
			new CustomEvent("navigate-to-payment", {
				bubbles: true,
				composed: true,
				detail: { extras },
			})
		);
	}
}
customElements.define("app-passangers-form", AppPassangersForm);
