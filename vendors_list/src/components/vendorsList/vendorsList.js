import React, { useEffect, useState } from 'react';
import {
    useSelector
} from "react-redux";
import "./vendorsList.scss"
const _VendorsList = (props: Props) => {
    const vendors = useSelector(state => state.vendor.vendorList)
    return <>
        {
            vendors && vendors.data.finalResult.map(vendor => {
                if (vendor.type === "VENDOR")
                    return <div key={vendor.data.id} className="vendor-container">
                        <div className="image-wrapper"><img src={vendor.data.backgroundImage} className="vendor-image" /></div>
                        <div className="text-wrapper">
                            <div className="vendor-title">{vendor.data.title}</div>
                            <div className="vendor-description">{vendor.data.description}</div>
                        </div>

                    </div>
            })
        }</>
}

export default _VendorsList;