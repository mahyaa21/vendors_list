import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { getVendorsListApi } from '../../api/Srvc/vendorSrvc';
import { getVendorsList } from '../../redux/Actions';
import VendorsList from '../vendorsList/vendorsList'
const _Vendors = (props: Props) => {
    useEffect(() => {
        fetchVendorList();
    }, []);
    const fetchVendorList = () => {
        let data = {
            params: {}
        }
        getVendorsListApi(data)
            .then(response => {
                console.log(response);
                props.getVendorsList({ payload: response.data });
            }).catch(err => {
                console.log(err);
            })
    }
    return <>
        <VendorsList />
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