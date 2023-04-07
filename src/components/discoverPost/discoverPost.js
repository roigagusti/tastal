import React from 'react'
import {NavLink} from "react-router-dom";
import { Image, Like } from '../tastal-items.js';
import "./discoverPost.css"

export const Post = (props) => {
  let time = 'Hace 4 días'
  return (
    <div class="post">
      <div class="user-post">
        <div class="user-data">
          <NavLink to={'/profile.php'} id={props.id}>
            <Image source="https://source.unsplash.com/250x250/?person" alt="userimg" class="user-img" />
          </NavLink>
          <div class="user-info">
            <NavLink to={'/profile.php'} id={'1'}>
              <div class="name">{props.user}</div>
            </NavLink>
            <div class="time">{time}</div>
          </div>
        </div>
      </div>

      <Image source={props.img} alt="img01" class="post-img" />

      <div class="info-post">
        <div class="data-info">
          <div class="restaurant-name">Nom restaurant</div>
          <div class="restaurant-site">Ubicació restaurant</div>
        </div>
        <Like />
      </div>

      <div class="post-text">
        <div class="plat-name">Nom del plat</div>
      </div>
    </div>
  )
}

export default Post;