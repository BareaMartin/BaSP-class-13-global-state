import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import "./reset.css";
import "./index.css";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";

// After
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
