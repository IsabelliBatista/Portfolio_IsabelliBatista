import React from 'react';
import Container from '../Container'
import './style.css';

const Conteudo = () =>{
    return(
        <main>
            <Container>
                <h3>Qualificação</h3>
                <h1>Skill & experiência</h1>
                <div className="about-conteudo">
                    <div className="education">
                        <h3>Educação</h3>
                        <div className="card-education">
                            <h4>Graduação</h4>
                            <span>ADS, UNIP </span>
                            <p>(Ano de Conclusão – Dezembro 2021)</p>
                        </div>
                        <div className="card-education">
                            <h4>Graduação</h4>
                            <span>ADS, UNIP </span>
                            <p>(Ano de Conclusão – Dezembro 2021)</p>
                        </div>
                        <div className="card-education">
                            <h4>Graduação</h4>
                            <span>ADS, UNIP </span>
                            <p>(Ano de Conclusão – Dezembro 2021)</p>
                        </div>
                    </div>
                    <div className="experience">
                        <h3>Experiência</h3>
                        <div className="card-experience">
                            <div className="card-experience-icon">
                                <img src="" alt="" />
                            </div>
                            <div className="card-experience-text">
                                <h4>Software Analyst</h4>
                                <span>Laborit</span>
                                <p>09/2020 - Atualmente</p>
                            </div>
                        </div>
                        <div className="card-experience">
                            <div className="card-experience-icon">
                                <img src="" alt="" />
                            </div>
                            <div className="card-experience-text">
                                <h4>Software Analyst</h4>
                                <span>Laborit</span>
                                <p>09/2020 - Atualmente</p>
                            </div>
                        </div>
                        <div className="card-experience">
                            <div className="card-experience-icon">
                                <img src="" alt="" />
                            </div>
                            <div className="card-experience-text">
                                <h4>Software Analyst</h4>
                                <span>Laborit</span>
                                <p>09/2020 - Atualmente</p>
                            </div>
                        </div>
                    </div>
                    <div className="skills">
                        <h3>Skills</h3>
                        <div className="card-skills">
                            <ul>
                                <li>HTML / CSS - Médio</li>
                                <li>HTML / CSS - Médio</li>
                                <li>HTML / CSS - Médio</li>
                                <li>HTML / CSS - Médio</li>
                                <li>HTML / CSS - Médio</li>
                                <li>HTML / CSS - Médio</li>
                                <li>HTML / CSS - Médio</li>
                                <li>HTML / CSS - Médio</li>
                                <li>HTML / CSS - Médio</li>
                                <li>HTML / CSS - Médio</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}
export default Conteudo;