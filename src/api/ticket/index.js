import { host } from "../api";

export const getAllSeats = async () => {
  const response = await host
    .get("/api/ticket/getallseats")
    .then((res) => res.data)
    .catch((error) => error);

  return response;
};

export const getAllFloors = async () => {
  const response = await host
    .get("/api/ticket/getallfloors")
    .then((res) => res.data)
    .catch((error) => error);
    return response
};


export const getAllRows = async () => {
  const response = await host
    .get("/api/ticket/getallrows")
    .then((res) => res.data)
    .catch((error) => error);
    return response
};


export const getAllLines = async () => {
  const response = await host
    .get("/api/ticket/getalllines")
    .then((res) => res.data)
    .catch((error) => error);
    return response
};


