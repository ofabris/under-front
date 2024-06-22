import React, { useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Services from './pages/services/services';

function App() {
  // Estado para controlar se o usuário está logado ou não
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Função para fazer logout, alterando o estado isLoggedIn para false
  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <Routes>

        {/* Rota para a página de login */}
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />

        {/* Rota protegida para a página inicial (home) */}
        {/* Se isLoggedIn for true, renderiza o componente Home com a função handleLogout */}
        {/* Se não estiver logado (isLoggedIn false), redireciona para a página de login */}
        <Route path="/home" element={isLoggedIn ? <Home handleLogout={handleLogout} /> : <Navigate to="/login" />} />

        {/* Rota para a página sobre */}
        <Route path="/about" element={isLoggedIn ? <About handleLogout={handleLogout} /> : <Navigate to="/login" />} />

        {/* Rota para a página sobre */}
        <Route path="/services" element={isLoggedIn ? <Services handleLogout={handleLogout} /> : <Navigate to="/login" />} />

        {/* Rota para a página sobre */}
        <Route path="/contact" element={isLoggedIn ? <Contact handleLogout={handleLogout} /> : <Navigate to="/login" />} />

        {/* Rota padrão para qualquer outro caminho não especificado */}
        {/* Redireciona sempre para a página de login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;