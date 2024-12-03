import React, { useState } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap'; 
import Menu from './Components/MenuComponent'; // Corrigida a importação duplicada
import { DISHES } from './shared/dishes'; // Certifique-se de que o arquivo dishes.js está corretamente configurado

function App() { 
  // Estado inicial para os pratos
  const [dishes] = useState(DISHES);

  return ( 
    <div> 
      {/* Navbar */}
      <Navbar dark color="primary" expand="md"> 
        <div className="container"> 
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand> 
          <div>Aluno: Fulano de Tal</div> 
        </div> 
      </Navbar> 

      {/* Componente Menu */}
      <Menu dishes={dishes} /> 
    </div> 
  ); 
} 

export default App;
