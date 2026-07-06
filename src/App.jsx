import { Route, Routes } from "react-router-dom";
import "./App.css";
// import AkkaAnnaCarousel from "./components/AkkaAnnaCarousel";
import Footer from "./components/Footer";
import UserInfo from "./components/UserInfo";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-info" element={<UserInfo />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
