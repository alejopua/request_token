import "dotenv/config";
import process from "process";

async function requestPostInfo() {
  const endpoint = process.env.VITE_SOME_ENDPOINT_RESPOT;
  const params = new URLSearchParams();
  params.append("grant_type", process.env.VITE_SOME_GRANT_TYPE);
  params.append("client_id", process.env.VITE_SOME_CLIENT_ID);
  params.append("client_secret", process.env.VITE_SOME_CLIENT_SECRETET);
  params.append("refresh_token", process.env.VITE_SOME_REFRESH_TOKEN);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      body: params,
    });

    if (!response.ok) {
      throw new Error("Fail POST.");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error send POST:", error);
  }
}

const responseData = await requestPostInfo();
const accessToken = responseData.access_token;

async function requestGetDataUser(accessToken) {
  const endpoint = process.env.VITE_SOME_ENDPOINT_RESGET;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await fetch(endpoint, {
      headers: headers,
    });

    if (!response.ok) {
      throw new Error("Error petition GET");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

// call the function to get the data of the user
const data = await requestGetDataUser(accessToken);
console.log(data); // this data contains the information of the user
