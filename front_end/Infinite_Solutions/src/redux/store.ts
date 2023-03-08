import { legacy_createStore as createStore } from "redux";

interface User {
    _id: string;
    name: string;
    email: string;
    serviceNo: number;
    reviewNo: number;
    location: string;
    isBlocked: boolean;
    imageUrl: string;
  }

  interface RootState {
    user: User | null;
  }

  const SET_USER = "SET_USER";

  const initialState: RootState = {
    user: null,
  };

  function rootReducer(state = initialState, action: any) {
    switch (action.type) {
      case SET_USER:
        return {
          ...state,
          user: action.payload,
        };
      default:
        return state;
    }
  }

  const store = createStore(rootReducer);