// import types

import {
  ADDITEMTOLIST,
  DELETEITEM,
  READITEM,
  TESTING,
  UPDATEITEM,
} from "../contants/types";

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
    {
      id: "58694a0f2",
      title: "7th Item",
    },
    {
      id: "bd7acbea123",
      title: "8 Item",
    },
    {
      id: "3ac68afc123",
      title: "9 Item",
    },
    {
      id: "58694a0f123",
      title: "10 Item",
    },
    {
      id: "bd7acbea1123",
      title: "11 Item",
    },
    {
      id: "3ac68afc1123",
      title: "12 Item",
    },
    {
      id: "58694a0f1123",
      title: "13 Item",
    },
    {
      id: "58694a0f2123",
      title: "14 Item",
    },
    {
      id: "bd7acbeaasd",
      title: "15 Item",
    },
    {
      id: "3ac68afcasd",
      title: "16 Item",
    },
    {
      id: "58694a0fasd",
      title: "17 Item",
    },
    {
      id: "bd7acbea1asd",
      title: "18 Item",
    },
    {
      id: "3ac68afc1asd",
      title: "19 Item",
    },
    {
      id: "58694a0f1456",
      title: "20 Item",
    },
  ],
  item: null,
  checking: false,
  eventList: null,
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
    case READITEM:
      let arr = state.items.filter((item) => {
        return item.id === action.payload;
      });
      //   console.log(arr);
      //
      //
      arr = arr.values();
      //
      //
      for (let x of arr) {
        arr = x;
      }
      //   console.log(arr);
      return {
        ...state,
        item: arr,
      };
    case UPDATEITEM:
      return {
        ...state,
        items: state.items.map((item) => {
          return item.id === action.payload.id ? action.payload : item;
        }),
        item: null,
      };
    case ADDITEMTOLIST:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    default:
      return state;
  }
};
