import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Cabecalho from './components/Cabecalho.js';
import Inicio from './components/Inicio.js';
import Servicos from './components/Servicos.js';
import Portfolio from './components/Portfolio.js';
import Precos from './components/Precos.js';
import Contato from './components/Contato.js';
import Rodape from './components/Rodape.js';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Cabecalho />

          <Route path="/" exact component={Inicio} />
          <Route path="/servicos" component={Servicos} />
          <Route path="/portfolios" component={Portfolio} />
          <Route path="/precos" component={Precos} />
          <Route path="/contato" component={Contato} />
        
          <Rodape />
      </div>
    </BrowserRouter>
  );
}

export default App;
