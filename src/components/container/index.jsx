import React from 'react';
import {css} from '@emotion/css'

const Container = ({children}) => {
    return (
        <div className={css`
                max-width: 1440px;
                padding:0 30px;
                margin: 0 auto;
                @media(max-width: 1440px){
                max-width: 1200px;
                }
                @media(max-width: 600px){
                padding:0 10px;
                }
                
        `}>
            {children}
        </div>
    );
};

export default Container;