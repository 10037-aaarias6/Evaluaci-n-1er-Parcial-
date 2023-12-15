class EmisorComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    const button = document.createElement('button');
    button.textContent = 'Enviar Mensaje';

    button.addEventListener('click', () => {
      const eventoMensaje = new CustomEvent('mensajeEnviado', {
        detail: {
          mensaje: '¡Hola desde emisor-component!'
        },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(eventoMensaje);
    });

    shadowRoot.appendChild(button);

   
    const linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('href', 'styles.css');
    shadowRoot.appendChild(linkElement);
  }
}

customElements.define('emisor-component', EmisorComponent);
