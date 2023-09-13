import classNames from 'classnames/bind';
import styles from './Nav.module.scss'
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles)

function Nav() {
    return (
        <div className={cx("topnav")}>
            <NavLink className={({ isActive }) => isActive ? cx('active') : ''} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? cx('active') : ''} to="/timer">Timer Apps</NavLink>
            <NavLink className={({ isActive }) => isActive ? cx('active') : ''} to="/todo">Todo Apps</NavLink>
            <NavLink className={({ isActive }) => isActive ? cx('active') : ''} to="/blog">Blog Apps</NavLink>
            <NavLink className={({ isActive }) => isActive ? cx('active') : ''} to="/secret">Secret</NavLink>
        </div>
    );
}

export default Nav;