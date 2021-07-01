import axios from "axios";

export const addData = (data) => ({
  type: "addData",
  payload: data,
});
export const deleteData = (data, i) => ({
  type: "deleteData",
  payload: {
    submitData: {
      data,
      i,
    },
  },
});

export const getdata = () => async (dispatch) => {
  await axios({
    method: "get",
    //url: "https://jsonplaceholder.typicode.com/photos",
    url: "https://api.themoviedb.org/3/movie/top_rated?api_key=04ae7689fc21853d7db93ebc5e887fa0&language=en-US",
  }).then((res) => {
    // console.log(res);
    dispatch({ type: "list", data: res.data.results });
  });
};
