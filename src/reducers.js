// reducers.js

const initialState = {
    jobs: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_JOBS":
        return {
          ...state,
          jobs: [...state.jobs, ...action.payload],
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  