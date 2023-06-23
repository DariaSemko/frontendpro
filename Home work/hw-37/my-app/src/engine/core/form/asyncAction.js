import {createAction} from "@reduxjs/toolkit"

export const todosAsyncAction = Object.freeze({
    getTodosAsync: createAction('GET_TODOS_ASYNC'),
    addTodosAsync: createAction('ADD_TODOS_ASYNC')
})