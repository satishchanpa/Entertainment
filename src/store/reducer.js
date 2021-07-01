const initState = {
    mylist: [],
    recommendations: [],
  };
  
  const reducer = (state = initState, action) => {
    console.log(`action`, action.payload);
    switch (action.type) {
      case "list":
        return { ...state, recommendations: action.data };
  
      case "addData": {
        return { ...state, mylist: [...state.mylist, action.payload] };
      }
      case "deleteData": {
        const filterdData = state.mylist.filter(
          (obj) => obj.id !== action.payload.submitData.data
        );

        //console.log(`filterdData`, filterdData);
  
        return { ...state, mylist: filterdData };
      }
      default:
        return state;
    }
  };
  
  export default reducer;
  