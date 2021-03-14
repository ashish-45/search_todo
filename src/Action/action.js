import { SEARCH_TODO } from './actionType';

export const searchTodo = todo => ({
    type: SEARCH_TODO,
    payload: todo
})