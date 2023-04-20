import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import Shop from "./Pages/Shop/Shop";
import Navbar from "./components/Navbar";
import { ShopContextProvider } from "./context/shop-context.jsx";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route element={<Shop />} path="/" />
            <Route element={<Cart />} path="/cart" />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
