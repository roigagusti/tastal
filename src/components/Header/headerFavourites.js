import React, { useState }  from 'react'
import {Logo} from "./../tastal-items.js"
import {ResultatsQuery} from "./../GooglePlaces/googlePlaces.js"
import "./header.css"

export function HeaderFavourites () {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');  
    const [enterPressed, setEnterPressed] = useState(false);
    const icon = <><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></>
    const size = '0 0 512 512'
    const width = '4'
    const handleChange = (event) => {
        setQuery(event.target.value);
    };
    function handleKeyPress(event) {
        const tecla = event.key
        if (tecla === "Enter") {
          setEnterPressed(true); // Actualitza l'estat per indicar que s'ha premut la tecla Enter
        }
        if (query === ''){
            setEnterPressed(false);
        }
        if (tecla === "Backspace"){
            setEnterPressed(false);
        }
      }

    return (
        <div class="header">
            <div class="search" onClick={() => setIsOpen(!isOpen)}>
                <svg 
                    viewBox={size} 
                    stroke-width={width} 
                    focusable="false" 
                    aria-hidden="true" 
                    role="presentation" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                >
                    {icon}
                </svg>
            </div>
            {!isOpen && (
                <Logo type="bn" />
            )}
            {isOpen && (
                <>
                <div class="header-search">
                    <input
                        type="text"
                        class="buscador"
                        id="query"
                        placeholder="Buscar restaurante..." 
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                    />
                    <div class="search">
                        <svg viewBox="0 0 512 512" stroke-width="4" focusable="false" aria-hidden="true" role="presentation" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg>
                    </div>
                    <div class="close" onClick={() => setIsOpen(!isOpen)}>
                        <svg viewBox="0 0 320 512"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" class=""></path></svg>
                    </div>
                </div>
                {enterPressed && <ResultatsQuery query={query} />}
                </>
            )}
        </div>
    )
}

export default HeaderFavourites;