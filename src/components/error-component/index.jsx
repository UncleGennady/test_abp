import React, {useEffect} from 'react';
import {css} from "@emotion/css";
import{useNavigate} from 'react-router-dom'

const ErrorComponent = ({children}) => {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/')
        },3000)
    },[])
    return (
        <>
            <div className={css`
                padding: 40px 0 ;
                text-align: center;
                font-size: 24px;
                color:#61dafb;
        `}>
                {children}
            </div>
        </>
    );
};

export default ErrorComponent;