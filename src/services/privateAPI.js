import axios from "axios";

const privateAPI = axios.create({
  baseURL: "https://powerpulse-y0gd.onrender.com/",
});

export const token = {
  set(token) {
    privateAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    privateAPI.defaults.headers.common.Authorization = "";
  },
};

export const logout = async () => {
  try {
    const { data } = await privateAPI.post("api/auth/sign-out");
    return data;
  } finally {
    token.unset();
  }
};

export const refresh = async () => {
  try {
    const { data } = await privateAPI.get("api/users/current");
    token.unset();
    if (data.token) {
      token.set(data.token);
    }
    return data;
  } catch (error) {
    token.unset();
    throw error;
  }
};
