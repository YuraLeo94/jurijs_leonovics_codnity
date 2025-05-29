import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Album from "./pages/album/index";
import Contact from "./pages/Contact";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTopButton from "./components/atoms/ScrollToTopButton";

function App() {
  return (
    <div className="layout">
      <Header />
      <main className="container" style={{ paddingTop: 32 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<Album />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
