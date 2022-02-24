import { SET_COMMENTS, SET_LOADING } from "./comment.actions";

const INTIAL_STATE = {
    comments:[],
}

export const commentsReducer = (state = INTIAL_STATE, action) => {
    switch(action.type){
        case SET_COMMENTS:
            return {...state, comments:action.payload}
        default:
            return state;
    }
}