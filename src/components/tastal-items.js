import React from 'react'


function Image(props){
  return (
    <img src={props.source} alt={props.alt} class={props.class}/>
  )
}
function Like(props){
  return (
    <div class="icon-fav">
      <svg class="fav" id="fav" viewBox="0 0 61.19 54.06" stroke-width="2" focusable="false" aria-hidden="true" role="presentation" stroke-linecap="round" stroke-linejoin="round">
        <path class="cls-1" d="M45.5,2.25c-5.69,0-11.1,3.52-14.62,7.58C26.54,5.5,20.59,1.17,14.09,2.52a13.08,13.08,0,0,0-9.75,7C-1.89,20.66,7.05,32,14.9,39.62a131,131,0,0,0,11.64,9.75c1.09.81,3,2.44,4.34,2.44s3.25-1.63,4.33-2.44c8.67-6.23,17.87-13.81,22.21-23.83,4.06-9.21,0-23.29-11.92-23.29" />
      </svg>
    </div>
  )
}
function ProfilePhoto(props){
  return (
    <div class="profile-photo shadow" style={{ backgroundImage: `url(${props.img})` }}>
    </div>
  )
}
function Logo(props){
  let source
  let classe
    if (props.type === 'light'){
      classe = "access-logo"
        source = "img/logoLight.png"
    }
    if (props.type === 'dark'){
        classe = "access-logo"
        source = "img/logoDark.png"
    }
    if (props.type === 'bn'){
      classe = "index-logo"
        source = "img/logoBN.png"
    }
    return (
    <>
    <div class={classe}>
        <img src={source} alt="Logo Tastal"/>
    </div>
    </>
    )
}
function MarkerIcon(){
  return (
    <svg class="markericon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
  )
}

export {Image, Like, ProfilePhoto, Logo, MarkerIcon};