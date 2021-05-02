import React,{useState,useEffect} from 'react'


import './comentarios.scss'

const Comentarios = ({comments}) => {

    useEffect(() => {
        
    }, [])

    return(
        <div className="comentario-container">
            {comments.map(comment=>{
                <li></li>
            })}
        </div>
    )
}

export default Comentarios