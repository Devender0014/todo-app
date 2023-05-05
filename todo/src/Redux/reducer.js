import * as types from "./actionTypes"

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos-x')) || [],
    isLoading: false,
    isError: false
}

const reducer = (oldState = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case types.ADD_TODOS_REQUEST:
            return { ...oldState, isLoading: true }
        case types.ADD_TODOS_SUCCESS:
            {
                localStorage.setItem('todos-x', JSON.stringify([...oldState.todos, payload]))
                return { ...oldState, isLoading: false, todos: [...oldState.todos, payload] }
            }
        case types.ADD_TODOS_FALIURE:
            return { ...oldState, isLoading: false, isError: true }

        default:
            return oldState
    }
}

export { reducer }