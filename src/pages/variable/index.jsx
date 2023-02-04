import React from 'react';
import {useGetVehicleVariableListQuery} from "../../store/vinApi";
import { useParams} from 'react-router-dom'
import {createMarkup} from "../../utils";
import{css} from "@emotion/css";

const Variable = () => {
    const {id} = useParams()
    const {data, isLoading} = useGetVehicleVariableListQuery()
    const renderVariable = (data) =>{
        const variable = data.find(i=> i["ID"] === +id)
        console.log(variable)
        return (
            <>
                <h2 className={css`
                     color:#61dafb;
                `}>{variable['Name']}</h2>
                <p>Group name:  {variable['GroupName']}</p>
                <p>ID: {variable['ID']}</p>
                <h4 className={css`
                        color: #61dafb;
                        `}>Description:</h4>
                <div dangerouslySetInnerHTML={createMarkup(variable['Description'])} ></div>
            </>
        )
    };
    console.log(data)
    if(isLoading){
        return (
            <div>
                loading...
            </div>
        )
    }
    return (
        <div className={css`
                padding: 40px 0;
                text-align: center;
        `}>
            {renderVariable(data["Results"])}
        </div>
    );
};

export default Variable;