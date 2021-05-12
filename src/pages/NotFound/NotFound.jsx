import notFound from '../../assets/images/notFound.webp'
import pulpNotFound from '../../assets/images/pulpNotFound.webp'
import useWindowDimensions from '../../hooks/useWindowDimension'

import './notFound.scss'

const NotFound = () => {

    const {width}=useWindowDimensions()

    return(
        <div className="notfound-container" >
            <img src={width<=900?pulpNotFound:notFound} alt="404" />
            <button onClick={()=>console.log('holw')} className='notfound-btn'>HOME</button>
        </div>
    )
    
}

export default NotFound