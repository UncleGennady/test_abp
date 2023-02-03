import React from 'react';
import {useGetVehicleVariableListQuery} from "../../store/vinApi";
import { useParams} from 'react-router-dom'

const Variable = () => {
    const {id} = useParams()
    const {data, isLoading} = useGetVehicleVariableListQuery()
    const renderVariable = (data) =>{
        const variable = data.find(i=> i["ID"] === +id)
        console.log(variable)
        return (
            <>
                <h2>Name: {variable['Name']}</h2>
                <p>Group name:  {variable['GroupName']}</p>
                <p>ID: {variable['ID']}</p>
                <div>Description: <p dangerouslySetInnerHTML={createMarkup(variable['Description'])} ></p></div>
            </>
        )
    };
    console.log(data)
    const createMarkup= (value)=>({__html:value });
    if(isLoading){
        return (
            <div>
                loading...
            </div>
        )
    }
    return (
        <div>
            {renderVariable(data["Results"])}
        </div>
    );
};

export default Variable;