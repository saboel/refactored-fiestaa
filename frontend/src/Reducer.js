// frontend/src/Reducer


import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

//import new reducer 
import { signupReducer } from "./components/signup/SignupReducer";
import { loginReducer } from "./components/login/LoginReducer"; 



const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    createUser: signupReducer,   //added it here! 
    auth: loginReducer
  });

export default createRootReducer;
