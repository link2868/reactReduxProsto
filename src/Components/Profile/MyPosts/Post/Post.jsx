import React from "react";
import avatar from '../../../../img/avatar/girl-ava03.png';
import style from './Post.module.css';

const Post = (props) => { 
    return (
        <div className={style.item}>
          <img src={avatar} alt=""/>
            { props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post