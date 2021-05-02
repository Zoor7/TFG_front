import { FaMapMarkedAlt, FaRegComment } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';
import {
    Route, useLocation, useHistory
} from "react-router-dom";

import Avatar from '../avatar/avatar'
import NavDetalle from '../navDetalle/navDetalle'
import Descripcion from '../../pages/Detalle/descripcion/descripcion.jsx';
import Comentarios from '../../pages/Detalle/comentarios/comentarios';
import Ubicacion from '../../pages/Detalle/ubicacion/ubicacion';

import './placecard.scss'

const PlaceCard = ({ place, urlTo }) => {

    let url = useLocation().pathname
    let history = useHistory()

    const navigateTo = () => {
        history.push({
            pathname: urlTo,
            state: { place }
        })
    }
     function handleChildClick(e) {
        e.stopPropagation();
        console.log('child');
      }

    return (
        <div className="placecard-container" onClick={url!=='/'?null:navigateTo}>

            <div className="placecard-header">
                <div className="user-placecard">
                    <Avatar img={place.author.avatar} />
                    <p>{place.author.username}</p>
                </div>
                <FaMapMarkedAlt size='1.6rem' />
            </div>

            <div className="placecard-image">
                <img src={place.image_url} alt=""/>
            </div>

            <div className="placecard-footer">
                <div onClick={(e)=>handleChildClick(e)} className=" like interaction">
                    <BsHeart size='1.3rem' />
                    {place.likes.length}
                </div>
                <div className="comment interaction">
                    <FaRegComment size='1.3rem' />
                    {place.comments.length}
                </div>
            </div>
            {url.includes('lugar')
                ? <div>
                    <NavDetalle place={place} />
                </div>
                : null}
            <Route path='/lugar/descripcion'>
                <Descripcion text={place.description} />
            </Route>
            <Route path='/lugar/comentarios'>
                <Comentarios place={place} />
            </Route>
            <Route path='/lugar/ubicacion'>
                <Ubicacion place={place}  />
            </Route>

        </div>
    )

}

export default PlaceCard