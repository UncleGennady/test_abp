import React, {useState} from 'react';
import VinList from "../../components/vin-list";
import ResultList from "../../components/result-list";
import {useDispatch, useSelector} from "react-redux";
import {addVin} from "../../store/slice/vinSlice";

const Home = () => {
    const initialState=''
    const [vin, setVin] = useState(initialState);
    const currentVin = useSelector(state => state.currentVin.value)
    const dispatch = useDispatch()

    const inputHandler = ({target}) =>{
        setVin(target.value);
    }
    const formHandler = (e) => {
        e.preventDefault()
        dispatch(addVin(vin))
        setVin(initialState)
    }
    return (
        <div>
            <form onSubmit={formHandler}>
                <input type="text" value={vin} onChange={inputHandler} />
                <button disabled={!vin || vin.trim().length !== 17}>
                    add
                </button>
            </form>
            <p>1FTFW1CT5DFC10312</p>
            <p>JN1AZ4EH7DM430111</p>
            <VinList />
            {!!currentVin ? <ResultList /> : <div>Result list is empty</div>}
        </div>
    );
};

export default Home;