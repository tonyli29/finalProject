import { combineReducers } from "redux";
import auth from "./auth";
import houses from "./house";
import errors from "./errors";

export default combineReducers({
  auth,
  houses,
  errors
});
