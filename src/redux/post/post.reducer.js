import { SET_POSTS } from "./post.actions";

const INITIAL_VALUE = {
    list: [],
}

export const postsReducer = (state = INITIAL_VALUE, action) => {
    switch(action.type){
        case SET_POSTS:
            return {...state, list: action.payload}
        default:
            return state;
    }
}