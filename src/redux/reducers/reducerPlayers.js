import { CHANGE_PLAYERS } from '../actions/actionsPlayers'

const initialState = {
    players : []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case CHANGE_PLAYERS:
        return { ...state, players: payload }
        

    default:
        return state
    }
}
