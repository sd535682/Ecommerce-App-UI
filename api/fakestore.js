import axios from "axios";

const storeURL = "https://fakestoreapi.com";
export const fetchAPI = () =>
  axios({
    method: "GET",
    url: `${storeURL}/products`,
  })
    .then((res) => res)
    .catch((err) => console.error('Found Err :',err));
