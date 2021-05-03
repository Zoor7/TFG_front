import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router'
import Avatar from '../../../components/avatar/avatar'
import PlacesContext from '../../../context/placesContext/placesContext'
import { addComment as addComment_place } from '../../../services/placesService'
import { addComment as addComment_user } from '../../../services/userService'


import './comentarios.scss'

const Comentarios = ({ place }) => {

    const [message, setMessage] = useState("")
    const { dispatch } = useContext(PlacesContext)
    let history = useHistory()

    const handleComment = (str) => {
        setMessage(str)
    }

    const makeComment = async () => {

        const comment = {
            placeId: place.id,
            comment: {
                author: "608f3ec5acb6dd07b0bf0ad6",
                text: message,
                isResponse: false
            }
        }
        const res_place = await addComment_place(comment)

        const newComment = res_place.comments[res_place.comments.length - 1]

        const comment_user = {
            commentId: newComment._id,
            userId: newComment.author
        }

        const res_user = await addComment_user(comment_user)

        dispatch({
            type: 'UPDATE_PLACE',
            payload: {
                ...res_place,
                author: place.author
            }
        })
        history.push({
            to:'/lugar/comentarios',
            state: {
                place: {
                    ...res_place,
                    author: place.author
                }
            },
        })

    }

    return (
        <div className="comentario-container">
            {place.comments.map(comment => (
                <li key={comment._id}>
                    <div className="comment">
                        {/* <Avatar img={comment.author.avatar}/> */}
                        <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>{comment.author.username}</p>
                        <p>{comment.text}</p>
                    </div>
                    <p className='fancy'><span>Respuestas: {comment.responses.length}</span></p>
                </li>
            ))}
            <div className="textarea-container">
                <textarea className='comment-textarea' onChange={(e) => handleComment((e.target.value))} maxLength='200' placeholder='Comenta aqui....' ></textarea>
                <button className='textarea-btn' onClick={makeComment}>Enviar</button>
            </div>

        </div>
    )
}

export default Comentarios