import axios from "axios";
import React, { useState } from "react";
import {useCookies} from 'react-cookie'
import { useSearchParams } from "react-router-dom";
import moment from "moment";

const Redirect = () => {
    const [search_params, set_search_params] = useSearchParams();
    sessionStorage.setItem('access_token', search_params.get('token'));

    const BACKEND_PORT = '8181'
    const BACKEND_URL = `http://ec2-54-180-154-36.ap-northeast-2.compute.amazonaws.com:${BACKEND_PORT}`
    axios.get(`${BACKEND_URL}/consulting/api/v1/users`, {
        headers: 
        {
            Authorization: 'Bearer ' + sessionStorage.getItem('access_token')
        }
    }).then(response => {

        console.log(response.data.body);
    })
    

    return (
        <div>로그인 리다이렉트</div>
    )
}

export default Redirect;