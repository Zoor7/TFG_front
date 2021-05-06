
import { useContext, useState, useEffect } from 'react'
import { useLocation, useHistory, useParams } from 'react-router'
import PlaceCard from '../../components/placeCard/placeCard'
import PlacesContext from '../../context/placesContext/placesContext'
import './detalle.scss'

const Detalle = () => {
    const [currentPlace, setCurrentPlace] = useState()
    // const location = useLocation()
    // const history = useHistory()
    const { state } = useContext(PlacesContext)
    let params = useParams()

    useEffect(() => {
        (async () => {
            const place = await state.places.find(place => place.id === params.id)
            console.log(place)
            setCurrentPlace(place)
        })()
    }, [state])

    if(currentPlace){

        return (
            <PlaceCard place={currentPlace} />
            )
        }
    else{
        return<h1>Loading</h1>
    }


}

export default Detalle