import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router'
import PlaceCard from '../../components/placeCard/placeCard'
import PlacesContext from '../../context/placesContext/placesContext'
import './detalle.scss'

const Detalle = () => {
    const [currentPlace, setCurrentPlace] = useState()
    const { state } = useContext(PlacesContext)
    let params = useParams()

    useEffect(() => {
        (async () => {
            const place = await state.places.find(place => place.id === params.id)
            setCurrentPlace(place)
        })()
    }, [state])

    if (currentPlace) {

        return (
            <div style={{ paddingBottom: '2rem' }}>
                <PlaceCard place={currentPlace} />
            </div>
        )
    }
    else return <h1>Loading</h1>


}

export default Detalle