import { Preloader } from "./components/Preloader";
import { useEffect, useState } from 'react'
import { readTodos } from "./functions/index"
import { createTodo } from "./functions/index"

function App() {
  const [todo, setTodo] = useState({
    title: '',
    content: ''
  })
  useEffect(() => {
    const fetchData = async () => {
      const result = await readTodos()
      console.log(result)
    }
    fetchData()
  }, [])

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const result = await createTodo(todo)
    console.log(result)
  }

  return (
    <div classname="container">
      <div className="row">
        <pre>{JSON.stringify(todo)}</pre>
        <form className="col s12" onSubmit={onSubmitHandler}>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">title</i>
              <input
                id="title"
                type="text"
                className="validate"
                onChange={(e) => setTodo({
                  ...todo,
                  title: e.target.value
                })}
              />
              <label htmlFor="icon_prefix">Title:</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">description</i>
              <input
                id="description"
                type="tel"
                className="validate"
                onChange={(e) => setTodo({
                  ...todo,
                  content: e.target.value
                })}
              />
              <label htmlFor="icon_telephone">Description</label>
            </div>
          </div>
          <div className="row right-align">
            <button className='waves-effect waves-light btn'>Submit</button>

          </div>
        </form>
        <Preloader />
        <div className="collection">
          <a href="#!" className="collection-item">Alvin</a>
          <a href="#!" className="collection-item active">Alvin</a>
          <a href="#!" className="collection-item">Alvin</a>
          <a href="#!" className="collection-item">Alvin</a>
        </div>
      </div>
    </div>

  );
}

export default App;
