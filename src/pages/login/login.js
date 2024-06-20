import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Importe o CSS do Login aqui

function Login({ setLoggedIn }) {
  const navigate = useNavigate(); // Hook do React Router para navegação programática
  const [username, setUsername] = useState(''); // Estado para armazenar o nome de usuário
  const [password, setPassword] = useState(''); // Estado para armazenar a senha do usuário

  const handleLogin = (event) => {
    event.preventDefault(); // Previne o comportamento padrão de submit do formulário

    // Simulação de autenticação simples
    if (username === 'adm' && password === '123') { // Verifica se o usuário e senha são válidos
      setLoggedIn(true); // Atualiza o estado de loggedIn para true (autenticado)
      navigate('/home'); // Navega para a rota '/home' após o login bem-sucedido
    } else {
      alert('Login ou senha incorretos'); // Exibe um alerta se as credenciais estiverem incorretas
    }
  };

  return (
    <div className="login-page"> {/* Container principal da página de login */}
      <div className="login-container"> {/* Container que centraliza e estiliza o conteúdo do login */}
        <h1>Under</h1> {/* Título da aplicação */}
        <form onSubmit={handleLogin}> {/* Formulário de login que chama handleLogin no submit */}
          <div className="form-group"> {/* Grupo de entrada para o nome de usuário */}
            <input
              type="text"
              id="username"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            /> {/* Campo de entrada para o nome de usuário */}
          </div>
          <div className="form-group"> {/* Grupo de entrada para a senha */}
            <input
              type="password"
              id="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            /> {/* Campo de entrada para a senha */}
          </div>
          <button type="submit">Log In</button> {/* Botão para submeter o formulário de login */}
          <button
            type="button"
            className="forgot-password"
            onClick={() => alert('Implementar lógica de recuperação de senha')}
          >
            Esqueceu sua senha? {/* Botão para recuperação de senha (implementação futura) */}
          </button>
          <div className="divider"></div> {/* Divisor horizontal */}
          <button type="button" className="create-account">
            Faça parte da Under! {/* Botão para criação de conta (implementação futura) */}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login; // Exporta o componente Login como padrão
