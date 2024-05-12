import axios from "axios";
import "dotenv/config";
import process from "process";

// Obtener la API key de Firebase desde las variables de entorno

const configPost = axios.create({
  baseURL: process.env.VITE_SOME_ENDPOINT_RESPOT,
  params: {
    grant_type: process.env.VITE_SOME_GRANT_TYPE,
    client_id: process.env.VITE_SOME_CLIENT_ID,
    client_secret: process.env.VITE_SOME_CLIENT_SECRETET,
    refresh_token: process.env.VITE_SOME_REFRESH_TOKEN,
  },
});

let access_token;

configPost
  .post()
  .then((response) => {
    access_token = response.data.access_token;
  })
  .catch((error) => {
    console.error(error);
  });

console.log(access_token);
setTimeout(() => {}, 1000);
