import { useContext } from 'react'

import PlaceCard from '../../components/placeCard/placeCard'
import {
    Link
} from "react-router-dom";
import PlacesContext from '../../context/placesContext/placesContext';


const Home = () => {
    const { state } = useContext(PlacesContext)
    return (
        <div className="home-container">
            {state.places.map(place => (
                <Link style={{textDecoration:'none'}} key={place.id} to={`/lugar/descripcion`} >
                    <PlaceCard place={place} />
                </Link>

            ))}
        </div>
    )
}

export default Home