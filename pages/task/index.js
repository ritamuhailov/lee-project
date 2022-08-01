import * as React from 'react';
// import styles from "../task/Style.module.css"
import { useState } from 'react'

const Task = () => {
    const [userInput, setUserInput] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleChange = (e) => {

        e.preventDefault()
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setTodoList([
            userInput,
            ...todoList
        ])
    }
    return (
        <div>
            <h3> Next JS Todo List</h3>
            <form>
                <input type="text" onChange={handleChange} />
                <button onClick={handleSubmit}>Submit</button>
                <ul>
                    {
                        todoList >= 1 ? todoList.map((todo, idx) => {
                            return <li key={idx}>(todo)</li>
                        })
                            : 'Enter a todo item'
                    }
                </ul>
            </form>
        </div>
    )
}

export default Task;

// function Task() {
//     return (
//         <section className='addTask'>
//             <div className='newTask'>
//                 <button className='newTask' onClick={(e) => { e.target.value === userName; }}> משימה חדשה </button>
//             </div>

//             <div className='addTask'>
//                 <input id="title" type="text" placeholder="שם המשימה"></input>
//                 <input id="description" type="text" placeholder="תיאור/פירוט"></input>
//                 <input id="dueDate" type="date" placeholder="תאריך יעד"></input>
//                 <input id="dependencies" type="text" placeholder="תלויות במשימות אחרות"></input>
//                 <input id="responsible" type="text" placeholder="אחריות של"></input>
//                 <input id="done" type="text" placeholder="בוצע/לא בוצע"></input>
//                 <input id="remarks" type="text" placeholder="הערות"></input>
//             </div>

//             {/* <div className='addButton'>
//         <button className='addButton' onClick={(e) => { e.target.value === userName; }}> הוסף </button>
//     </div> */}

//         </section>
//     )
// }

// export default Task
