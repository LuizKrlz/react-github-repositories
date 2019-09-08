import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Routes() {
  return (
    <BrowserRouter>
      {/* o Switch garantir que apenas uma rota seja chamado por vez */}
      <Switch>
        {/* / é necessario pq o react-router-dom nao procura por igualdade, ele procura a primeira referencia */}
        <Route exact path="/" component={Main} />
        <Route exact path="/repository/:repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
