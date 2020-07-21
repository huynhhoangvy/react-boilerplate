import * as constanst from "../../utils/constants";

export const user = (state = {}, { type, data }) => {
  switch (type) {
    default:
      return state;
    case constanst.REGISTER:
      return data;
    case constanst.LOGIN:
      return { ...state, isAuthenticated: true };
    case constanst.LOGOUT:
      return { ...state, isAuthenticated: false };

    case constanst.GET_DATA_SUCCESS:
      return data;
  }
};
