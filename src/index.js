import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/state";

let render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

render();

store.subscribe(render);
