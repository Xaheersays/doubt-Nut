import {  combineReducers } from '@reduxjs/toolkit';
import LoginReducer from './loginSlice'
import editorReducer from './editorSlice'
import LoderReducer from './loaderSlice'
const rootReducer = combineReducers({
    login : LoginReducer,
    editor:editorReducer,
    loader:LoderReducer
  });

export default rootReducer