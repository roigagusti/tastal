import React from 'react'
import { HeaderFavourites } from '../components/Header/headerFavourites.js';
import { Footer } from '../components/Footer/footer.js';
import MapComponent from '../components/Map/map.js';
import FavouritesList from '../components/favouritesList/favouritesList.js';

export const Favourites = () => {
  return (
    <>
    <HeaderFavourites />
    <MapComponent />
    <FavouritesList />
    <Footer />
    </>
  )
}

export default Favourites;