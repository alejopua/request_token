import axios from "axios";
import "dotenv/config";
import process from "process";

// Obtener la API key de Firebase desde las variables de entorno

const resquestPost = async () => {
  const config = axios.create({
    baseURL: process.env.VITE_SOME_ENDPOINT_RESPOT,
    params: {
      grant_type: process.env.VITE_SOME_GRANT_TYPE,
      client_id: process.env.VITE_SOME_CLIENT_ID,
      client_secret: process.env.VITE_SOME_CLIENT_SECRETET,
      refresh_token: process.env.VITE_SOME_REFRESH_TOKEN,
    },
  });

  try {
    const response = await config.post();
    return response.data.access_token;
  } catch (error) {
    console.error(error);
  }
};

const access_token = await resquestPost();

const resquestGet = async (access_token) => {
  const config = axios.create({
    baseURL: process.env.VITE_SOME_ENDPOINT_RESGET,
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  try {
    const response = await config.get();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

resquestGet(access_token);
