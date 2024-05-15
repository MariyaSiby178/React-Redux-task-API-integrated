import { type } from "@testing-library/user-event/dist/type";
import * as Type from "../Type/Type";

export const getDataReq = () => {
  return {
    type: Type.GET_REQUEST,
  };
};
export const getDataSuc = (data) => {
  console.log(data);
  return {
    type: Type.GET_SUCCESS,
    payload: data,
  };
};
export const getDataFail = (data) => {
  console.log(data);
  return {
    type: Type.GET_FAILED,
    payload: data,
  };
};
export const postDataReq = (data) => {
  console.log(data);
  return {
    type: Type.POST_REQUEST,
    payload: data,
  };
};
export const postDataSuc = (data) => {
  console.log(data);
  return {
    type: Type.POST_SUCCESS,
    payload: data,
  };
};
export const postDataFail = (data) => {
  console.log(data);
  return {
    type: Type.POST_FAILED,
    payload: data,
  };
};
export const getIdReq = (id) => {
  console.log(id);
  return {
    type: Type.GET_ID_REQUEST,
    payload: id,
  };
};
export const getIdSuc = (data) => {
  console.log(data);
  return {
    type: Type.GET_ID_SUCCESS,
    payload: data,
  };
};
export const getIdFail = (data) => {
  console.log(data);
  return {
    type: Type.GET_ID_FAILED,
    payload: data,
  };
};
export const deleteDataReq = (id) => {
  console.log(id);
  return {
    type: Type.DELETE_REQUEST,
    payload: id,
  };
};
export const deleteDataSuc = (id, data) => {
  console.log(id, data);
  return {
    type: Type.DELETE_SUCCESS,
    payload: id,
  };
};
export const deleteDataFail = (data) => {
  console.log(data);
  return {
    type: Type.DELETE_FAILED,
    payload: data,
  };
};
export const editDataReq = (data, id) => ({
  type: Type.PUT_REQUEST,
  payload: { data, id },
});

export const editDataSuc = (data) => {
  console.log(data);
  return {
    type: Type.PUT_SUCCESS,
    payload: data,
  };
};
export const editDataFail = (data) => {
  console.log(data);
  return {
    type: Type.PUT_FAILED,
    payload: data,
  };
};
