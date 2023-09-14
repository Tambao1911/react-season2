import { useNavigate, useParams } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Blog.module.scss";
import FetchApi from "~/components/FetchApi";

const cx = classNames.bind(styles);

function DetailBlog() {
    let { id } = useParams();
    const history = useNavigate();
    const {
        data: dataBlog,
        isLoading,
        isErr,
        message,
    } = FetchApi(`https://jsonplaceholder.typicode.com/posts/${id}`, false);
    const isEmpty = Object.keys(dataBlog).length === 0;
    const handleBackData = () => {
        history("/blog");
    };
    return (
        <>
            Post ID : {id} {isLoading ? "Loading..." : ""}
            {dataBlog && !isEmpty && (
                <div className={cx("container")}>
                    <>
                        <div className={cx("blog")}>
                            <div className={cx("title")}>{dataBlog.title}</div>
                            <div className={cx("body")}>{dataBlog.body}</div>
                        </div>

                        <button onClick={handleBackData}>Back</button>

                    </>
                </div>
            )}
            {isErr && (
                <div>
                    <p colSpan="5">{message}</p>
                </div>
            )}
        </>
    );
}

export default DetailBlog;
