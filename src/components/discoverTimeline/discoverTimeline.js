import React from 'react'
import { DiscoverPost } from '../discoverPost/discoverPost.js';

export const DiscoverTimeline = () => {
  return (
    <div class="timeline">
      <DiscoverPost user="Agustí Roig" id="1" img="https://source.unsplash.com/featured/?food+salad" />
      <DiscoverPost user="Gavin Belson" id="2" img="https://source.unsplash.com/featured/?food+rice" />
      <DiscoverPost user="Richard Hendricks" id="3" img="https://source.unsplash.com/featured/?food+healthy" />
      <DiscoverPost user="Claudia Arciniega" id="4" img="https://source.unsplash.com/featured/?foodporn" />
      <DiscoverPost user="Eva Mas" id="5" img="https://source.unsplash.com/featured/?food+yummy" />
    </div>
  )
}

export default DiscoverTimeline;