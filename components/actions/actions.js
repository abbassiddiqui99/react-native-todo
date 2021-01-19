import {
  ADDITEMTOLIST,
  DELETEITEM,
  READITEM,
  UPDATEITEM,
} from "../contants/types";

export const deleteItem = (payload) => ({
  type: DELETEITEM,
  payload: payload,
});
export const readItem = (payload) => ({
  type: READITEM,
  payload: payload,
});
export const updateItem = (payload) => ({
  type: UPDATEITEM,
  payload: payload,
});
export const addItemToList = (payload) => ({
  type: ADDITEMTOLIST,
  payload: payload,
});
