import React, { useEffect, useState } from 'react';
import {
    useSelector
} from "react-redux";
const _VendorsList = (props: Props) => {
    const vendors = useSelector(state => state.vendor.vendorList)
    return <>
        {
           vendors && vendors.data.finalResult.map(vendor => {
                if (vendor.type === "VENDOR")
                    return <div key={vendor.data.id}>{vendor.data.title}</div>
            })
        }</>
}

export default _VendorsList;