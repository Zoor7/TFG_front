
import { useLocation, useHistory } from 'react-router'
import PlaceCard from '../../components/placeCard/placeCard'
import './detalle.scss'

const Detalle = () => {
    const location = useLocation()
    const history = useHistory()

    if (!location.state) {
        history.push('/')
        window.location.reload()
    }else{
        return (
            <PlaceCard place={location.state.place} />
            )
        }

}

export default Detalle