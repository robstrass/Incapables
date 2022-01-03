// constants
const GET_IMAGES = 'images/GET_IMAGES';
const POST_IMAGE = 'images/POST_IMAGE';
const DELETE_IMAGE = 'images/DELETE_IMAGE';
const EDIT_IMAGE = 'images/EDIT_IMAGE';

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

const editImage = image => ({
    type: EDIT_IMAGE,
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
    const response = await fetch(`/api/images/${imageId}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    dispatch(deleteImage(data));
    return data;
}

export const editImageThunk = (image) => async (dispatch) => {
    const imageId = image.get('imageId');
    const projectId = image.get('projectId')
    const response = await fetch(`/api/projects/${projectId}/images/${imageId}`, {
        method: 'PUT',
        body: image
    });
    const data = await response.json();
    dispatch(editImage(data));
    return data;
}

const initialState = { all: {}, current: {} }

// Reducah
export default function imagesReducer (state = initialState, action) {
    const newState = { ...state };
    switch (action.type) {
        case GET_IMAGES:
            console.log('reducer', action.images)
            newState.all = {}
            for (let image of action.images) {
                newState.current = {}
                newState.all[image.id] = image;
            }
            newState.all = { ...newState.all }
            return newState;
        case POST_IMAGE:
            newState.all[action.image.id] = action.image;
            return newState;
        case DELETE_IMAGE:
            delete newState.all[action.image.id];
            delete newState.current[action.image.id];
            newState.all = { ...newState.all }
            return newState
        case EDIT_IMAGE:
            newState.all[action.image.id] = action.image;
            newState.current = action.image;
            return newState;
        default:
            return newState;
    }
}
