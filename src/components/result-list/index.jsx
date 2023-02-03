import React from 'react';
import {useGetDecodeVinQuery} from "../../store/vinApi";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ResultList = () => {
    const currentVin = useSelector(state => state.currentVin.value)
    const{data, isLoading} = useGetDecodeVinQuery(currentVin)

    if(isLoading){
        return (
            <div>Loading...</div>
        )
    }

    return (
        <ul>
            {data["Results"].map(i=>{
               if(!!i["Value"]){
                return(
                        <li key={i['VariableId']}>
                                id:{i['VariableId']}
                                <strong><Link to={`/variables/${i['VariableId']}`}>{i["Variable"]}:</Link></strong> {i["Value"]}
                        </li>
                    )
               }
            })}
        </ul>
    );
};

export default ResultList;