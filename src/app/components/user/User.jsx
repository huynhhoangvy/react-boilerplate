import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../redux/actions/actionCreators";

const User = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onClickLogout = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <div>
      {user.isAuthenticated && <>welcome new user</>}
      <button onClick={onClickLogout}>logout</button>
    </div>
  );
};

export default User;
