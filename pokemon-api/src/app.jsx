import React,{useState} from 'react';

const Example = (props) => {
    const [poke, setPoke] = useState([]);
    const useEffect = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
            .then(response => response.json())
            .then(response => setPoke(response.results))
    }
    return (
        <div>
            <button onClick={useEffect} >Fetch Pokemon</button>
            {poke.length > 0 && poke.map((poke, i)=>{
                return (<div key={i}>{poke.name}</div>)
            })}
        </div>
    );
}
export default Example;