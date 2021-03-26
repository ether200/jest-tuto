import axios from "axios";

export const getDataFromApi = (url) => {
  return axios.get(url).then(({ data }) => {
    return data;
  });
};

export const getDataFromApi2 = (url) => axios(url);
