import React, { useEffect,useState } from 'react';
import './App.css';
import Composite from "./composite/compite";

function App() {

    const [data,setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/')
            .then((r) => r.json())
            .then((r) => setData(r))
    },[]);

    if(!data){
        return '';
    }

    return (
        <div className="App">
            <Composite data={data.estrutura} logs={data.log.log} selecionados={data.log.processos}/>
        </div>
    );
}

export default App;