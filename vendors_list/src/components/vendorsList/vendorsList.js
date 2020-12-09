import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { getVendorsListApi } from '../../api/Srvc/vendorSrvc';
import { getVendorsList } from '../../redux/Actions';
const _VendorsList = (props: Props) => {
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
    return <>salam</>
}
const mapStateToProps = (state, props) => {
    return {
        vendorList: state.vendor
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getVendorsList: (data) => dispatch(getVendorsList(data)),
    };
};

const VendorsList = connect(mapStateToProps, mapDispatchToProps)(_VendorsList)
export default VendorsList;