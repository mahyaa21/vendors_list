import {
    LOAD_VENDORS_LIST,
  } from "./vendorActionTypes";
  
  export const getVendorsList = data => ({
    type: LOAD_VENDORS_LIST,
    data: data
  });