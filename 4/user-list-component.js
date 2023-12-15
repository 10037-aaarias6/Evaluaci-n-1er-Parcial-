class UserListComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
      this.fetchUsers();
    }
  
    async fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        this.displayUsers(users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
  
    displayUsers(users) {
      const userList = document.createElement('ul');
      userList.setAttribute('class', 'user-list');
  
      users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        userList.appendChild(listItem);
      });
  
      this.shadowRoot.appendChild(userList);
    }
  
    render() {
      const style = document.createElement('style');
      style.textContent = `
        .user-list {
          list-style: none;
          padding: 0;
          margin: 20px;
          font-family: 'Arial', sans-serif;
        }
  
        .user-list li {
          font-size: 18px;
          margin-bottom: 10px;
          padding: 10px;
          background-color: #ecf0f1;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }
  
        .user-list li:hover {
          background-color: #bdc3c7;
        }
      `;
  
      this.shadowRoot.appendChild(style);
    }
  }
  
  customElements.define('user-list-component', UserListComponent);
  