import "./App.css";
import Appointment from "./components/Appointment";
import Aboutus from "./components/Aboutus";
import AfterHeader from "./components/AfterHeader";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import WhatPeopleSay from "./components/WhatPeopleSay";
import WhyChoose from "./components/WhyChoose";

function App() {

  return (
    <main >
      <Header/>
      <AfterHeader/>
      <Services />
      <Aboutus />
      <WhyChoose />
      <WhatPeopleSay />
      <Appointment />
      <Footer />
    </main>
  );
}

export default App;
