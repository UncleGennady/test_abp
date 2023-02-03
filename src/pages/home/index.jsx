import React, {useState} from 'react';
import VinList from "../../components/vin-list";
import ResultList from "../../components/result-list";
import {useDispatch} from "react-redux";
import {addVin} from "../../store/slice/vinSlice";

const Home = () => {
    const [vin, setVin] = useState('');
    const dispatch = useDispatch()

    const inputHandler = ({target}) =>{
        setVin(target.value);
    }
    const formHandler = (e) => {
        e.preventDefault()
        dispatch(addVin(vin))
    }
    return (
        <div>
            <form onSubmit={formHandler}>
                <input type="text" value={vin} onChange={inputHandler} />
                <button disabled={vin.trim().length < 15}>
                    add
                </button>
            </form>
            <VinList/>
            <ResultList/>
        </div>
    );
};

export default Home;