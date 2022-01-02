// constants
const GET_COMMENTS = 'comments/GET_COMMENTS';
const POST_COMMENT = 'comments/POST_COMMENT';

// action creatrors
const getComments = comments => ({
    type: GET_COMMENTS,
    comments
});

const postComment = comment => ({
    type: POST_COMMENT,
    comment
});

// thunks
export const getCommentsThunk = (projectId) => async (dispatch) => {
    const response = await fetch(`/api/projects/${projectId}/comments`);
    const data = await response.json();
    dispatch(getComments(data.comments));
    return data;
}

export const postCommentThunk = (comment) => async (dispatch) => {
    const { projectId, content } = comment;
    const response = await fetch(`/api/projects/${projectId}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content
        })
    });
    const data = await response.json();
    dispatch(postComment(data));
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
        case POST_COMMENT:
            newState.all[action.comment.id] = action.comment;
            return newState
        default:
            return newState;
    }
}
