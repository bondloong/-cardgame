import React, {useState} from 'react';
import { connect, useDispatch } from 'react-redux'

import {changePlayers} from './redux/actionCreators/actionPlayers'

import './App.css';

function App(props) {
  const dispatch = useDispatch()

  const handleAddPlayers = () => {
    props.changePlayers([{h: "j"}, {sd: "sd"}])
  }

  return (
    <div className="App">
      <button onClick={() => handleAddPlayers()}>игроки</button>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    players: store.players
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changePlayers: players => dispatch(changePlayers(players))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
