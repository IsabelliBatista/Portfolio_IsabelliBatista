import React from 'react';
import Container from '../Container'
import './style.css';

const Sobre = () =>{
    return(
       <>
       <Container>
       <div className="sobre">
           <img src="img-perfil.png" alt="meu perfil" />
           <div className="sobre__text">
               <h3>Sobre mim</h3>
               <h1>Quem sou eu</h1>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
               <div>
                   <button className="btn-ver-mais">Veja mais</button>
                   <button className="btn-contato">Contato</button>
               </div>
           </div>
       </div>
       </Container>
       </>
    );
}
export default Sobre;