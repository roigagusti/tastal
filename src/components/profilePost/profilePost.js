import React from 'react'
import "./profilePost.css"

export const Post = (props) => {
  return (
    <div class="image-post" onclick="location.href='discover.php?post={props.id}'" style={{ backgroundImage: `url(${props.img})` }}>
    </div>
  )
}

export default Post;