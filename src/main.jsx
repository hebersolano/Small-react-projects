// import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import DevProfile from "./DevProfile/DevProfile.jsx";
import DateCounter from "./DateCounter/DateCounter.jsx";
import FlashCards from "./FlashCards/FlashCards.jsx";
import DateCounter_v2 from "./DateCounter_v2/DateCounter_v2.jsx";
import Accordion from "./Accordion/Accordion_v2.jsx";
import TipCalculator from "./TipCalculator/TipCalculator.jsx";
import EatAndSplit from "./Eat-n-Split/Eat-n-Split.jsx";
import CurrencyConverter from "./CurrencyConverter/CurrencyConverter.jsx";
import Geolocation from "./CurrencyConverter/useGeolocation/Geolocation.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<Geolocation />);
