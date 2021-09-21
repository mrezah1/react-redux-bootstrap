import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <h2>Custom Market</h2>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
