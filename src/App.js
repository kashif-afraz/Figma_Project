import "./App.css";
import AfterHeader from "./components/AfterHeader";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
      <div className="app_div">
        <Header />
        <AfterHeader />
        <Footer />
      </div>
  );
}

export default App;
