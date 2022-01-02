// constants
const GET_COMMENTS = 'comments/GET_COMMENTS';

// action creatrors
const getComments = comments => ({
    type: GET_COMMENTS,
    comments
});

// thunks
export const getImagesThunk = (projectId) => async (dispatch) => {
    const response = await fetch(`/api/projects/${projectId}/comments`);
    const data = await response.json();
    dispatch(getComments(data.comments));
    return data;
}

const initialState = { all: {}, current: {} };

// reducah
export default function commentsReducer (state = initialState, action) {
    const newState = { ...state }
    switch (action.type) {
        case GET_COMMENTS:
            newState.all = {};
            for (let comment of action.comments) {
                newState.current = {};
                newState.all[comment.id] = comment
            }
            newState.all = { ...newState.all }
            return newState;
        default:
            return newState;
    }
}
