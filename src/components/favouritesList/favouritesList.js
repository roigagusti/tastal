import React from 'react'
import './favouritesList.css'

export const FavouritesList = () => {
  return (
    <div class="fav-card box-shadow">
        <div class="nav-line">
        <svg viewBox="0 0 640 512" stroke-width="2" focusable="false" aria-hidden="true" role="presentation" stroke-linecap="round" stroke-linejoin="round">
            <path d="M640 239.87v31.26A15.88 15.88 0 0 1 624.14 287H15.87A15.88 15.88 0 0 1 0 271.13v-31.26A15.88 15.88 0 0 1 15.87 224h608.27A15.88 15.88 0 0 1 640 239.87z"></path>
        </svg>
    </div>
    <div class="fav-content">
        <h1>Favoritos</h1>
        <div class="fav-nav">
            <ul>
                <li id="favNavRestaurantes" class="active">Restaurantes</li>
                <li id="favNavListas">Listas</li>
            </ul>
        </div>

        <div id="favLlistes"><ul class="rest-list">
        <li class="rest-item">
            <div class="rest-info">
                <div class="rest-name">Bar Pietro</div>
                <div class="rest-location">Travessera de Gràcia, 197, 08012 Barcelona, España · Barcelona</div>
            </div>
            <div class="rest-data">
                <div class="rest-distance"></div>
            </div>
            <div class="rest-edit">
                <svg viewBox="0 0 17.93 4.25">
                    <path class="cls-1" d="M4.25,2.13A2.13,2.13,0,1,1,2.13,0,2.12,2.12,0,0,1,4.25,2.13ZM9,0a2.13,2.13,0,1,0,2.13,2.13A2.12,2.12,0,0,0,9,0ZM15.8,0a2.13,2.13,0,1,0,2.13,2.13A2.12,2.12,0,0,0,15.8,0Z"></path>
                </svg>
            </div>
        </li>
        
        <li class="rest-item">
            <div class="rest-info">
                <div class="rest-name">Forastera</div>
                <div class="rest-location">Carrer de Sancho de Ávila, 22, 08018 Barcelona, España · </div>
            </div>
            <div class="rest-data">
                <div class="rest-distance"></div>
            </div>
            <div class="rest-edit">
                <svg viewBox="0 0 17.93 4.25">
                    <path class="cls-1" d="M4.25,2.13A2.13,2.13,0,1,1,2.13,0,2.12,2.12,0,0,1,4.25,2.13ZM9,0a2.13,2.13,0,1,0,2.13,2.13A2.12,2.12,0,0,0,9,0ZM15.8,0a2.13,2.13,0,1,0,2.13,2.13A2.12,2.12,0,0,0,15.8,0Z"></path>
                </svg>
            </div>
        </li>
        
        <li class="rest-item">
            <div class="rest-info">
                <div class="rest-name">Café Salambó</div>
                <div class="rest-location">C/ de Torrijos, 51, 08012 Barcelona, España · </div>
            </div>
            <div class="rest-data">
                <div class="rest-distance"></div>
            </div>
            <div class="rest-edit">
                <svg viewBox="0 0 17.93 4.25">
                    <path class="cls-1" d="M4.25,2.13A2.13,2.13,0,1,1,2.13,0,2.12,2.12,0,0,1,4.25,2.13ZM9,0a2.13,2.13,0,1,0,2.13,2.13A2.12,2.12,0,0,0,9,0ZM15.8,0a2.13,2.13,0,1,0,2.13,2.13A2.12,2.12,0,0,0,15.8,0Z"></path>
                </svg>
            </div>
        </li>
	
        <div class="empty-list center pt10">3 restaurantes favoritos</div></ul></div>
    </div>
    
  </div>
  )
}


export default FavouritesList;