import React from 'react';
import {useGetDecodeVinQuery} from "../../store/vinApi";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {css} from "@emotion/css";

const ResultList = () => {
    const currentVin = useSelector(state => state.currentVin.value)
    const{data, isLoading} = useGetDecodeVinQuery(currentVin)
    const renderResults = (data)=> {
        return (data.map(i=>{
                    if(!!i["Value"]){
                        return(
                            <li key={i['VariableId']}>
                                <span>
                                    <Link className={css`
                                            font-weight: 600;
                                            color: #61dafb;
                                            text-shadow:0 0 10px #61dafb; 
                                        `}
                                        to={`/variables/${i['VariableId']}`}>{i["Variable"]}: </Link>
                                </span>
                                {i["Value"]}
                            </li>
                        )
                    }
                })
            )
    }

    if(isLoading){
        return (
            <div>Loading...</div>
        )
    }

    return (
        <ul className={css`
                text-align: initial;
        `}>
            {renderResults(data["Results"])}
        </ul>
    );
};

export default ResultList;