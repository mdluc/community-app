export const SET_COMMENTS = "SET_COMMENTS";
export const SET_LOADING = "SET_LOADING";

export const setComments = (list) => {
  return {
    type: SET_COMMENTS,
    payload: list
  };
};


export const setLoadingComments = (loading) => {
    return{
        type: SET_LOADING,
        payload: loading,
    }
}