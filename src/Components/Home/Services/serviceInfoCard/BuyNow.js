import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Menubar from "../../../CommonComponents/Menubar/Menubar";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(
  "pk_test_51IfTqWDWHpMdIYYVcomyFkcyrlQW5OVTG97kTQCmNdEGRkxJYWPYE5k9KuElDwOawUMNnHIouSjtCU6XvgKEHyiw00sFVxAADQ"
);

const BuyNow = () => {
  return (
    <div className="container">
      <Menubar></Menubar>
      <Elements stripe={stripePromise}>
        <CheckOutForm></CheckOutForm>
      </Elements>
    </div>
  );
};

export default BuyNow;
