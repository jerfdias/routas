import React from 'react'
import Img from "./img/volks.png";
import { Link } from 'react-router-dom';
import  './Estilos/Login.css';
 
function Login() {
  return (
    <div>
  <main className='PrincipalContent'>
   <form className='Formulario'>
    <img src={Img}></img><br></br>
    <label for="EmailCliente">Email:</label>
    <input type="text" placeholder='digite seu email' required ></input><br></br>   
    <label for="senhaCliente">Senha:</label>
    <input type="password" placeholder='digite sua senha aqui' required className='senhaContent' ></input>
    
    <Link to={'/cadastro'} className='pagina'style={{textDecoration:'none'}}>Cadastre-se</Link>
    <button type='submit'>Login</button>
    <Link to={'/lembrar'} className='pagina'style={{textDecoration:'none'}}color='white'>Recuperar Senha!</Link>
    </form>



  </main>
    </div>
  )
}

export default Login
