import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store } from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <h1>hello</h1>
      </BrowserRouter>
    </Provider>
);
