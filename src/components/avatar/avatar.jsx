import './avatar.scss'

const Avatar = ({img}) => {

    return(
        <div className="avatar-container">
            <img src={img} alt="A"/>
        </div>
    )
    
}

export default Avatar