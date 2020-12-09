import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { getVendorsListApi } from '../../api/Srvc/vendorSrvc';
import { getVendorsList } from '../../redux/Actions';
import VendorsList from '../vendorsList/vendorsList';
import VendorSearch from '../vendorSearch/vendorSearch';
const _Vendors = (props: Props) => {
    const [vendorsKey, setVendorKey] = useState(1);
    useEffect(() => {
        fetchVendorList();
    }, []);
    const fetchVendorList = (params={}) => {
        getVendorsListApi({...params})
            .then(response => {
                console.log(response);
                props.getVendorsList({ payload: response.data });
                (vendorsKey === 1) ? setVendorKey(2) : setVendorKey(1);
            }).catch(err => {
                console.log(err);
            })
    }
    return <>
        <VendorsList />
        <VendorSearch fetchVendorList={fetchVendorList}/>
    </>
}

const mapDispatchToProps = dispatch => {
    return {
        getVendorsList: (data) => dispatch(getVendorsList(data)),
    };
};
const mapStateToProps = (state, props) => {
    return {
        vendorList: state.vendor.vendorList
    };
};

const Vendors = connect(mapStateToProps,mapDispatchToProps)(_Vendors)
export default Vendors;