// constants
const GET_PROJECTS = 'projects/GET_PROJECTS';
const GET_PROJECT = 'projects/GET_PROJECT';
const POST_PROJECT = 'projects/POST_PROJECT';
const EDIT_PROJECT = 'projects/EDIT_PROJECT';
const DELETE_PROJECT = 'projects/DELETE_PROJECT';

// action creators
const allProjects = projects => ({
    type: GET_PROJECTS,
    projects
});

const oneProject = project => ({
    type: GET_PROJECT,
    project
});

const postProject = project => ({
    type: POST_PROJECT,
    project
});

const editProject = project => ({
    type: EDIT_PROJECT,
    project
});

const deleteProject = project => ({
    type: DELETE_PROJECT,
    project
});

// thunks
export const allProjectsThunk = () => async (dispatch) => {
    const response = await fetch('/api/projects/');
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

export const postProjectThunk = (project) => async (dispatch) => {
    const { title, content, categoryId } = project;
    const response = await fetch('/api/projects/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            content,
            category_id: categoryId
        })
    });
    const data = await response.json();
    dispatch(postProject(data));
    return data;
}

export const editProjectThunk = (project) => async (dispatch) => {
    const { title, content, categoryId, projectId } = project;
    const response = await fetch(`/api/projects/${projectId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            content,
            category_id: categoryId
        })
    });
    const data = await response.json();
    dispatch(editProject(data));
    return data;
}

export const deleteProjectThunk = (projectId) => async (dispatch) => {
    const response = await fetch(`/api/projects/${projectId}`, {
        method: 'DELETE',
    });
    const data = await response.json();
    console.log('data', data)
    dispatch(deleteProject(data));
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
        case POST_PROJECT:
            newState.all[action.project.id] = action.project;
            return newState;
        case EDIT_PROJECT:
            newState.all[action.project.id] = action.project;
            return newState;
        case DELETE_PROJECT:
            delete newState.all[action.project.id];
            delete newState.current[action.project.id];
            newState.all = { ...newState.all }
            return newState;
        default:
            return newState;
    }
}
