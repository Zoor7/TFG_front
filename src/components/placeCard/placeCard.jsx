import { FaMapMarkedAlt,FaRegComment } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';

import Avatar from '../avatar/avatar'
import './placecard.scss'

const PlaceCard = () => {

    return (
        <div className="placecard-container">

            <div className="placecard-header">
                <div className="user-placecard">
                    <Avatar  img='https://www.cinemascomics.com/wp-content/uploads/2020/09/teoria-one-piece-zoro-ronoa-960x720.jpg.webp' />
                    <p>Adri</p>
                </div>
                <FaMapMarkedAlt size='1.6rem' pointerEvents='true' />
            </div>

            <div className="placecard-image">
                <img src="https://www.aerobusbcn.com/blog/wp-content/uploads/2019/02/sagrada-familia-exterior-700x500.jpg" alt="" />
            </div>

            <div className="placecard-footer">

                <div className="interaction">
                    <BsHeart size='1.3rem' />
                    54
                </div>

                <div className="interaction">
                    <FaRegComment size='1.3rem'/>
                    54
                </div>

            </div>

        </div>
    )

}

export default PlaceCard