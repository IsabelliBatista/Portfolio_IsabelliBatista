import React from 'react';
import Container from '../Container'
import './style.css';

const Header = () =>{
    return(
        <header>
            <Container>
                <nav>
                    <img src="logo-default.png" alt="logo" />
                    <ul>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Contato</li>
                    </ul>
                </nav>
            </Container>
            <div className="hero">
                <img src="hero.png" alt="" />
            </div>
        </header>
    );
}
export default Header;