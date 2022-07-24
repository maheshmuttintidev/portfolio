import { axiosObject } from "./setup";

// function createPage(payload: any) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let endPoint = "/page";
//       let apiPayload = { ...payload };
//       let response = await axiosObject.post(endPoint, apiPayload);
//       console.log("response", response);
//       if (response) {
//         resolve(response);
//       }
//       resolve(null);
//     } catch (err) {
//       reject(err);
//     }
//   });
// }

// function getPosts() {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let endPoint = "/pages";
//       let response = await axiosObject.get(endPoint);
//       console.log("response", response);
//       if (response) {
//         resolve(response);
//       }
//       resolve(null);
//     } catch (err) {
//       reject(err);
//     }
//   });
// }

var config = {
  method: "get",
  url: "https://api.notion.com/v1/pages/df991b51-62c2-4a85-81a4-98749f5ec877",
  headers: {
    "Notion-Version": "2022-02-22",
    Authorization: "Bearer secret_5ytLqUHUO5argNM2pAo8sPA7iq9QmNS5WsmsJOD6Xbw",
  },
};

function getPortfolio() {
  return new Promise(async (resolve, reject) => {
    try {
      let endPoint = "/pages/df991b51-62c2-4a85-81a4-98749f5ec877";
      let response = await axiosObject.get(endPoint);
      console.log("response", response);
      if (response) {
        resolve(response.data);
      }
      resolve(null);
    } catch (err) {
      reject(err);
    }
  });
}

export {
  //  createPage,
  // getPosts,
  getPortfolio,
};
