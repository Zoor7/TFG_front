import "./ubicacion.scss";

const Ubicacion = ({ place }) => {
  return (
    <div className="ubicacion-container">
      {place.web && (
        <a
          href={place.web}
          alt={place.web}
          target="_blank"
          rel="noreferrer"
          className="location-web--link"
        >
          {`Página web: ${place.web}.`}
        </a>
      )}
      {!place.web && <p>El lugar no dispone de web.</p>}
      <p>{`Tipo de lugar: ${place.type}`}</p>
    </div>
  );
};

export default Ubicacion;
