import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import { Cart, Home, Product, Registration, Wishlist,Login, Dashboard, Profile, Blog } from "./Pages/PageIndex";
import { DashCatagory, DashHome, DashProduct, DashUser } from "./Pages/Dashboard/DashIndex";


function App() {
  return (
    <>
     <BrowserRouter>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wish" element={<Wishlist />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} >
              <Route path="/dashboard/product" element={<DashProduct />} />
              <Route path="/dashboard/catagory" element={<DashCatagory />} />
              <Route path="/dashboard/home" element={<DashHome />} />
              <Route path="/dashboard/user" element={<DashUser />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
