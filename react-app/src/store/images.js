// constants
const GET_IMAGES = 'images/GET_IMAGES';
const POST_IMAGE = 'images/POST_IMAGE';

// action creators
const allImages = images => ({
    type: GET_IMAGES,
    images
});

const postImage = image => ({
    type: POST_IMAGE,
    image
});

// thunks
// export const allImagesThunk = () => async (dispatch) => {
//     const response = await fetch('')
// }

export const postImageThunk = (image) => async (dispatch) => {
    const projectId = image.get('projectId');
    const response = await fetch(`/api/projects/${projectId}/images`, {
        method: 'POST',
        body: image
    });
    const data = await response.json();
    dispatch(postImage(data));
    return data;
}

export default function imagesReducer (state = {}, action) {
    const newState = { ...state };
    switch (action.type) {
        case POST_IMAGE:
            newState[action.image.id] = action.image;
            return newState
        default:
            return newState;
    }
}
