import { DELETEITEM } from "../contants/types";

export const deleteItem = (payload) => ({
  type: DELETEITEM,
  payload: payload,
});
