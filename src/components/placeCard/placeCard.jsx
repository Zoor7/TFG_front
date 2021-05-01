import { FaMapMarkedAlt, FaRegComment } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';
import {
    useLocation,
    Route
} from "react-router-dom";

import Avatar from '../avatar/avatar'
import './placecard.scss'
import Descripcion from '../../pages/Detalle/descripcion';


const PlaceCard = ({ place, description }) => {

    return (
        <div className="placecard-container">

            <div className="placecard-header">
                <div className="user-placecard">
                    <Avatar img={place.image_url} />
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

            <Route path='/lugar/descripcion'>
                <Descripcion text={place.description} />
            </Route>

        </div>
    )

}

export default PlaceCard