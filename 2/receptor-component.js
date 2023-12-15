class ReceptorComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    window.addEventListener('mensajeEnviado', (event) => {
      this.mostrarMensaje(event.detail.mensaje);
    });


    const linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('href', 'styles.css');
    this.shadowRoot.appendChild(linkElement);
  }

  mostrarMensaje(mensaje) {
    const mensajeElement = document.createElement('p');
    mensajeElement.textContent = mensaje;
    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(mensajeElement);
  }
}

customElements.define('receptor-component', ReceptorComponent);
