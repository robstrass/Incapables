// constants
const GET_CATEGORIES = 'categories/GET_CATEGORIES';
const GET_CATEGORY = 'categories/GET_CATEGORY';

// action creators
const allCategories = (categories) => ({
    type: GET_CATEGORIES,
    categories
});

const oneCategory = (category) => ({
    type: GET_CATEGORY,
    category
});

// thunks
export const allCategoriesThunk = () => async (dispatch) => {
    const response = await fetch('/api/categories/');
    const data = await response.json();
    dispatch(allCategories(data.categories));
    return data;
}

export const oneCategoryThunk = (categoryId) => async (dispatch) => {
    const response = await fetch(`/api/categories/${categoryId}`);
    const data = await response.json();
    dispatch(oneCategory(data));
    return data;
}

const initialState = { all: {}, current: {} }

// reducah
export default function categoriesReducer (state = initialState, action) {
    const newState = { ...state };
    switch (action.type) {
        case GET_CATEGORIES:
            for (let category of action.categories) {
                newState.current = {}
                newState.all[category.id] = category;
            }
            newState.all = { ...newState.all }
            return newState;
        case GET_CATEGORY:
            newState.current = action.category;
            return newState;
        default:
            return newState;
    }
}
