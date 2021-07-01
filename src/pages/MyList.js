import React, { useEffect, useState } from "react";
import "./layout.css";
import * as actions from "../store/action";
import { useSelector, useDispatch } from "react-redux";

function MyList() {

    const dispatch = useDispatch();
    const reduxState = useSelector((obj) => obj);
    const [data, setData] = useState(reduxState);

      useEffect(() => {
        setData(reduxState.mylist);
      },[reduxState]);


      const handleDelete = (val, i) => {
        console.log(actions.deleteData(val.id));
        dispatch(actions.deleteData(val.id));
      };

    return (
        <div className= "my_List">

        <h3> My List </h3>

        {data.length &&
        data.map((d) => {
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

              <button onClick={() => handleDelete(d)}> Remove </button>
            </div>
          );
        })}

                
        

        </div>
    )
}

export default MyList;