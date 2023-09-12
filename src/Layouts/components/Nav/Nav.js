import classNames from 'classnames/bind';
import styles from './Nav.module.scss'

const cx = classNames.bind(styles)

function Nav() {
    return (
        <div className={cx("topnav")}>
            <a className={cx("active")} href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
    );
}

export default Nav;