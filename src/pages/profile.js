import React, { useState, useEffect } from 'react'
import { Header } from '../components/Header/header.js';
import { Footer } from '../components/Footer/footer.js';
import { ProfileInfo } from '../components/profileInfo/profileInfo.js';
import { Post } from '../components/profilePost/profilePost.js';
import { getUsernameAvailability } from '../components/api.js';

export const Profile = () => {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    const fetchdata = async () => {
      const apiResponse = await getUsernameAvailability("roigagusti");
      setResponse(apiResponse);
    };
    fetchdata();
  },[]);

  let user = 'Agustí Roig';
  let statusRestaurants = 32;
  let statusFollowers = 10;
  let statusFollowing = 5;
  return (
    <>
    <Header page= {'profile'} />
    <ProfileInfo user={user} restaurants={statusRestaurants} followers={statusFollowers} following={statusFollowing} />
    

    <div class="profile-posts">
      <Post id="1" img="https://source.unsplash.com/featured/?food+salad" />
      <Post id="2" img="https://source.unsplash.com/featured/?food+rice" />
      <Post id="3" img="https://source.unsplash.com/featured/?food+healthy" />
      <Post id="4" img="https://source.unsplash.com/featured/?foodporn" />
      <Post id="5" img="https://source.unsplash.com/featured/?food+yummy" />
    </div>

    <div class="alert-no-posts hidden">
      No hay publicaciones aun
    </div>

    <Footer />
    </>
  )
}

export default Profile;