import * as types from "./actionTypes"

const addTodosRequest = ()=>{
    return {
        type : types.ADD_TODOS_REQUEST
    }
}

const addTodosSuccess = (payload)=>{
    return {
        type : types.ADD_TODOS_SUCCESS,
        payload
    }
}

const addTodosFaliure = ()=>{
    return {
        type : types.ADD_TODOS_FALIURE
    }
}


export {addTodosRequest, addTodosSuccess,addTodosFaliure}