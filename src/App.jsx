import { useEffect, useState } from "react"
import "./styles.css"
 
export default function App() {

  const [toDos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
  
    return JSON.parse(localValue)
  })
  
  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(toDos))
  }, [toDos])

  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem !== "") {
      setToDos(currentToDos => {
        return [
        ...currentToDos,
        {id: crypto.randomUUID(), title: newItem, completed: false},
        ]
      })
      setNewItem("")
    }
  }

  function taggleToDo(id, completed) {
    setToDos(currentToDos => {
      return currentToDos.map(toDo => {
        if (toDo.id === id) {
          return {...toDo, completed}
        }

        return toDo
      })
    })
  }

  function deleteToDo(id) {
    setToDos(currentToDos => {
      return currentToDos.filter(toDo => toDo.id!==id)
    })
  }

  return (
    <>
      <h1 className="small-header">New task</h1>

      <form onSubmit={handleSubmit} className="new-item-form">

        <div className="form-row">
          <input
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>

      </form>

      <h1 className="header">To Do List</h1>

      <ul className="list">
        {toDos.length === 0 && "Nothing"}
        {toDos.map(toDo => {
          return (
            <li key={toDo.id}>
              <label>
                <input type="checkbox" checked={toDo.completed} 
                onChange={e => taggleToDo(toDo.id, e.target.checked)} />
                {toDo.title}
              </label>
              <button onClick={() => deleteToDo(toDo.id)} className="btn btn-danger">Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}