import { useState,useEffect } from 'react'

import { AiOutlineHome, AiFillHome, AiOutlineSetting, AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu, GiWoodenClogs } from 'react-icons/gi';

import Drawer from '@material-ui/core/Drawer';
import useWindowDimensions from '../../hooks/useWindowDimension';
import {
    NavLink,
    useHistory
} from "react-router-dom";

import './header.scss'

const Header = () => {
    const [active, setActive] = useState(window.location.pathname)
    const [isClosed, setIsClosed] = useState(false)
    const { width } = useWindowDimensions();
    let url=window.location.pathname

    useEffect(() => {
        setActive(window.location.pathname)
    }, [url])


    const header = () => {
        return (
            <div className="header-container">

                <NavLink   activeClassName='item item-active' to='/'>
                    {active==='/'?<AiFillHome size='1.8rem' />:<AiOutlineHome size='1.8rem' />}
                    <p>Home</p>
                </NavLink>

                <NavLink onClick={()=>setActive()}   className="Explorar item" to='/explorar'>
                    <AiOutlineSearch size='1.8rem'/>
                    <p>Explorar</p>
                </NavLink>

                <NavLink className="config item" to='/config'>
                    <AiOutlineSetting size='1.8rem' />
                    <p>Configuración</p>
                </NavLink>

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