import Avatar from "../../components/avatar/avatar"

import { BsHeart } from 'react-icons/bs';
import { FaMapMarkedAlt, FaRegComment } from 'react-icons/fa';


import './descripcion.scss'
import NavDetalle from "../../components/navDetalle/navDetalle";

const Descripcion = () => {

    return (
        <div>

            <div className="descripcion-container">
                <div className="placecard-header">
                    <div className="user-placecard">
                        <Avatar img='https://www.cinemascomics.com/wp-content/uploads/2020/09/teoria-one-piece-zoro-ronoa-960x720.jpg.webp' />
                        <p>Adri</p>
                    </div>
                    <FaMapMarkedAlt size='1.6rem' pointerEvents='true' />
                </div>
                <div className="placecard-image">
                    <img src="https://www.aerobusbcn.com/blog/wp-content/uploads/2019/02/sagrada-familia-exterior-700x500.jpg" alt="" />
                </div>
                <div className="placecard-footer">
                    <div>

                        <div className="interaction">
                            <BsHeart size='1.3rem' />
                54
	        </div>

                        <div className="interaction">
                            <FaRegComment size='1.3rem' />
                54
            </div>
                    </div>
                    <NavDetalle />
                </div>
                <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quo. Blanditiis hic soluta
                    distinctio tempore, ut dolores. Quo eveniet earum aliquid aliquam eum doloremque, magnam saepe aperiam dolorum quam perspiciatis!
            </div>
            </div>
        </div>
    )

}

export default Descripcion