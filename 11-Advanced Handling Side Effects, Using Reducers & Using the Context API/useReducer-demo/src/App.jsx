import { useState, useReducer } from 'react'
import './App.css'
import Todo from './Todo'

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo',
}

function reducer(todos, action) {/* todos parameter is the old state and
action parameter can access all the properties passed to dispatch. */
  switch (action.type) {
    
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)] // return new state.

    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) { 
          return { ...todo, complete: !todo.complete }
        }
        return todo 
      })

    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)

    default:
      return todos
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false }
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  function handleSubmit(e) {
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
    e.preventDefault()

    setName('')
  }
  console.log(todos)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
      </form>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      })}
    </>
  )
}