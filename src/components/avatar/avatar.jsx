import avatarPlaceholder from '../../assets/images/avatarPlaceholder.webp'
import './avatar.scss'

const Avatar = ({img}) => {

    return(
        <div className="avatar-container">
            <img src={img || avatarPlaceholder} alt="A"/>
        </div>
    )
    
}

export default Avatar