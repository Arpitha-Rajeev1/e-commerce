import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { Routes, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// const promise = loadStripe(
//   "pk_test_51KIFYgSB1CVs921IlN5AJFQgelDyWWKB7J5mirVBRtqYzyuxmK0G97YEfz4BpORUjDpCwh09nyrPmXPdXsD658rB00S0iLmOuU"
// );

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {

      if (authUser) {
        // the user just loggin in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user just logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM naming convention - Block, element, and modifier
    <div className="app">
      {/* retrieve the Header every time by default */}

      <Routes>
        <Route path="/orders" element={<> <Header /> <Orders /> </>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/checkout"
          element={
            <>
              <Header /> <Checkout />
            </>
          }
        ></Route>
        <Route
          path="/payment"
          element={
            <>
              <Header />
              {/* <Elements stripe={promise}> */}
                {/* <Payment /> */}
              {/* </Elements> */}
            </>
          }
        ></Route>
        <Route
          path="/"
          element={
            <>
              <Header /> <Home />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
