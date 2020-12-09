import React, { useEffect, useState } from 'react';
import {
    useSelector
} from "react-redux";
import Vendors from '../vendors/vendors';
const _VendorsSearch = (props: Props) => {
    const vendors = useSelector(state => state.vendor.vendorList)
    const selectFilter = (value) => {
        let params = {
            filters: [value],
        }
        props.fetchVendorList(params)
    }
    return <>
        {
            vendors && vendors.data.extra_sections.filters.top.data.map(filter => {
                return <button onClick={() => selectFilter(filter.value)}>{filter.title}</button>
            })
        }
    </>
}

export default _VendorsSearch;