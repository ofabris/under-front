import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { IoThunderstorm } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import '../home/home.css';

const Home = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const [chartOptions] = useState({
        chart: {
            type: 'line'
        },
        series: [{
            name: 'sales',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }],
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
    });

    return (
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

            <div className="App">
                <ReactApexChart
                    options={chartOptions}
                    series={chartOptions.series}
                    type="line"
                    height={350}
                />
            </div>


            {/* <div className="dashboard">
                <div className="main-content">
                    <div className="header">
                        <h1>NPS Dashboard</h1>
                    </div>
                    <div className="metrics">
                        <div className="metric">
                            <h2>NPS History</h2>
                            <div className="line-chart">[Line Chart]</div>
                        </div>
                        <div className="metric">
                            <h2>Score</h2>
                            <div className="gauge-chart">53</div>
                        </div>
                        <div className="metric">
                            <h2>Responses</h2>
                            <div className="pie-chart">
                                <div>Promoters: 80%</div>
                                <div>Passives: 10%</div>
                                <div>Detractors: 10%</div>
                            </div>
                        </div>
                        <div className="metric">
                            <h2>Feedback Trends</h2>
                            <div className="bar-chart">[Bar Chart]</div>
                        </div>
                    </div>
                    <div className="totals">
                        <div>Total Responses: 2000</div>
                        <div>Net Promoter Score: 53</div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Home;
