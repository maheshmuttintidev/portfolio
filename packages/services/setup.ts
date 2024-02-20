import axios from "axios";

let axiosObject = axios.create();

axiosObject.defaults.baseURL = "https://api.notion.com/v1";
const secretKey = process.env.NOTION_SECRET_KEY;

axiosObject.defaults.headers.common = {
  Accept: "application/json",
  "Notion-Version": "2022-06-28",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Authorization: `Bearer ${secretKey}`,
};

axiosObject.interceptors.request.use(async (config) => {
  console.log(`Request: ${config.method} - ${config.baseURL}${config.url}`);
  return config;
});

axiosObject.interceptors.response.use(
  async (response) => {
    if (response.status === 200) {
      console.log(`status code: ${response.status}`);
    }
    return response;
  },
  async (error) => {
    if (error.message === "Network error") {
      console.log("Network error");
    }
    console.log(`finally error came: ${error}`);
    return Promise.reject(error);
  }
);

export { axiosObject };
