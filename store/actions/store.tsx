import React from "react";

//import { GET_STORE_DATA, BC_PRODDUCTS } from "../../axios-default.js";
import * as actionTypes from "./actionTypes";

import axios from "axios";
/** async api req */
export const getStoreData = () => {
    return (dispatch) => {
        axios
            .get(GET_STORE_DATA)
            .then((response) => {
                //// console.log(response.data.success);
                dispatch(setBasicStore(response.data.success));
            })
            .catch((errors) => {
                // react on errors.
                dispatch(setBasicStore('hlooooo_______'));
            });
    };
};


/** set store admin details to reducers */
export const setBasicStore = (storeData: any) => {
    console.log(storeData);
    return {
        type: actionTypes.SET_BASIC_INFO,
        storeData: storeData,
    };
};
