import { createSelector} from "reselect"

const selectPosts = state => state.posts;

export const selectPostsList = createSelector(
    [selectPosts],
    posts => posts.list
)
