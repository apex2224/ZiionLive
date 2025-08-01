import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import loginReducer from './loginSlice'
import formReducer from './studentSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    login: loginReducer,
      student: formReducer,
  },
});

export default store;
