import {  combineReducers } from '@reduxjs/toolkit';
import LoginReducer from './loginSlice'
import editorReducer from './editorSlice'
import LoderReducer from './loaderSlice'
import PopupReducer from './PopupSlice'
import FeedReducer from './feedSlice'
const rootReducer = combineReducers({
    login : LoginReducer,
    editor:editorReducer,
    loader:LoderReducer,
    popup:PopupReducer,
    feed:FeedReducer
  });

export default rootReducer