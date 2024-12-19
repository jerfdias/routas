import React from "react";
import  { BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './componenst/Login.js';
import Cadastro from "./componenst/Cadastro";
import Lembra from "./componenst/Lembra.js";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/cadastro' element={<Cadastro/>}/>
      <Route path='*' element={<h1>Not found </h1>}/>
      <Route path='/lembrar' element={<Lembra/>}/>





    </Routes>


    </BrowserRouter>

  );
}

export default App;
