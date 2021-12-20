// constants
const GET_CATEGORIES = 'categories/GET_CATEGORIES';

// action creators
const getCategories = (categories) => ({
    type: GET_CATEGORIES,
    categories
});

// thunks
export const allCategoriesThunk = () => async (dispatch) => {
    const response = await fetch('/api/categories');
    const data = await response.json();
    dispatch(getCategories(data));
    return data;
}

export default function categoriesReducer (state = {}, action) {
    const newState = { ...state };
    switch (action.type) {
        case GET_CATEGORIES:
            for (let category of action.categories) {
                newState[category.id] = category;
            }
            return newState;
        default:
            return newState;
    }
}
