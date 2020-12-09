import VendorReducer from './vendors/vendorReducer';
import { combineReducers } from "redux";
const createRootReducer = () => {
  return combineReducers({
    vendor: VendorReducer,
  });
}
export default createRootReducer;