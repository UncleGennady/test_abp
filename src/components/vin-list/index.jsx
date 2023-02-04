import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentVin} from "../../store/slice/currentVinSlice";
import {css} from "@emotion/css";


const VinList = () => {
    const vinList = useSelector(state => state.vin.value)
    const dispatch = useDispatch()
    if(!vinList.length){
        return null

    }
    return (
        <ul>
            {vinList.map((i,index)=>(<li className={css`
                                            padding: 10px 0;
                                          `}
                key={index}><button className={css`
                          background-color: #61dafb;
                          box-shadow: 0 0 8px 1px #61dafb;
                          border-radius: 5px;
                          height: 33px;
                          outline: none;
                          border: none;
                          transition: 0.3s;
                          :hover{
                          box-shadow: 0 0 8px 4px #61dafb;
                          }
                        `}
                onClick={()=>dispatch(setCurrentVin(i))}>{i}</button></li>))}
        </ul>
    );
};

export default VinList;