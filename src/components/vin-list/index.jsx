import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentVin} from "../../store/slice/currentVinSlice";


const VinList = () => {
    const vinList = useSelector(state => state.vin.value)
    const dispatch = useDispatch()
    if(!vinList.length){
        return (
            <div>
                VIN list is empty
            </div>
        )
    }
    return (
        <ul>
            {vinList.map((i,index)=>(<li key={index}><button onClick={()=>dispatch(setCurrentVin(i))}>{i}</button></li>))}
        </ul>
    );
};

export default VinList;