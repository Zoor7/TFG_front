import { useState } from "react";
import { useForm } from "react-hook-form";

import Modal from "react-modal";
import Mapa from "../../components/Mapa/Mapa";

import { errorToast} from "../../components/toast/customToast";
import { getNearbyPlaces } from "../../services/placesService";
import { useHistory } from "react-router";

import "./explorar.scss";

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(90,98,107,.9)",
    zIndex: 999,
  },
  content: {
    position: "null", // to override default styles
    top: "null",
    left: "null",
    right: "null",
    width: "100%",
    bottom: "null",
    border: "2px solid #5B6675",
    background: "#fff",
    height: "40vh",
    padding: 0,
  },
};

Modal.setAppElement("#root");
const Explorar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history=useHistory()

  const [position, setPosition] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [explorar, setExplorar] = useState();

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const askPosition = () => {
    if (!position) {
      navigator.geolocation.getCurrentPosition((res) => {
        const coords = {
          lat: res.coords.latitude,
          lng: res.coords.longitude,
        };
        setPosition(coords);
      });
    }
  };
  const showErrorPosition=()=>{
    if(!position){
      askPosition()
      errorToast('Es necesario el acceso a la ubicación para continuar')

    }
  }

  const onSubmit = async (data) => {
    if (data.position === "ubicacion") {

      const info = {
        kms: Number(data.kms),
        coordinates: [position.lat, position.lng],
      };
      const nearbyPlaces = await getNearbyPlaces(info);
      const obj = {
        position,
        kms: Number(data.kms),
        places: [...nearbyPlaces],
      };
      setExplorar(obj);
      handleModal();
    } else {

      const info = {
        kms: Number(data.kms),
        coordinates: [position.lat, position.lng],
      };
      const nearbyPlaces = await getNearbyPlaces(info);
      const random = Math.floor(Math.random() * nearbyPlaces.length);
      
      history.push(`/lugar/${nearbyPlaces[random].id}`)
    }
  };

  return (
    <div className="container main-container">

      <div className="explorar-container">
      <Modal isOpen={modalIsOpen} onRequestClose={handleModal} style={styles}>
        <Mapa explorar={explorar} />
      </Modal>

      <h1>Descubre lugares de otros usuarios</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select
          {...register("position", { required: true })}
          defaultValue=""
          onChange={askPosition}
        >
          <option value="" selected disabled>
            Elige
          </option>
          <option value="ubicacion">Tu ubicación</option>
          <option value="random">Random</option>
        </select>
        {errors?.position?.type === "required" && (
          <span style={{ color: "red" }}>Introduzca el campo, por favor.</span>
        )}
   
        <input
          {...register("kms", { required: true })}
          type="number"
          min="0"
          placeholder="Número de kms"
        />
        {errors?.kms?.type === "required" && (
          <span style={{ color: "red" }}>Introduzca el campo, por favor.</span>
        )}
        <button
          className="search-button"
          onClick={showErrorPosition}
        >
          Buscar
        </button>
      </form>
      </div>
    </div>
  );
};

export default Explorar;
