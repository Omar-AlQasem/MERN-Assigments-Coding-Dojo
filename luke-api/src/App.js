import React, { useState } from 'react';
import './App.css';
// import Axios from 'axios';
import { Router, navigate } from "@reach/router";
import StarWars from './components/StarWars';


function App() {
  const [query, setQuery] = useState({
    query: "error",
    id: 1
  })

  const handleInput = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${query.query}/${query.id}`)
    setQuery({
      ...query,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      < form onSubmit={handleSubmit}><b>Search for:</b>
        <select name="query" onChange={handleInput}>
          <option value="error">-- Make your selection --</option>
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select><b>ID:</b>
        <input type="number" min="1" name="id" value={query.id} onChange={handleInput} />
        <input type="submit" value="Search" />
      </form >

      <div>
        <Router>
          <StarWars path="/:query/:id"/>
        </Router>
      </div>
    </div >
  );
}

export default App;