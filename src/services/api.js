import axios from "axios";

const instance = axios.create({
  baseURL: "https://661054110640280f219cd815.mockapi.io/",
});

const fetchAllPickups = async () => {
  const { data } = await instance.get("/advert");
  return data;
};

export { fetchAllPickups };
