import React from 'react'
import Img from './img/volks.png';

function Cadastro() {
  return (
    <div>
      <main className='PrincipalContent'>
        <img src={Img}></img>
        <label for="nome">Nome:</label>
        <input type='text' className='nomeCliente'id='nomeCliente' required placeholder='digite seu nome aqui'></input><br></br>
        <label for="sobrenome">Sebrenome:</label>
        <input type="text"required className='nomeCompleto' id='nomeCompleto' ></input>       
      </main>
    </div>
  )
}

export default Cadastro
