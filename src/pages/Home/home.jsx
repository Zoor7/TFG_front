import { useContext } from 'react'
import {
    Link
} from "react-router-dom";

import PlaceCard from '../../components/placeCard/placeCard'
import PlacesContext from '../../context/placesContext/placesContext';

import './home.scss'

const Home = () => {
    const { state } = useContext(PlacesContext)
    return (
        <div className="home-container">
            {state.places.map(place => (
                <Link style={{ textDecoration: 'none' }}
                    key={place.id}
                    to={{
                        pathname:`/lugar/descripcion`,
                        state:{place}
                    }} >
                    <PlaceCard place={place} />
                </Link>

            ))}
        </div>
    )
}

export default Home