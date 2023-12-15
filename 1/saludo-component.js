class SaludoComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

   
    const linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('href', 'styles.css');

   
    const h1 = document.createElement('h1');
    h1.textContent = '¡Hola, Mundo!';

    
    shadowRoot.appendChild(linkElement);
    shadowRoot.appendChild(h1);
  }
}

customElements.define('saludo-component', SaludoComponent);
