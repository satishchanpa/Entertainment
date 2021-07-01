import React, { useEffect } from "react";
import "./layout.css";
import * as actions from "../store/action";
import { useSelector, useDispatch } from "react-redux";

function Recommendation() {
  const dispatch = useDispatch();

  const reduxState = useSelector((obj) => obj);

  useEffect(() => {
    dispatch(actions.getdata());
  }, []);

  useEffect(() => {
    console.log(reduxState.recommendations);
  }, [reduxState]);

  const handleAdd = (val) => {
    dispatch(actions.addData(val));
  };

  return (
    <div className="my_List">
      <h3> Your Recommondation</h3>

      {reduxState.recommendations.slice(0, 6).map((d, index) => {
        return (
          <div className="data_block" key={d.id}>
            <h6>{d.title}</h6>
            <img
              src={`https://image.tmdb.org/t/p/original${d.poster_path}`}
              alt="description of move"
              height={70}
              width={70}
            />
            <br></br>

            <button onClick={() => handleAdd(d, index)}> Add </button>
          </div>
        );
      })}
    </div>
  );
}

export default Recommendation;
