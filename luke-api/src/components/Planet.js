import React from 'react';


const Planets = props => {
    const { planets } = props;


    return (
        <div>
            <div>
                <h1>{planets.name}</h1>
                <p>Climate: {planets.climate}</p>
                <p>Gavity: {planets.gravity}</p>
                <p>Terrain: {planets.terrain}</p>
                <p>Population: {planets.population}</p>
            </div>
        </div>
    )
}


export default Planets;