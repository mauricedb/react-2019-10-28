import React from "react";
import "./App.css";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Cat from "./components/Cat";
import Dog from "./components/Dog";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/cat">Cat</Link>
          <span> | </span>
          <Link to="/cat/zorro">Zorro</Link>
          <span> | </span>
          <Link to="/dog">Dog</Link>
          <span> | </span>
          <Link to="/dog/pluto">Pluto</Link>
        </header>

        <Switch>
          <Route path="/" exact render={() => <div>Home</div>} />
          <Route path="/cat" exact component={Cat} />
          <Route path="/cat/:catName" component={Cat} />
          <Route path="/dog" exact component={Dog} />
          <Route path="/dog/:dogName" render={() => <Dog />} />
          <Route path="/dog2" />
          <Route render={() => <div>Page not found</div>} />
        </Switch>

        {/* <Cat />
        <Dog /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
