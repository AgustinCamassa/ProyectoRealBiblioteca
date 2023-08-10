import { Link } from "react-router-dom";

const Cards = ({ srcImg, title, text, srcLink }) => {
  return (
    <div className="tarjeta">
      <img className="imgTarjetas" src={srcImg} alt={`image ${srcImg}`} />
      <h2>{title}</h2>
      <p className="p">{text}</p>
      <div className="btnDiv">
        <Link to="/Paginas/Servicios">
          <img
            className="imgFlecha"
            src={srcLink}
            alt={`image link ${srcLink}`}
          />
        </Link>
      </div>
    </div>
  );
};
export default Cards;
