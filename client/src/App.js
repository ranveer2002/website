import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsCondition from "./components/TermsCondition";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import FitToPlay from "./pages/FitToPlay";
import Player from "./pages/Player+";
import PhysioConnect from "./pages/PhysioConnect";
import Products from "./pages/Products";
import FooterNav from "./components/FooterNav";
import Doctors from "./pages/Doctors";
import DoctorProfile from "./pages/DoctorProfile";
import ProductPreview from "./components/ProductPreview";
import AboutUs from "./components/AboutUs";
import Payment1 from "./components/Payment1";
import Payment2 from "./components/Payment2";
import Payment3 from "./components/Payment3";
import Payment4 from "./components/Payment4";
import DateAndTime from "./components/DateAndTime";

function App() {
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  return (
    <div>
      {isLoginClicked ? (
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                isLoginClicked={isLoginClicked}
                setIsLoginClicked={setIsLoginClicked}
              />
            }
          />
        </Routes>
      ) : (
        <>
          <Navbar
            isLoginClicked={isLoginClicked}
            setIsLoginClicked={setIsLoginClicked}
          />
          <Routes>
            <Route
              path="/"
              element={<Home setIsLoginClicked={setIsLoginClicked} />}
            />
            <Route path="/fit-to-play" element={<FitToPlay />} />
            <Route path="/player+" element={<Player />} />
            <Route path="/physioconnect" element={<PhysioConnect />} />
            <Route path="/products" element={<Products />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctorprofile" element={<DoctorProfile />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms&condition" element={<TermsCondition/>} />
            <Route path="/product-preview" element={<ProductPreview/>} />
            <Route path="/aboutus" element={<AboutUs/>} />
            <Route path="/payment1" element={<Payment1/>} />
            <Route path="/payment2" element={<Payment2/>} />
            <Route path="/payment3" element={<Payment3/>} />
            <Route path="/payment4" element={<Payment4/>} />
            <Route path="/dateandtime" element={<DateAndTime/>} />
          </Routes>
          <FooterNav />
        </>
      )}
    </div>
  );
}

export default App;
