import axios from "axios";

export const handlePayements = (amount) => {
  const apikey = process.env.REACT_APP_API_USERNAME;
  const apipassword = process.env.REACT_APP_API_PASSWORD;
  const authorization = btoa(`${apikey}: ${apipassword}`);
  const base_url = "https://gateway.payunit.net";

  const header = {
    "x-api-key": process.env.REACT_APP_PAYUNIT_SANDBOX_KEY,
    mode: "test",
    "Content-Type": "application/json",
    Authorization: `Basic ${authorization}`,
  };

  const body = {
    total_amount: amount,
    currency: "XAF",
    transaction_id: "pu-" + Date.now(),
    return_url: `https://1741-154-72-169-44.ngrok-free.app/checkout`,
    notify_url: `https://1741-154-72-169-44.ngrok-free.app/cart`,
    payment_country: "CM",
  };

  axios({
    url: `${base_url}/api/gateway/initialize`,
    headers: header,
    data: body,
    method: "POST",
  })
    .then((response) => {
      const data = response.data;

      console.log(data);
      console.log(data.message);

      if (data.statusCode === 200) {
        window.location.href = data.data.transaction_url;
      }
      //   if (data.status === "FAILED") {
      //   }
    })
    .catch((error) => {
      console.log(error);
    });
};
