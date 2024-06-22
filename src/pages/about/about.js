import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Importe o CSS

function About({ handleLogout }) {

    const navigate = useNavigate();

    const handleNavigate = (path) => {
        return () => {
            navigate(path);
        };
    };

    return (
        <div>
            {/* Navbar com os itens de menu */}
            <nav className="navbar">
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <button onClick={handleNavigate('/home')} className="link-button">Home</button>
                    </li>
                    <li className="navbar-item">
                        <button onClick={handleNavigate('/about')} className="link-button">Sobre</button>
                    </li>
                    <li className="navbar-item">
                        <button onClick={handleNavigate('/services')} className="link-button">Serviços</button>
                    </li>
                    <li className="navbar-item">
                        <button onClick={handleNavigate('/contact')} className="link-button">Contato</button>
                    </li>
                    {/* Item de menu para o botão de Logout */}
                    <li className="navbar-item">
                        <button onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            </nav>
            {/* Conteúdo principal da página */}
            <div className="content">
                <h1>Sobre a Under</h1>
            </div>
        </div>
    );
}

export default About;