import axios from "./api.request";

export const getDynamic = () => {
  return axios.request({
    url: "/dynamic",
    method: "get"
  });
};
