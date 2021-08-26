import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
store.subscribe(() => console.log(store.getState()));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
