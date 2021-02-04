import {combineReducers} from 'redux'
import reducerPlayers from './reducers/reducerPlayers'

export default combineReducers({
    players: reducerPlayers
})