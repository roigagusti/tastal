import React from 'react'
import { ProfilePhoto } from '../tastal-items.js';
import "./profileInfo.css"

export const ProfileInfo = (props) => {
  return (
    <div class="profile-info">
        <ProfilePhoto img='https://source.unsplash.com/250x250/?person' />
        <div class="profile-name">{props.user}</div>
        <div class="status-counter">
            <div class="status-restaurants">
                <div class="status-number">{props.restaurants}</div>
                <div class="status-name">restaurants</div>
            </div>
            <div class="status-followers">
                <div class="status-number">{props.followers}</div>
                <div class="status-name">followers</div>
            </div>
            <div class="status-following">
                <div class="status-number">{props.following}</div>
                <div class="status-name">following</div>
            </div>
        </div>
    </div>
  )
}

export default ProfileInfo;