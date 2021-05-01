import { FaMapMarkedAlt, FaRegComment } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';
import {
    Route,useLocation
} from "react-router-dom";

import Avatar from '../avatar/avatar'
import avatarPlaceholder from '../../assets/images/avatarPlaceholder.webp'
import NavDetalle from '../navDetalle/navDetalle'
import Descripcion from '../../pages/Detalle/descripcion/descripcion.jsx';
import Comentarios from '../../pages/Detalle/comentarios/comentarios';
import Ubicacion from '../../pages/Detalle/ubicacion/ubicacion';

import './placecard.scss'

const PlaceCard = ({place}) => {

    let url= useLocation().pathname

    return (
        <div className="placecard-container">

            <div className="placecard-header">
                <div className="user-placecard">
                    <Avatar img={place.author.avatar? place.author.avatar : avatarPlaceholder } />
                    <p>{place.author.username}</p>
                </div>
                <FaMapMarkedAlt size='1.6rem' />
            </div>

            <div className="placecard-image">
                <img src={place.image_url} alt="" />
            </div>

            <div className="placecard-footer">
                <div className=" like interaction">
                    <BsHeart size='1.3rem' />
                    54
                </div>
                <div className="comment interaction">
                    <FaRegComment size='1.3rem' />
                    54
                </div>
            </div>
        	{url.includes('lugar')
            ?<div>
                <NavDetalle place={place}/>
            </div>
            :null}
            <Route path='/lugar/descripcion'>
                <Descripcion text={place.description} />
            </Route>
            <Route path='/lugar/comentarios'>
                <Comentarios text={place.description} />
            </Route>
            <Route path='/lugar/ubicacion'>
                <Ubicacion text={place.description} />
            </Route>

        </div>
    )

}

export default PlaceCard