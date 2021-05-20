import { useState } from "react";
import Modal from "react-modal";

import { useForm } from "react-hook-form";
import "./explorar.scss";
import Mapa from "../../components/Mapa/Mapa";
import { getNearbyPlaces } from "../../services/placesService";

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
    padding: "28px 15px",
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

  const [position, setPosition] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [explorar, setExplorar] = useState();

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const askPosition = () => {
    navigator.geolocation.getCurrentPosition((res) => {
      const coords = {
        lat: res.coords.latitude,
        lng: res.coords.longitude,
      };
      setPosition(coords);
    });
  };

  const onSubmit = async (data) => {
    if ((data.position = "ubicacion" && position)) {
      const info = {
        kms: Number(data.kms),
        coordinates: [position.lat, position.lng],
      };
      const nearbyPlaces = await getNearbyPlaces(info);
      console.log(nearbyPlaces);
      const obj = {
        position,
        kms: Number(data.kms),
        places: [...nearbyPlaces],
      };
      setExplorar(obj);
      handleModal();
    }
  };

  return (
    <div className="explorar-container">
      <Modal isOpen={modalIsOpen} onRequestClose={handleModal} style={styles}>
        <Mapa explorar={explorar} />
      </Modal>

      <h1>Explora tus lugares favoritos</h1>
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
        <button>Buscar</button>
      </form>
    </div>
  );
};

export default Explorar;
