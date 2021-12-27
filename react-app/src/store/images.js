// constants
const GET_IMAGES = 'images/GET_IMAGES';
const POST_IMAGE = 'images/POST_IMAGE';
const DELETE_IMAGE = 'images/DELETE_IMAGE';

// action creators
const allImages = images => ({
    type: GET_IMAGES,
    images
});

const postImage = image => ({
    type: POST_IMAGE,
    image
});

const deleteImage = image => ({
    type: DELETE_IMAGE,
    image
});

// thunks
export const allImagesThunk = (projectId) => async (dispatch) => {
    const response = await fetch(`/api/projects/${projectId}/images`);
    const data = await response.json();
    console.log('response', data);
    dispatch(allImages(data.images));
    return data;
}

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

export const deleteImageThunk = (imageId) => async (dispatch) => {
    // console.log('XXXXXXXXXXX', )
    const response = await fetch(`/api/images/${imageId}`);
    const data = await response.json();
    dispatch(deleteImage(data));
    return data;
}


// Reducah
export default function imagesReducer (state = {}, action) {
    const newState = { ...state };
    switch (action.type) {
        case GET_IMAGES:
            console.log('reducer', action.images)
            for (let image of action.images) {
                newState[image.id] = image;
            }
            return newState;
        case POST_IMAGE:
            newState[action.image.id] = action.image;
            return newState;
        case DELETE_IMAGE:
            delete newState[action.image.id];
            return newState
        default:
            return newState;
    }
}
