import "./App.css";
import AfterHeader from "./components/AfterHeader";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";

function App() {
  // const data = [
  //   {
  //     svg: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="85"
  //         height="86"
  //         viewBox="0 0 85 86"
  //         fill="none"
  //       >
  //         <path
  //           d="M77.1875 42.8833C77.1875 62.0407 61.6574 77.5708 42.5 77.5708C23.3426 77.5708 7.8125 62.0407 7.8125 42.8833C7.8125 23.7259 23.3426 8.1958 42.5 8.1958C61.6574 8.1958 77.1875 23.7259 77.1875 42.8833Z"
  //           stroke="#89DB7B"
  //           stroke-width="5"
  //         />
  //         <path
  //           d="M42.5 19.8623L49.4062 33.8519L64.8125 36.154L53.6562 46.9561L56.3125 62.3623L42.5 55.1019L28.6875 62.3623L31.3438 46.9561L20.1875 36.154L35.5938 33.8519L42.5 19.8623Z"
  //           fill="#89DB7B"
  //         />
  //       </svg>
  //     ),
  //     para: 'kashif afraz',
  //     headi: 'im leanig in rawalpindi'
  //   },

  //   {
  //     svg: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="85"
  //         height="86"
  //         viewBox="0 0 85 86"
  //         fill="none"
  //       >
  //         <path
  //           d="M77.1875 42.8833C77.1875 62.0407 61.6574 77.5708 42.5 77.5708C23.3426 77.5708 7.8125 62.0407 7.8125 42.8833C7.8125 23.7259 23.3426 8.1958 42.5 8.1958C61.6574 8.1958 77.1875 23.7259 77.1875 42.8833Z"
  //           stroke="#89DB7B"
  //           stroke-width="5"
  //         />
  //         <path
  //           d="M42.5 19.8623L49.4062 33.8519L64.8125 36.154L53.6562 46.9561L56.3125 62.3623L42.5 55.1019L28.6875 62.3623L31.3438 46.9561L20.1875 36.154L35.5938 33.8519L42.5 19.8623Z"
  //           fill="#89DB7B"
  //         />
  //       </svg>
  //     ),
  //     para: 'wasif afraz',
  //     headi: 'im leanig in rawalpindi to'
  //   }
  // ];

  return (
    <div className="app_div">
      <Header />
      <AfterHeader/>
      <Services />
      <Footer />
    </div>
  );
}

export default App;
