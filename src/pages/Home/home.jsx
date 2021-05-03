import { useContext } from 'react'

import PlaceCard from '../../components/placeCard/placeCard'
import PlacesContext from '../../context/placesContext/placesContext';

import './home.scss'

const Home = () => {
    const { state } = useContext(PlacesContext)
    return (
        <div className="home-container">
            {state.places.map(place => (
                <li key={place.id} style={{ listStyle: 'none' }}>
                    <PlaceCard place={place} urlTo={`/lugar/descripcion`} />
                </li>
            ))}
        </div>
    )
}

export default Home