import React, { useState } from 'react';
import '../home/home.css';
import Chart from 'react-apexcharts';
import { IoThunderstorm } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

const chartOptions = {
    chart: {
        height: 350,
        width: '100%',
        background: 'rgb(44, 46, 46)'
    },
    xaxis: {
        categories: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']
    },
    colors: ['rgb(0, 12, 255)']
};

const chartData = [
    {
        name: 'Descobertas',
        data: [10, 15, 8, 12, 20, 18, 25],
        type: 'line',
        title: 'Descobertas na Semana'
    },
    {
        name: 'Seguidores',
        data: [50, 60, 55, 70, 80, 75, 90],
        type: 'bar',
        title: 'Seguidores na Semana'
    },
    {
        name: 'Visualizações',
        data: [200, 300, 250, 400, 500, 450, 600],
        type: 'area',
        title: 'Visualizações na Semana'
    }
];

const Home = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <div>
            <div className="home-container">
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

            <div>
                <h1>TESTE</h1>
            </div>

            <div className="dashboardPanel">
                {chartData.map((chart, index) => (
                    <div className="chart-container" key={index}>
                        <Chart
                            options={{
                                ...chartOptions,
                                chart: { ...chartOptions.chart, type: chart.type },
                                title: { text: chart.title }
                            }}
                            series={[{ name: chart.name, data: chart.data }]}
                            type={chart.type}
                            height={350}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
