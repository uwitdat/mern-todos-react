import axios from 'axios'

//DEV URL
// const url = 'http://localhost:3001/todos'

//PROD URL
const url = 'https://mern-todos-ben.herokuapp.com/todos'

export const readTodos = () => axios.get(url)
export const createTodo = (newTodo) => axios.post(url, newTodo)
export const updateTodo = (id, updateTodo) =>
    axios.patch(`${url}/${id}`, updateTodo)

export const deleteTodo = (id) => {
    axios.delete(`${url}/${id}`)
}