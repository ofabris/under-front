import React from 'react';
import './styles.css'; // Importe o CSS

function Home({ handleLogout }) {
  return (
    <div>
      {/* Navbar com os itens de menu */}
      <nav className="navbar">
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#home">Home</a></li>
          <li className="navbar-item"><a href="#about">About</a></li>
          <li className="navbar-item"><a href="#services">Services</a></li>
          <li className="navbar-item"><a href="#contact">Contact</a></li>
          {/* Item de menu para o botão de Logout */}
          <li className="navbar-item">
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
      {/* Conteúdo principal da página */}
      <div className="content">
        <h1>Welcome to Home Page</h1>
      </div>
    </div>
  );
}

export default Home;
