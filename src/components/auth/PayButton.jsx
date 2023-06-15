import React from "react";
import { useSelector } from "react-redux";
import { url } from "./api";
import { handlePayements } from "../../features/payment";

const PayButton = ({ cartItems, cartTotalAmount }) => {
  const user = useSelector((state) => state.auth);

  const body = {
    total_amount: amount,
    currency: "XAF",
    transaction_id: "pu-" + Date.now(),
    return_url: `https://afd8-129-0-76-113.ngrok-free.app/checkout`,
    notify_url: `https://afd8-129-0-76-113.ngrok-free.app`,
    payment_country: "CM",
  };

  return (
    <button
      onClick={() => handlePayements(body)}
      className="bg-indigo-500 font-semibold hover:bg-red-900 py-3 text-sm text-white uppercase w-full"
    >
      Check out console.log('handle');
    </button>
  );
};

export default PayButton;
