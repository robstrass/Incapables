// constants
const GET_PROJECTS = 'projects/GET_PROJECTS';
const GET_PROJECT = 'projects/GET_PROJECT';

// action creators
const allProjects = projects => ({
    type: GET_PROJECTS,
    projects
});

const oneProject = project => ({
    type: GET_PROJECT,
    project
});

// thunks
export const allProjectsThunk = () => async (dispatch) => {
    const response = await fetch('/api/projects');
    const data = await response.json();
    dispatch(allProjects(data.projects));
    return data;
}

export const oneProjectThunk = (projectId) => async (dispatch) => {
    const response = await fetch(`/api/projects/${projectId}`);
    const data = await response.json();
    dispatch(oneProject(data));
    return data;
}

const initialState = { all: {}, current: {} }

// reducah
export default function projectsReducer (state = initialState, action) {
    const newState = { ...state };
    switch (action.type) {
        case GET_PROJECTS:
            for (let project of action.projects) {
                newState.current = {}
                newState.all[project.id] = project
            }
            return newState;
        case GET_PROJECT:
            newState.current = action.project;
            return newState;
        default:
            return newState;
    }
}
