import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
