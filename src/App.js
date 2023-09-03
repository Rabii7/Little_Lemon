import { useReducer } from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/assets/components/Homepage";
import About from "../src/assets/components/Aboutpage";
import Menu from "../src/assets/components/Menupage";
import Reservations from "../src/assets/components/Reservationspage";
import Orderonline from "../src/assets/components/Orderonlinepage";
import Login from "../src/assets/components/Loginpage";
import ConfirmedBooking from "./assets/components/ConfirmedBooking";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  /*This section replace the unworking API */
  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };
  const submitAPI = function (formData) {
    return true;
  };
  /* */

  const initializeTimes = () => {
    return fetchAPI(new Date());
  };
  function updateTimes(availableTimes, date) {
    // // switch (action.type) {
    // //   case 'increment':
    // //     return { count: state.count + 1 };
    // //   case 'decrement':
    // //     return { count: state.count - 1 };
    // //   default:
    // //     throw new Error();
    // // }
    // console.log(1);
    // console.log(date);
    if (new Date() === new Date(date)) {
      // console.log(new Date());
      // console.log(new Date(date));
      return fetchAPI(new Date(date));
    } else {
      // console.log(2);
      // console.log("Else");
      // console.log(date);
      return fetchAPI(new Date());
    }
  }
  function submitForm(data) {
    return submitAPI(data);
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/reservations"
            element={
              <Reservations
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
              />
            }
          />
          <Route exact path="/oredronline" element={<Orderonline />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route
            exact
            path="/confirmedbooking"
            element={<ConfirmedBooking />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
