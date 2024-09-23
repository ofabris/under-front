import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { IoThunderstorm } from "react-icons/io5";
import './home.css';

const Home = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <h1 className="navbar-logo">
                        Under
                        <IoThunderstorm size={25} />
                    </h1>
                    <ul className={`navbar-menu ${isActive ? 'active' : ''}`}>
                        <li className="navbar-item"><a href="#home">Home</a></li>
                        <li className="navbar-item"><a href="#about">Perfil</a></li>
                        <li className="navbar-item"><a href="#services">Configurações</a></li>
                        <li className="navbar-item"><a href="#contact">Sair</a></li>
                    </ul>
                    <div className="navbar-toggle" onClick={toggleMenu} id="mobile-menu">
                        <FiMenu size={20} color='#000' />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Home;
    