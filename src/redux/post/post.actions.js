export const SET_POSTS = 'SET_POSTS';

export const setPosts = (list) => {
    return {
        type:SET_POSTS,
        payload: list
    }
}

