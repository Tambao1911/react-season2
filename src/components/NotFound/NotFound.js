import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./NotFound.module.scss";

const cx = classNames.bind(styles);

function NotFound() {

    const history = useNavigate()

    return (
        <div className={cx("not-found")}>
            <h4> This website cannot be accessed</h4>
            <h6>Please check your connection is correct then get back to us.</h6>
            <button className={cx('btn btn-primary')} onClick={() => history('/')}>Go To HomePage</button>
        </div>
    );
}

export default NotFound;
