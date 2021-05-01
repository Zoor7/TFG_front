
import { useLocation } from 'react-router'
import PlaceCard from '../../components/placeCard/placeCard'
import './detalle.scss'

const Detalle = () => {
    const place=useLocation().state.place
    return (
            <PlaceCard place={place}/>
    )

}

export default Detalle