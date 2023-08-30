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
    const { data } = await privateAPI.post("/api/users/signout");
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

export const getExercisesCategories = async () => {
  const respose = await Promise.all([
    privateAPI.get("api/exercises/bodyparts"),
    privateAPI.get("api/exercises/muscles"),
    privateAPI.get("api/exercises/equipments"),
  ]);
  const [bodyparts, muscles, equipments] = respose.map((e) => e.data);
  const categories = { bodyparts, muscles, equipments };
  return categories;
};

export const getExerciseList = async (params) => {
  const { data } = await privateAPI.get("api/exercises", params);
  return data;
};

export const getProductsCategories = async () => {
  const { data } = await privateAPI.get("api/products");
  return data;
};

export const getProductsList = async () => {
  const { data } = await privateAPI.get("api/products/admissible");
  return data;
};

export const getDiariesByDate = async (currentDate) => {
  const { data } = await privateAPI.get("api/diaries/daily/" + currentDate);
  return data;
};

export const productAddDiary = async (body) => {
  const { data } = await privateAPI.post("api/diaries/product/add", body);
  return data;
};
export const exerciseAddDiary = async (body) => {
  const { data } = await privateAPI.post("api/diaries/exercise/add", body);
  return data;
};

///exercise/add
export const updateBody = async (body) => {
  const { data } = await privateAPI.post("api/users/body", body);
  return data;
};
