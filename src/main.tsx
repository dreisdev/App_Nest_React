import ReactDOM from "react-dom/client";
import Main from "./pages/Main";
import "./styles/index.scss";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <Main />
  </Provider>
);
