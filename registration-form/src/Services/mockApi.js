import axios from "axios";

export let API_URL =
  "https://64cc86e02eafdcdc8519ed7a.mockapi.io/employee/hooks";

export const getData = async () => {
  const response = await axios({
    method: "GET",
    url: API_URL,
  });
  return response;
};
export const postData = async (data) => {
  const response = await axios({
    method: "POST",
    url: API_URL,
    data: data,
  });
  return response;
};
export const getId = async (id) => {
  const response = await axios({
    method: "GET",
    url: API_URL + "/" + id,
  });
  return response;
};
export const deleteData = async (id) => {
  console.log(id);
  const response = await axios({
    method: "DELETE",
    url: API_URL + "/" + id,
    data: id,
  });
  return response;
};
export const editData = async (data,id) => {
  console.log(data,id);
  const response = await axios({
    method: "PUT",
    url: API_URL + "/" + id,
    data: data,
  });
  return response;
};
