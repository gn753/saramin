import { configureStore,combineReducers,createSlice, createAsyncThunk } from "@reduxjs/toolkit";



function locationReducer(state = [], action){
  if (action.type === 'addLocation') {
    state =[];
    state.push(action.payload);
    state = [...new Set(state)]
    return state;
  } else {
    return state
  }}
  
  
  function mainCategoryReducer(state=[],action){
    if (action.type === 'addMainCategory') {
      state = action.payload;
      return state;
    } else {
      return state
    }
  }
  function middleCategoryReducer(state=[],action){
    if (action.type === 'addMiddleCategory') {
      state = action.payload;
      return state;
    } else {
      return state
    }
  }


  
  const rootReducer = combineReducers({
    locationReducer,mainCategoryReducer,middleCategoryReducer
  })

export default configureStore({
  reducer: rootReducer,
});
