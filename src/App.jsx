import { Route, Routes } from "react-router-dom";
import "./App.css";
import AkkaAnnaCarousel from "./components/AkkaAnnaCarousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-info" element={<UserInfo />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Header />
      <AkkaAnnaCarousel />
      <UserInfo />
      <Footer />
    </>
  );
}

export default App;
