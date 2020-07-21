import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataRequest } from "../../redux/actions/actionCreators";

const Api = () => {
  const data = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { results } = data;

  useEffect(() => {
    dispatch(getDataRequest());
    console.log("run");
  }, []);

  const mapFunc = (x, i) => (
    <div key={x.id.value}>
      <h1>{x.gender}</h1>
      <h1>{x.name.first}</h1>
      <h1>{x.name.last}</h1>
      <img src={x.picture.medium} alt="shit" />
    </div>
  );

  return (
    <div>
      {(data.results || []).map(mapFunc)}
      {/* {results.map(mapFunc)} */}
    </div>
  );
};

export default Api;
