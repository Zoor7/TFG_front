import { useState, useEffect } from 'react'

import { AiOutlineHome, AiFillHome, AiOutlineSetting, AiOutlineSearch, AiFillSetting, AiOutlinePlus } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

import Drawer from '@material-ui/core/Drawer';
import useWindowDimensions from '../../hooks/useWindowDimension';
import {
    NavLink, useHistory, useLocation,
} from "react-router-dom";

import './header.scss'

const Header = () => {
    const [active, setActive] = useState()
    const [isClosed, setIsClosed] = useState(false)
    const { width } = useWindowDimensions();
    const { pathname } = useLocation()
    const history = useHistory()

    useEffect(() => {
        setActive(pathname)
    }, [pathname])

    const goTo = (url) => {
        if (url === pathname) {
            return true
        }
        return false

    }

    const header = () => {
        return (
            <div className="header-container">

                <NavLink
                    className={active === '/' ? 'item item-active' : 'item'}
                    to={'/'}
                    replace={goTo('/')}
                >
                    {active === '/' ? <AiFillHome size='1.8rem' /> : <AiOutlineHome size='1.8rem' />}
                    Home
                </NavLink>

                <NavLink activeClassName='item-active' className="item" replace={goTo('/explorar')} to='/explorar'>
                    <AiOutlineSearch size='1.8rem' />
                    Explorar
                </NavLink>

                <NavLink activeClassName='item-active' className="item" replace={goTo('/create')} to='/create'>
                    <AiOutlinePlus size='1.8rem' />
                    Create
                </NavLink>

                <NavLink activeClassName='item-active' className="item" replace={goTo('/config')} to='/config'>
                    {active === '/config' ? <AiFillSetting size='1.8rem' /> : <AiOutlineSetting size='1.8rem' />}
                    Configuración
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