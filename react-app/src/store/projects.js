// constants
const GET_PROJECTS = 'projects/GET_PROJECTS';

// action creators
const allProjects = projects => ({
    type: GET_PROJECTS,
    projects
});

// thunks
export const allProjectsThunk = () => async (dispatch) => {
    const response = await fetch('/api/projects');
    const data = await response.json();
    dispatch(allProjects(data));
    return data;
}

// reducah
export default function projectsReducer (state = {}, action) {
    const newState = { ...state };
}
