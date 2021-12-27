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
    const response = await fetch();
}
