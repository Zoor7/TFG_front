import placeholder from '../../assets/images/avatarPlaceholder.webp'

import './avatar.scss'

const Avatar = ({img}) => {


    return(
        <div className="avatar-container">
            <img src={img || placeholder} alt="A"/>
        </div>
    )
    
}

export default Avatar