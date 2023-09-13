import classNames from "classnames/bind";

import styles from "./Blog.module.scss";
import FetchApi from "~/components/FetchApi";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Blog() {
    const {
        data: dataBlogs,
        isLoading,
        isErr,
        message,
    } = FetchApi(`https://jsonplaceholder.typicode.com/posts`, false);
    let newData = [];
    if (dataBlogs && dataBlogs.length > 0) {
        newData = dataBlogs.slice(0, 9);
    }
    return (
        <div className={cx("container")}>
            {!isLoading && !isErr && newData &&
                newData.length > 0 &&
                newData.map((post) => (
                    <div className={cx("blog")} key={post.id}>
                        <div className={cx("title")}>{post.title}</div>
                        <div className={cx("body")}>{post.body}</div>
                        <button>
                            <Link to={`/blog/${post.id}`}>View Detail</Link>
                        </button>
                    </div>
                ))
            }
            {isLoading && (
                <div>Loading data...</div>
            )}
            {isErr && (
                <div>
                    <p colSpan="5" >{message}</p>
                </div>
            )}
        </div>
    );
}

export default Blog;
