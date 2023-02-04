import React from 'react';
import {useGetVehicleVariableListQuery} from "../../store/vinApi";
import {Link} from "react-router-dom";
import {createMarkup} from "../../utils";
import {css} from "@emotion/css";

const Variables = () => {
    const {data, isLoading} = useGetVehicleVariableListQuery()

    if(isLoading){
        return (
            <div>
                Loading...
            </div>
        )
    }


    return (
        <ul className={css`
              padding-top: 20px;
        `}>
            {data["Results"].map(i=>(
                    <li className={css`
                            padding: 10px 0;
                    `}
                        key={i['ID']}>
                        <Link to={`/variables/${i['ID']}`}>
                            <h3 className={css`
                                  color:#61dafb;
                            `}>{i['Name']}</h3>
                        </Link>
                        <p>Group name:  {i['GroupName']}</p>
                        <p>ID: {i['ID']}</p>
                        <h4 className={css`
                                color: #61dafb;
                        `}>Description:</h4>
                        <div dangerouslySetInnerHTML={createMarkup(i['Description'])} ></div>
                    </li>
                    )
                )
            }
        </ul>
    );
};

export default Variables;