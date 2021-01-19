// import types

import { DELETEITEM, TESTING } from "../contants/types";

// initial state

const initialState = {
  items: [
    {
      id: "bd7acbea",
      title: "First Item",
    },
    {
      id: "3ac68afc",
      title: "Second Item",
    },
    {
      id: "58694a0f",
      title: "Third Item",
    },
    {
      id: "bd7acbea1",
      title: "4th Item",
    },
    {
      id: "3ac68afc1",
      title: "5th Item",
    },
    {
      id: "58694a0f1",
      title: "6th Item",
    },
  ],
  checking: false,
};

// reducerTodolist
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // case TESTING:
    //   console.log(state);
    //   return state;
    case DELETEITEM:
      return {
        ...state,
        items: state.items.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};
