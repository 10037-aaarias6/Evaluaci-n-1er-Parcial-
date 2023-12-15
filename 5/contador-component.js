class ContadorComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
    
      this.state = 0;
    }
  
    connectedCallback() {
      this.render();
      this.setupEventListeners();
    }
  
    render() {
 
      const container = document.createElement('div');
      container.setAttribute('class', 'contador-container');
  
      const display = document.createElement('div');
      display.setAttribute('class', 'contador-display');
      display.textContent = this.state;
  
      const incrementButton = document.createElement('button');
      incrementButton.textContent = '+';
  
      const decrementButton = document.createElement('button');
      decrementButton.textContent = '-';
  
    
      container.appendChild(display);
      container.appendChild(incrementButton);
      container.appendChild(decrementButton);
  
     
      const style = document.createElement('style');
      style.textContent = `
      .contador-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'Arial', sans-serif;
        margin: 20px;
      }

      .contador-display {
        font-size: 24px;
        margin-bottom: 10px;
      }

      button {
        font-size: 18px;
        padding: 8px 12px;
        margin: 5px;
        cursor: pointer;
        border: none;
        border-radius: 4px;
        transition: background-color 0.3s ease;
      }

      .increment-button {
        background-color: #2ecc71;
        color: #fff;
      }

      .decrement-button {
        background-color: #e74c3c;
        color: #fff;
      }

      button:hover {
        background-color: #34495e;
        color: #fff;
      }
    `;

  
      
      this.shadowRoot.appendChild(style);
      this.shadowRoot.appendChild(container);
    }
  
    setupEventListeners() {

      const incrementButton = this.shadowRoot.querySelector('button');
      const decrementButton = incrementButton.nextElementSibling;
  
      incrementButton.addEventListener('click', () => {
        this.increment();
        this.updateDisplay();
      });
  
      decrementButton.addEventListener('click', () => {
        this.decrement();
        this.updateDisplay();
      });
    }
  
    increment() {

      this.state++;
    }
  
    decrement() {
  
      this.state = Math.max(0, this.state - 1);
    }
  
    updateDisplay() {
    
      const display = this.shadowRoot.querySelector('.contador-display');
      display.textContent = this.state;
    }
  }
  
  customElements.define('contador-component', ContadorComponent);
  