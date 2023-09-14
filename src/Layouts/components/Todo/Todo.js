import { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Todo.module.scss";

const cx = classNames.bind(styles);

function Todo() {
    const [name, setName] = useState("");
    const [hideInput, setHideInput] = useState(false);
    const [todos, setTodos] = useState([
        { id: "todo1", name: "Learn React" },
        { id: "todo2", name: "Learn Javascript" },
        { id: "todo3", name: "Learn Nodejs" },
    ]);

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = () => {
        if (!name) {
            return;
        }
        setTodos([...todos, { id: Math.floor(Math.random() * 100), name: name }]);
        setName("");
        setHideInput(false);
    };

    const handleDelete = (id) => {
        let newTodo = [...todos];
        newTodo = newTodo.filter((todo) => todo.id !== id);
        setTodos(newTodo);
    };

    const hideIput = () => {
        setHideInput(true);
    };

    return (
        <div className={cx("container")}>
            <h3 className={cx("title")}>List of courses.</h3>

            {todos &&
                todos.length > 0 &&
                todos.map((item, index) => (
                    <div key={item.id} className={cx("todo")}>
                        <div className={cx("index")}>{index + 1}</div>
                        <div className={cx("name")}>{item.name}</div>
                        <button onClick={() => handleDelete(item.id)}>DeleTe</button>
                    </div>
                ))
            }
            {!hideInput && (
                <div className={cx("add-new-course")}>
                    <button onClick={hideIput}>Add New Course</button>
                </div>
            )}
            {hideInput && (
                <div className={cx('container-input')}>
                    <button className={cx("btn-back")} onClick={() => setHideInput(false)}>Back</button>
                    <div className={cx("input")}>
                        <input value={name} type="text" onChange={(e) => handleChange(e)} />
                    </div>
                    <button className={cx("btn-add")} onClick={handleSubmit}>
                        Add
                    </button>
                </div>
            )}
        </div>
    );
}

export default Todo;
