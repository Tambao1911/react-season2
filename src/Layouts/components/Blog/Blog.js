import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import styles from "./Blog.module.scss";
import FetchApi from "~/components/FetchApi";
import AddNewBlog from "./AddNewBlog";

const cx = classNames.bind(styles);

function Blog() {
    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {
        data: dataBlogs,
        isLoading,
        isErr,
        message,
    } = FetchApi(`https://jsonplaceholder.typicode.com/posts`, false);

    useEffect(() => {
        if (dataBlogs && dataBlogs.length > 0) {
            let data = dataBlogs.slice(0, 9);
            setNewData(data)
        }
    }, [dataBlogs])

    const handleAddNew = (blog) => {
        let data = newData;
        data.unshift(blog);
        setShow(false);
        setNewData(data)
    };

    const handleDeleteBlog = (id) => {
        let data = newData;
        data = data.filter(item => item.id !== id)
        setNewData(data)
    }

    return (
        <>
            <Button variant="primary" className="my-3" onClick={handleShow}>
                Add New Blog
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewBlog handleAddNew={handleAddNew} />
                </Modal.Body>
            </Modal>

            <div className={cx("container")}>
                {!isLoading &&
                    !isErr &&
                    newData &&
                    newData.length > 0 &&
                    newData.map((post) => (
                        <div className={cx("blog")} key={post.id}>
                            <div className={cx("title")}>{post.title}</div>
                            <div className={cx("body")}>{post.body}</div>
                            <div className={cx("btn-blog")}>
                                <button>
                                    <Link to={`/blog/${post.id}`}>View Detail</Link>
                                </button>
                                <button onClick={() => handleDeleteBlog(post.id)} >Delete</button>
                            </div>
                        </div>
                    ))}
                {isLoading && <div>Loading data...</div>}
                {isErr && (
                    <div>
                        <p colSpan="5">{message}</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default Blog;
