import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/reduxStore";

let render = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App store={store} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

render(store);

store.subscribe(() => {
  render(store);
});
