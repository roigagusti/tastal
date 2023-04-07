import React from 'react'
import { Post } from '../discoverPost/discoverPost.js';

export const Timeline = () => {
  return (
    <div class="timeline">
      <Post user="Agustí Roig" id="1" img="https://source.unsplash.com/featured/?food+salad" />
      <Post user="Gavin Belson" id="2" img="https://source.unsplash.com/featured/?food+rice" />
      <Post user="Richard Hendricks" id="3" img="https://source.unsplash.com/featured/?food+healthy" />
      <Post user="Claudia Arciniega" id="4" img="https://source.unsplash.com/featured/?foodporn" />
      <Post user="Eva Mas" id="5" img="https://source.unsplash.com/featured/?food+yummy" />
    </div>
  )
}

export default Timeline;