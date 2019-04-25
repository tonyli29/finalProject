import { combineReducers } from "redux";
import auth from "./auth";
import leads from "./house";

export default combineReducers({
  auth,
  leads
});
