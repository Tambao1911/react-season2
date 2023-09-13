import { useState } from "react";

function Todo() {
    const [name, setName] = useState('')
    const [todos, setTodos] = useState([
        { id: 'todo1', name: 'Learn React' },
        { id: 'todo2', name: 'Learn Javascript' },
        { id: 'todo3', name: 'Learn Nodejs' },
    ])


    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = () => {
        if (!name) {
            return;
        }
        setTodos([...todos, { id: Math.floor(Math.random() * 100), name: name }])
        setName('')
    }

    const handleDelete = (id) => {
        let newTodo = [...todos]
        newTodo = newTodo.filter(todo => todo.id !== id)
        setTodos(newTodo)
    }

    return (
        <div>
            <input value={name} type="text" onChange={(e) => handleChange(e)} />
            <button onClick={handleSubmit}>Add</button>
            {todos && todos.length > 0 && (
                todos.map((item, index) => (
                    <div key={item.id}>
                        {index + 1} - {item.name}
                        <button onClick={() => handleDelete(item.id)}> X</button>
                    </div>
                ))
            )}
            <hr />
        </div>
    );
}

export default Todo;