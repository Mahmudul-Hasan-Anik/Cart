import Header from "./Components/Header";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import { Cart, Home, Product, Registration, Wishlist,Login, Dashboard } from "./Pages/PageIndex";

function App() {
  return (
    <>
     <BrowserRouter>
     <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wish" element={<Wishlist />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
