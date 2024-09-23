import { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { IoThunderstorm } from "react-icons/io5";
import Home from './pages/home/home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './app.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/home');
  };

  const handleLogin = () => {
    let errorType = '';

    if (!username) {
      errorType = 'username';
    } else if (!password) {
      errorType = 'password';
    }

    switch (errorType) {
      case 'username':
        setErrorMessage('Digite seu usuário!');
        setIsModalOpen(true);
        break;
      case 'password':
        setErrorMessage('Digite sua senha!');
        setIsModalOpen(true);
        break;
      default:
        setErrorMessage('');
        console.log('Logging in with:', username, password);
        handleLoginClick();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <h1 className="title">
        Under
        <IoThunderstorm size={60} />
      </h1>

      <div className="containerLogin">
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="containerLogin">
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="buttonLogin" onClick={handleLogin}>
        <FiLogIn size={25} color='#000' />
      </button>

      <h1 className="containerRegister">
        Não tem uma conta? <span className="containerRegisterLink">Cadastre-se</span>
      </h1>

      {isModalOpen && (
        <div className="modal">
          <div className="modalContent">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>{errorMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// Componente de rotas
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
