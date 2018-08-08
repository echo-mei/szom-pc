import axios from "axios";

export const getUserInfo = token => {
  return axios.request({
    url: "/user",
    params: {
      token
    },
    method: "get"
  });
};
