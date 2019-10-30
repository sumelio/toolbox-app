import { SEND_TEXT } from "../types/textTypes";

const INITIAL_STATE = {
    text: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEND_TEXT:
            const stateAtion = { ...state, text: action.payload.input }
            return stateAtion;            
        default: return state;
    }
}