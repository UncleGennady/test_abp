import React, {useEffect} from 'react';
import {css} from "@emotion/css";
import{useNavigate} from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/')
        },3000)
    },[])
    return (
        <div className={css`
                padding: 40px 0 ;
                text-align: center;
                font-size: 24px;
                color:#61dafb;
        `}>
            Oops... page not found
        </div>
    );
};

export default Error;