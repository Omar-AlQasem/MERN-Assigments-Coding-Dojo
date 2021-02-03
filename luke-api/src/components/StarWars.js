
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import People from './People'
import Planets from './Planet'
import Error from './Error'


const StarWars = props => {
    const [people, setPeople] = useState(null);
    const [planets, setPlanets] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        Axios.get(`https://swapi.dev/api/${props.query}/${props.id}/`)
            .then(response => {
                if (props.query === "people") {
                    setPeople(response.data);
                    setPlanets(null);
                    setError(null);
                }
                else if (props.query === "planets") {
                    setPeople(null);
                    setPlanets(response.data);
                    setError(null);
                }
                else if (props.query === "error") {
                    setPeople(null);
                    setPlanets(null);
                    setError(null);
                }
            })
            .catch(error => {
                console.log(error.response.status);
                setPeople(null);
                setPlanets(null);
                setError("These aren't the Droids you're looking for!")
            });
    }, [props])

    return (
        <div>
            {
                people ? <People people={people} /> : null
            }
            {
                planets ? <Planets planets={planets} /> : null
            }
            {
                error ? <Error error={error} /> : null
            }
        </div>
    )

}

export default StarWars;
