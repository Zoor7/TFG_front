import PlaceCard from '../../components/placeCard/placeCard'
import './descripcion.scss'

const Descripcion = ({text}) => {

    return (
        <div className="descripcion-container">
            <p>{text}</p>
        </div>
    )

}

export default Descripcion