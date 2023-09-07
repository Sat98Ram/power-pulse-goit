import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "modern-normalize";
import "./assets/global.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { store, persistor } from "@/redux/store";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(


  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter basename="/power-pulse-goit">
        <App />
        <ToastContainer />
      </BrowserRouter>
    </PersistGate>
  </Provider>

);
