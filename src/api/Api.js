import axios from "axios";

const BASE_URL = "http://localhost:3001";

const options = {
  headers: { Authorization: "Bearer " },
  validateStatus: (status) => 199 < status && status < 499,
};

export const setAuthToken = (token) => {
  options.headers.Authorization = "Bearer " + token;
  localStorage.setItem("access_token", token);
};

export const validateToken = (token) => {
  return axios.post(
    `${BASE_URL}/auth/validate`,
    { access_token: token },
    options
  );
};

export const registerUser = (data) => {
  return axios.post(`${BASE_URL}/auth/register`, data, options);
};

export const loginUser = (data) => {
  return axios.post(`${BASE_URL}/auth/login`, data, options);
};

export const getCompanies = () => {
  return axios.get(`${BASE_URL}/companies`, options);
};
