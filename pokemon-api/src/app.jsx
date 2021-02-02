import React,{useState} from 'react';
// import axios from 'axios';
// const Axios = (props) => {
//     const [names, setNames] = useState([]);
//     const getNames = () => {
//     axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
//     .then(response => setNames(response.data.results))
//     .catch(error => console.log(error))
//     }
// return (
//         <div>
//             <button onClick={ getNames }>Fetch Pokemon</button>
//             {names.length > 0 && names.map((names, i)=>{
//                 return (<div key={i}>{names.name}</div>)
//             })}
//         </div>
//     );
// };
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
