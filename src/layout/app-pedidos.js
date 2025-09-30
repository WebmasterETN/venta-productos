class LayoutPedidos extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
      <div class="container-fluid pb-5">
        <div class="card shadow-lg card-container">
          <header class="card-header d-flex justify-content-between align-items-center">
              <h2 class="card-title mb-0">Registro de Entregas</h2>
              <button type="button" class="btn btn-secondary" onclick="window.location.href = '../../admin';">Volver</button>
          </header>
          <main class="card-body mt-0">
            <div class="table-responsive table-container-scroll">
              <table class="table table-striped table-hover align-middle">
                <thead class="table-dark"> 
                  <!-- El thead se quedará fijo en la parte superior gracias a position: sticky -->
                  <tr class="text-center">
                    <th># Operación</th>
                    <th>Fecha de Viaje</th>
                    <th>Pasajero</th>
                    <th>Andén</th>
                    <th>Productos</th>
                    <th>Estatus</th>
                    <th>Folio</th>
                    <th>Entrega</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Fila de ejemplo 1 -->
                  <tr>
                    <td>12345</td>
                    <td>2024-08-15</td>
                    <td>Juan Pérez</td>
                    <td>5</td>
                    <td>
                      <ul class="list-unstyled mb-0">
                        <li>- Producto 1 (Agua)</li>
                        <li>- Producto 2 (Subway)</li>
                      </ul>
                    </td>
                    <td><span class="badge bg-warning text-dark">Por surtir</span></td>
                    <td>F-9876</td>
                    <td>
                      <button class="btn btn-sm btn-outline-secondary entrega-btn" data-status="pendiente">Pendiente</button>
                    </td>
                  </tr>
                  <!-- Fila de ejemplo 2 -->
                  <tr>
                    <td>12346</td>
                    <td>2024-08-16</td>
                    <td>Maria Garcia</td>
                    <td>2</td>
                    <td>
                      <ul class="list-unstyled mb-0">
                        <li>- Producto 1 (Refresco)</li>
                      </ul>
                    </td>
                    <td><span class="badge bg-success">Completo</span></td>
                    <td>F-9877</td>
                    <td>
                      <button class="btn btn-sm btn-success entrega-btn" data-status="entregado" disabled>Entregado</button>
                    </td>
                  </tr>
                  <!-- Fila de ejemplo 3 -->
                  <tr>
                    <td>12347</td>
                    <td>2024-08-17</td>
                    <td>Carlos Sánchez</td>
                    <td>1</td>
                    <td>
                      <ul class="list-unstyled mb-0">
                        <li>- Producto 1 (Agua)</li>
                        <li>- Producto 2 (Refresco)</li>
                        <li>- Producto 3 (Subway)</li>
                      </ul>
                    </td>
                    <td><span class="badge bg-warning text-dark">Por surtir</span></td>
                    <td>F-9878</td>
                    <td>
                      <button class="btn btn-sm btn-outline-secondary entrega-btn" data-status="pendiente">Pendiente</button>
                    </td>
                  </tr>
                  <!-- Fila de ejemplo 4 -->
                  <tr>
                    <td>12348</td>
                    <td>2024-08-18</td>
                    <td>Ana Torres</td>
                    <td>8</td>
                    <td>
                      <ul class="list-unstyled mb-0">
                        <li>- Producto 1 (Subway)</li>
                      </ul>
                    </td>
                    <td><span class="badge bg-success">Completo</span></td>
                    <td>F-9879</td>
                    <td>
                      <button class="btn btn-sm btn-success entrega-btn" data-status="entregado" disabled>Entregado</button>
                    </td>
                  </tr>
                  <!-- Fila de ejemplo 5 -->
                  <tr>
                    <td>12349</td>
                    <td>2024-08-19</td>
                    <td>Luis Ramirez</td>
                    <td>3</td>
                    <td>
                      <ul class="list-unstyled mb-0">
                        <li>- Producto 1 (Agua)</li>
                      </ul>
                    </td>
                    <td><span class="badge bg-warning text-dark">Por surtir</span></td>
                    <td>F-9880</td>
                    <td>
                      <button class="btn btn-sm btn-outline-secondary entrega-btn" data-status="pendiente">Pendiente</button>
                    </td>
                  </tr>
                  <!-- Fila de ejemplo 6 -->
                  <tr>
                    <td>12350</td>
                    <td>2024-08-20</td>
                    <td>Laura Jimenez</td>
                    <td>6</td>
                    <td>
                      <ul class="list-unstyled mb-0">
                        <li>- Producto 1 (Refresco)</li>
                        <li>- Producto 2 (Subway)</li>
                      </ul>
                    </td>
                    <td><span class="badge bg-success">Completo</span></td>
                    <td>F-9881</td>
                    <td>
                      <button class="btn btn-sm btn-success entrega-btn" data-status="entregado" disabled>Entregado</button>
                    </td>
                  </tr>
                  <!-- Fila de ejemplo 7 -->
                  <tr>
                    <td>12351</td>
                    <td>2024-08-21</td>
                    <td>Pedro Martinez</td>
                    <td>4</td>
                    <td>
                      <ul class="list-unstyled mb-0">
                        <li>- Producto 1 (Agua)</li>
                      </ul>
                    </td>
                    <td><span class="badge bg-warning text-dark">Por surtir</span></td>
                    <td>F-9882</td>
                    <td>
                      <button class="btn btn-sm btn-outline-secondary entrega-btn" data-status="pendiente">Pendiente</button>
                    </td>
                  </tr>
                  <!-- Fila de ejemplo 7 -->
                  <tr>
                    <td>12351</td>
                    <td>2024-08-21</td>
                    <td>Pedro Martinez</td>
                    <td>4</td>
                    <td>
                      <ul class="list-unstyled mb-0">
                        <li>- Producto 1 (Agua)</li>
                      </ul>
                    </td>
                    <td><span class="badge bg-warning text-dark">Por surtir</span></td>
                    <td>F-9882</td>
                    <td>
                      <button class="btn btn-sm btn-outline-secondary entrega-btn" data-status="pendiente">Pendiente</button>
                    </td>
                  </tr>
                  <!-- Fila de ejemplo 7 -->
                  <tr>
                    <td>12351</td>
                    <td>2024-08-21</td>
                    <td>Pedro Martinez</td>
                    <td>4</td>
                    <td>
                      <ul class="list-unstyled mb-0">
                        <li>- Producto 1 (Agua)</li>
                      </ul>
                    </td>
                    <td><span class="badge bg-warning text-dark">Por surtir</span></td>
                    <td>F-9882</td>
                    <td>
                      <button class="btn btn-sm btn-outline-secondary entrega-btn" data-status="pendiente">Pendiente</button>
                    </td>
                  </tr>
                  <!-- Fila de ejemplo 7 -->
                  <tr>
                    <td>12351</td>
                    <td>2024-08-21</td>
                    <td>Pedro Martinez</td>
                    <td>4</td>
                    <td>
                      <ul class="list-unstyled mb-0">
                        <li>- Producto 1 (Agua)</li>
                      </ul>
                    </td>
                    <td><span class="badge bg-warning text-dark">Por surtir</span></td>
                    <td>F-9882</td>
                    <td>
                      <button class="btn btn-sm btn-outline-secondary entrega-btn" data-status="pendiente">Pendiente</button>
                    </td>
                  </tr>
                  <!-- Fila de ejemplo 7 -->
                  <tr>
                    <td>12351</td>
                    <td>2024-08-21</td>
                    <td>Pedro Martinez</td>
                    <td>4</td>
                    <td>
                      <ul class="list-unstyled mb-0">
                        <li>- Producto 1 (Agua)</li>
                      </ul>
                    </td>
                    <td><span class="badge bg-warning text-dark">Por surtir</span></td>
                    <td>F-9882</td>
                    <td>
                      <button class="btn btn-sm btn-outline-secondary entrega-btn" data-status="pendiente">Pendiente</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    `;
		this.addEventListeners();
	}

	addEventListeners() {
		this.querySelectorAll(".entrega-btn").forEach((button) => {
			button.addEventListener("click", (event) => {
				const btn = event.currentTarget;
				btn.textContent = "Entregado";
				btn.classList.remove("btn-outline-secondary");
				btn.classList.add("btn-success");
				btn.setAttribute("disabled", "true");
				btn.dataset.status = "entregado";
			});
		});
	}
}

customElements.define("layout-pedidos", LayoutPedidos);
