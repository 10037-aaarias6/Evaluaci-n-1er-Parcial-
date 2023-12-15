class ContenedorComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

  
    const container = document.createElement('div');
    container.classList.add('container');

   
    const headerSlot = document.createElement('slot');
    headerSlot.setAttribute('name', 'header');

   
    const contentSlot = document.createElement('slot');
    contentSlot.setAttribute('name', 'content');


    container.appendChild(headerSlot);
    container.appendChild(contentSlot);

    const style = document.createElement('style');
    style.textContent = `


    :host {
      display: block;
      font-family: 'Open Sans', Arial, sans-serif;
    }

      .container {
        border: 2px solid #3498db;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        margin: 20px;
        background-color: #fff;
        transition: box-shadow 0.3s ease;
      }

      .container:hover {
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
      }

      slot {
        display: block;
        padding: 20px;
      }

      [slot="header"] {
        background-color: #3498db;
        color: #fff;
        font-size: 24px;
        font-weight: bold;
        padding: 15px;
        border-bottom: 2px solid #2c3e50;
        border-radius: 8px 8px 0 0;
      }

      [slot="content"] {
        padding-top: 20px;
      }

      /* Estilos para la lista de juegos */
      [slot="content"] ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      [slot="content"] li {
        font-size: 18px;
        margin-bottom: 10px;
        padding: 10px;
        background-color: #ecf0f1;
        border-radius: 5px;
        transition: background-color 0.3s ease;
      }

      [slot="content"] li:hover {
        background-color: #bdc3c7;
      }
    `;

    
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(container);
  }
}

customElements.define('contenedor-component', ContenedorComponent);
