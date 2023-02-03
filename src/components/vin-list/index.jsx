import React from 'react';
import {useSelector} from "react-redux";

const VinList = () => {
    const vinList = useSelector(state => state.vin.value)
    if(!vinList.length){
        return (
            <div>
                VIN list is empty
            </div>
        )
    }
    return (
        <ul>
            {vinList.map((i,index)=>(<li key={index}>{i}</li>))}
        </ul>
    );
};

export default VinList;