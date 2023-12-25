import './styles/app.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ShopContextProvider } from './context/index';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';
import { CartPage } from './pages/CartPage';
import { ShippingPage } from './pages/ShippingPage';
import { MyOrder } from './pages/OrderPage';
import { OrderDetails } from './pages/OrderPage/OrderDetails';

export const App = () => {
  return (
    <ShopContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menupage" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contactus" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/myorder" element={<MyOrder />} />
          <Route path="/orderdetails" element={<OrderDetails />} />
        </Routes>
        <Footer />
      </Router>
    </ShopContextProvider>
  );
};
