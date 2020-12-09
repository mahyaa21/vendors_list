import React, { useEffect, useState } from 'react';
import {
    useSelector
} from "react-redux";
import './vendorSearch.scss';

const _VendorsSearch = (props: Props) => {
    const vendors = useSelector(state => state.vendor.vendorList)
    const selectFilter = (value) => {
        let params = {
            filters: [value],
        }
        props.fetchVendorList(params)
    }
    return <div className="search-container">
        {
            vendors && vendors.data.extra_sections.filters.top.data.map(filter => {
                return <button onClick={() => selectFilter(filter.value)} className="filter-button"><span className="button-text">{filter.title}</span></button>
            })
        }
    </div>
}

export default _VendorsSearch;