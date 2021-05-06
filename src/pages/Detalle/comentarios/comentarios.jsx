import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
} from "react";
import { useHistory } from "react-router";
import Avatar from "../../../components/avatar/avatar";
import PlacesContext from "../../../context/placesContext/placesContext";
import { addComment as addComment_place } from "../../../services/placesService";
import { addComment as addComment_user } from "../../../services/userService";
import { createComment } from "../../../services/commentService";

import "./comentarios.scss";

const Comentarios = ({ place }) => {
  const [message, setMessage] = useState("");
  const { state, dispatch } = useContext(PlacesContext);
  let history = useHistory();

  const handleComment = (str) => {
    setMessage(str);
  };

  const makeComment = async () => {
    const comment = {
      author: "6091c207fe3ed61b10fde239",
      author_username: "zoor",
      text: message,
      isResponse: false,
      place: place.id,
    };
    const newComment = await createComment(comment);

    if (newComment.error) {
      return;
    }
    const commentPlaceIds = {
      commentId: newComment.id,
      placeId: place.id,
    };

    const updatedPlace = await addComment_place(commentPlaceIds);

    dispatch({
      type: "UPDATE_PLACE",
      payload: {
        ...updatedPlace,
      },
    });
    // history.push({
    //     to: `/lugar/comentarios/${place.id}`,
    //     state: {
    //         place: {
    //             ...updatedPlace
    //         }
    //     },
    // })
  };

  return (
    <div className="comentario-container">
      {place.comments.map((comment) => (
        <li key={comment.id}>
          <div className="comment">
            {/* <Avatar img={comment.author.avatar}/> */}
            <p style={{ fontWeight: 600, fontSize: "0.9rem" }}>
              {comment.author_username}
            </p>
            <p>{comment.text}</p>
          </div>
          <p className="fancy">
            <span>Respuestas: {comment.responses.length}</span>
          </p>
        </li>
      ))}
      <div className="textarea-container">
        <textarea
          className="comment-textarea"
          onChange={(e) => handleComment(e.target.value)}
          maxLength="200"
          placeholder="Comenta aqui...."
        ></textarea>
        <button className="textarea-btn" onClick={makeComment}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Comentarios;
