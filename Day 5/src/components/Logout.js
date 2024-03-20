import React, {useEffect, useState} from 'react';
import { useLocation, useNavigate} from "react-router-dom";

function Logout(){
    sessionStorage.removeItem('user-token');
    let navigate = useNavigate();
    let location = useLocation();
    const queryString = location.search;
    let strReturnUrl  =  new URLSearchParams(queryString).get('returnUrl');

      if(strReturnUrl == null)
      {
        strReturnUrl = "/Login";
      }
      else{
        strReturnUrl = "/";
      }
      useEffect(() => {
        navigate(strReturnUrl);
      });
    return(
        <>
        </>
    );
}
export default Logout;