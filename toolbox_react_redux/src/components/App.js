import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Menu";
import textForm from "./textForm";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = props => (
  <BrowserRouter>
    <Menu />
    <div id="margen">
      <Route exact path="/" component={textForm} />
    </div>
  </BrowserRouter>
);

export default App;
