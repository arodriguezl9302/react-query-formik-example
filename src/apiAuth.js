import axios from "./instance";

export const authLogin = async (userData) => {
  const { data } = await axios.post("/users/authenticate", userData);
  console.log(data);
  return data;
};

export const createDoctor = async (userData) => {
  const { data } = await axios.post("/users/create-doctor", userData);
  console.log(data);
  return data;
};
