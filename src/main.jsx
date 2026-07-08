import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.js"; 
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <ScrollToTop/>
        <App />
        <ToastContainer theme="colored" position="top-right" autoClose={3000}   />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
