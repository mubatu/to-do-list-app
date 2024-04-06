import "./styles.css"
 
export default function App() {
  return (
    <>
      <h1 className="small-header">New Task</h1>

      <form className="new-item-form">

        <div className="form-row">
          <input type="text" id="item"/>
        </div>
        <button className="btn">Add</button>

      </form>

      <h1 className="header">To Do List</h1>

      <ul className="list">
        <li>
          <label>
            <input type="checkbox"/>
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>

        <li>
          <label>
            <input type="checkbox"/>
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  )
}