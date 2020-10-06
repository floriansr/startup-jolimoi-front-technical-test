import axios from 'axios';

const API = axios.create({
  baseURL:
    'https://cors-anywhere.herokuapp.com/https://skincare-api.herokuapp.com',
});

API.interceptors.request.use(
  ({ headers, ...config }) => ({
    ...config,
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  }),
  (error) => {
    return Promise.reject(error);
  }
);

export default class APIManager {
  static async lookingForProducts(content) {
    const res = await API.get(`product?q=${content}`);
    return res.data;
  }
}
