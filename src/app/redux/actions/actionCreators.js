import * as constants from "../../utils/constants";

export const register = () => {
  return {
    type: constants.REGISTER,
  };
};

export const login = () => {
  return {
    type: constants.LOGIN,
  };
};

export const logout = () => {
  return {
    type: constants.LOGOUT,
  };
};

export const getDataRequest = () => {
  return {
    type: constants.GET_DATA_REQUEST,
  };
};

export const getDataSuccess = (data) => {
  return {
    type: constants.GET_DATA_SUCCESS,
    data,
  };
};

export const getDataError = (err) => {
  return {
    type: constants.GET_DATA_ERROR,
    err,
  };
};
