import { useState } from 'react'

import { AiOutlineHome, AiFillHome, AiOutlineSetting, AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

import Drawer from '@material-ui/core/Drawer';
import useWindowDimensions from '../../hooks/useWindowDimension';
import {
    Link
} from "react-router-dom";

import './header.scss'

const Header = () => {

    const [isClosed, setIsClosed] = useState(false)
    const { width } = useWindowDimensions();


    const header = () => {
        return (
            <div className="header-container">

                <Link className="home item" to='/'>
                    <AiOutlineHome size='1.8rem' />
                    <p>Home</p>
                </Link>

                <Link className="Explorar item" to='/detalle/descripcion'>
                    <AiOutlineSearch size='1.8rem'/>
                    <p>Explorar</p>
                </Link>

                <div className="config item">
                    <AiOutlineSetting size='1.8rem' />
                    <p>Configuración</p>
                </div>

                <hr style={{ width: '30%', alignSelf: 'center' }}></hr>
            </div>

        )
    }


    return (
        <div>

            {width >= 900 ? header()
                : (<div className="mobile-header">
                    <div className=''>
                        <p className='header-title'>bcurious</p>
                        <GiHamburgerMenu size='1.5rem' onClick={() => setIsClosed(!isClosed)} />
                    </div>
                    <Drawer anchor={'right'} open={isClosed} onClose={() => setIsClosed(!isClosed)}>
                        {header()}
                    </Drawer>
                </div>
                )
            }

        </div>

    )

}

export default Header