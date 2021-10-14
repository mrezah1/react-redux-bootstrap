import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/cart/:id?" component={Cart} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
