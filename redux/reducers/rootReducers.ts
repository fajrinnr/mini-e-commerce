import { combineReducers } from "redux";
import productReducer from "./productReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  productReducer,
  modalReducer,
});

export default rootReducer;
