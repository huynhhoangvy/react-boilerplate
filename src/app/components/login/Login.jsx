import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/actionCreators";
import { useHistory } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onClickLogin = () => {
    dispatch(login());
    history.push("/user");
  };

  return (
    <div>
      <button onClick={onClickLogin}>login</button>
    </div>
  );
};

export default Login;
