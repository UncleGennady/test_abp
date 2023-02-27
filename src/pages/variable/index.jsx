import React from 'react';
import {useGetVehicleVariableListQuery} from "../../store/vinApi";
import { useParams, useNavigate} from 'react-router-dom'
import {createMarkup} from "../../utils";
import{css} from "@emotion/css";
import ErrorComponent from "../../components/error-component";

const Variable = () => {
    const {id} = useParams()
    const {data, isLoading} = useGetVehicleVariableListQuery()
    const navigate = useNavigate();

    const renderVariable = (data) =>{
        const variable = data.find(i=> i["ID"] === +id)

        if(!variable){
            return (
                <ErrorComponent>
                    Oops... variable not found
                </ErrorComponent>
            )
        }

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