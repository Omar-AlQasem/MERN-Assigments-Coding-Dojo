import React from 'react';


const People = props => {
    const { people } = props;


    return (
        <div>
            <div>
                <h1>{people.name}</h1>
                <p>Height: {people.height}</p>
                <p>Hair Color: {people.hair_color}</p>
                <p>Eye Color: {people.eye_color}</p>
                <p>Birthday: {people.birth_year}</p>
            </div>
        </div>
    )
}


export default People;