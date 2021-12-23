import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Footer from "components/Footer";
import Header from "components/Header";
import Home from "pages/Home";
import ProductDetail from "pages/ProductDetail";
import Cart from "pages/cart";
import sweetAlertMaker from "utils/sweetAlertMaker";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/404" element={<p>Not Found!</p>} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
