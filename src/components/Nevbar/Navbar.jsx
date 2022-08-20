import React from "react";
import s from './Nevbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nev}>
            <div className={s.item}>
                <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item }>Моя страница</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className = { navData => navData.isActive ? s.active : s.item }>Новости</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/friends" className = { navData => navData.isActive ? s.active : s.item }>Друзья</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/communities' className = { navData => navData.isActive ? s.active : s.item } >Сообщества</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className = { navData => navData.isActive ? s.active : s.item }>Музыка</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/games' className = { navData => navData.isActive ? s.active : s.item }>Игры</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;

