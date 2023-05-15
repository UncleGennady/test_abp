import Layout from "./components/layout";
import './App.css';
import {useEffect} from "react";
import {getFromLocalStorage, localStorageKey} from "./model";
import {useDispatch} from "react-redux";
import {addVins} from "./store/slice/vinSlice";

function App() {
    const dispatch = useDispatch()
    useEffect(()=>{
        const vinListFromLocalStorage = getFromLocalStorage(localStorageKey)
        if(!!vinListFromLocalStorage) dispatch(addVins(vinListFromLocalStorage))
    },[])

    return (
    <div className="App">
      <Layout/>
    </div>
    );
}

export default App;
