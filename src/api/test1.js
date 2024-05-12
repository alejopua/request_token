import axios from "axios";
import "dotenv/config";
import process from "process";

const instance = axios.create({
  baseURL: process.env.VITE_SOME_ENDPOINT_RESPOT,
  params: {
    grant_type: process.env.VITE_SOME_GRANT_TYPE,
    client_id: process.env.VITE_SOME_CLIENT_ID,
    client_secret: process.env.VITE_SOME_CLIENT_SECRETET,
    refresh_token: process.env.VITE_SOME_REFRESH_TOKEN,
  },
});

// Usamos la instancia personalizada para hacer la solicitud POST
instance
  .post()
  .then((response) => {
    console.log("Respuesta del servidor:", response.data);
  })
  .catch((error) => {
    console.error("Error en la solicitud:", error);
  });
