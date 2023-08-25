import axios from "axios";
import { token } from "./privateAPI";

const publicAPI = axios.create({
  baseURL: "https://powerpulse-y0gd.onrender.com/",
});

export const login = async (body) => {
  try {
    const { data } = await publicAPI.post("api/users/signin", body);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const register = async (body) => {
  try {
    const { data } = await publicAPI.post("api/users/signup", body);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
