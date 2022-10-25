import React from "react";
import "./index.css";
import App from './App';
import reportWebVitals from "./reportWebVitals";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider} from "./StateProvider";
import reducer, { initialState } from "./reducer";

render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </Router>,
  document.getElementById("root")
);
reportWebVitals();
