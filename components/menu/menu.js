const menuTemplate = document.createElement("template");
let path;

menuTemplate.innerHTML = `
<style>
@import url('http://${location.host}/components/menu/menu.css');
</style>

<div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100">
<a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
  <svg class="bi me-2" width="40" height="32">
    <use xlink:href="#bootstrap"></use>
  </svg>
  <span class="fs-4">Video Stream</span>
</a>
<hr />
<ul class="nav nav-pills flex-column mb-auto">
  <li class="nav-item">
    <a
      href="/"
      class="nav-link text-white ${path == "/" ? "active" : ""}"
      aria-current="page"
    >
      <svg class="bi me-2" width="16" height="16">
        <i class="fa-solid fa-grid-dividers"></i>
      </svg>
      Kameralar
    </a>
  </li>
  <li>
    <a
      href="/videos"
      class="nav-link text-white ${path == "/videos" ? "active" : ""}"
    >
      <svg class="bi me-2" width="16" height="16">
        <use xlink:href="#speedometer2"></use>
      </svg>
      Kayıtlar
    </a>
  </li>
</ul>
<hr />
</div>

`;

class Menu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(menuTemplate.content.cloneNode(true));
  }
  connectedCallback() {
    path = this.getAttribute("path");
  }
  disconnectedCallback() {}
}

window.customElements.define("app-menu", Menu);
