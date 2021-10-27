import React from 'react';
import Container from '../Container'
import './style.css';

const Redes = () =>{
    return(
       <div className="redes">
           <div className="img-opacity">
           <Container>
                <div className="box-redes-icon">
                    <div className="rede-icon">
                        <img src="github.png" alt="" />
                    </div>
                    <div className="rede-icon">
                        <img src="linkedin.png" alt="" />
                    </div>
                    <div className="rede-icon">
                        <img src="instagram.png" alt="" />
                    </div>
                </div>
           </Container>
           </div>
       </div>
    );
}
export default Redes;