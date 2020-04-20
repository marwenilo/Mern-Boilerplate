import { combineReducers } from "redux";

import rootReducer from "./rootReducer";
import authReducer from "./authReducer"

export default combineReducers({
  rootReducer,
  authReducer
});
