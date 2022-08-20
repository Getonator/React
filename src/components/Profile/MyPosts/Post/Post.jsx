import React from "react";
import './Post.module.css'
import s from './Post.module.css'


const Post = (props) => {
    return (

        <div className={s.item}>
            <img src="https://million-wallpapers.ru/wallpapers/5/51/455458761658281/avatar-glavnaya-geroinya-krupno.jpg"
                 alt=""/>
            {props.message}

            <div>
                <span>Лайк!</span> {props.laikCkaun}
            </div>

        </div>

    );
}

export default Post;