import {  combineReducers } from '@reduxjs/toolkit';
import LoginReducer from './loginSlice'
import editorReducer from './editorSlice'
import LoderReducer from './loaderSlice'
import PopupReducer from './PopupSlice'
import FeedReducer from './feedSlice'
import questionReducer from './displayQuestionSlice'
const rootReducer = combineReducers({
    login : LoginReducer,
    editor:editorReducer,
    loader:LoderReducer,
    popup:PopupReducer,
    feed:FeedReducer,
    question:questionReducer
  });

export default rootReducer