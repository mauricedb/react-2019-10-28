import React from "react";
import "./App.css";
import PersonEditor from "./components/PersonEditor";
import { Provider } from "react-redux";

import store from "./store/basicStore";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PersonEditor />
      </div>
    </Provider>
  );
}

export default App;
