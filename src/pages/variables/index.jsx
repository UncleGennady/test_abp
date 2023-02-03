import React from 'react';
import {useGetVehicleVariableListQuery} from "../../store/vinApi";
import {Link} from "react-router-dom";

const Variables = () => {
    const {data, isLoading} = useGetVehicleVariableListQuery()

    const createMarkup= (value)=>({__html:value });

    if(isLoading){
        return (
            <div>
                Loading...
            </div>
        )
    }


    return (
        <div>
            {data["Results"].map(i=>(
                    <li key={i['ID']}>
                        <Link to={`/variables/${i['ID']}`}>
                            <h3>{i['Name']}</h3>
                        </Link>
                        <p>Group name:  {i['GroupName']}</p>
                        <p>ID: {i['ID']}</p>
                        <div>Description: <p dangerouslySetInnerHTML={createMarkup(i['Description'])} ></p></div>
                    </li>
                    )
                )
            }
        </div>
    );
};

export default Variables;