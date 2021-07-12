import * as api from '../api'

export const readTodos = async () => {
    try {
        const { data } = await api.readTodos()
        return data
    } catch (err) {
        console.log(err)
    }
}

export const createTodo = async (todo) => {
    try {
        const { data } = await api.createTodo(todo)
        return data
    } catch (err) {
        console.log(err)
    }
}