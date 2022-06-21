const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
<style>
@import url('http://${location.host}/components/header/header.css');
</style>


<nav
  class="navbar navbar-expand-lg"
  style="background-color: rgb(216, 11, 216)"
>
  <div class="container-fluid text-white">
    <a class="navbar-brand text-white" href="#">
        <span class="text-white"><slot/></span>
    </a>
  </div>
</nav>
</div>

`;

class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
  }
  connectedCallback() {}
  disconnectedCallback() {}
}

window.customElements.define("app-header", Header);
