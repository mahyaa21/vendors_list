import {
    LOAD_VENDORS_LIST_SUCCESS,
  } from "./vendorActionTypes";
  
  const VendorReducer = function (
    state = {
      vendorList: {},
    },
    action = {}
  ) {
    switch (action.type) {
      case LOAD_VENDORS_LIST_SUCCESS:
        return Object.assign({}, state, {
          vendorList: { 
            ...action.data.payload,
          }
        });
      default:
        return state;
    }
  };
  
  export default VendorReducer;  