import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()
 
function ResultatsQuery({query}) {
    return (
        <QueryClientProvider client={queryClient}>
        <Spots place={query}/>
        </QueryClientProvider>
    )
}

function Spots(props) {
    const { isLoading, error, data } = useQuery('places', () =>
        fetch(`https://api.tastal.ga/places.php?query=${props.place}&type=findSpot&lan=es&limit=2`).then(res =>
            res.json()
        )
    )
    
    if (isLoading) return 'Loading...'
  
    if (error) return 'An error has occurred: ' + error.message
    if (data && data.fields) {
        return (
            <>
            <div className="resultats-query">
                <ul className="resultats-llista">
                    {data.fields.results.slice(0,10).map((result) => (
                        <li class="rest-item">
                            <div class="rest-info">
                                <div class="rest-name">{result.name}</div>
                                <div class="rest-location">{result.formatted_address}</div>
                            </div>
                            <div class="rest-save">
                                <button type="submit">Guardar</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            </>
        )
    } else {
        return (
            <div>The field does not exist in the data</div>
        )
    }
}

export {ResultatsQuery};