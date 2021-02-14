import React, { useState} from 'react';
import './App.css';
import {Router} from "@reach/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddPlayerForm from "./components/AddPlayerForm";
import Game from "./components/Game";
import Header from "./components/Header";
import PlayerList from "./components/PlayerList";
import ListAddView from "./views/ListAddView.js";
import PlayerStatusView from "./views/PlayerStatusView";

function App() {

    const [flag, setFlag] = useState(false)
    const [statusFlag, setStatusFlag] = useState(false)


    return (
        <div className="App container">
            <Header />
            <Router>
                <ListAddView path="/players" >
                    <PlayerList flag={flag} setFlag={setFlag} path="/list"/>
                    <AddPlayerForm flag={flag} setFlag={setFlag} path="/addplayer"/>
                </ListAddView>
                <PlayerStatusView path="/status">
                    <Game statusFlag={statusFlag} setStatusFlag={setStatusFlag} path="/game/:id" />
                </PlayerStatusView>
            </Router>
        </div>
    );
}

export default App;