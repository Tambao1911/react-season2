import { useState } from "react";
import classNames from "classnames/bind";
import { toast } from 'react-toastify'

import styles from "./Blog.module.scss";
import axios from "axios";

const cx = classNames.bind(styles);

function AddNewBlog(props) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('')

    const handleSubmitBtn = async () => {
        let data = {
            title: title,
            body: content,
            userId: 2,
        }

        let res = await axios.post(`https://jsonplaceholder.typicode.com/posts`, data)
        if (res && res.data) {
            if (!title || !content) {
                toast.error('Please Enter These Two Fields!')
                return;
            }
            toast.success('You Have Added Success')
            let newBlog = res.data;
            props.handleAddNew(newBlog)
        }
    }
    return (
        <>
            <div className={cx("add-container")}>
                <div className={cx("text-new-blog")}>Add New Blog</div>
                <div className={cx("input-title")}>
                    <label>Title: </label>
                    <input value={title} type="text" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className={cx("input-title")}>
                    <label>Content: </label>
                    <input value={content} type="text" onChange={(e) => setContent(e.target.value)} />
                </div>
                <div className={cx("btn-add")}>
                    <button onClick={handleSubmitBtn}>Add</button>
                </div>
            </div>
        </>
    );
}

export default AddNewBlog;
