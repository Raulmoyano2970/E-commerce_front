import React from "react";
import { NavLink } from "react-router-dom";
import GoTo from "../../components/GoTo/GoTo";
import "../Bienvenida/bienvenida.css";
import videobienvenida from "../../imagenes/iniciogamershopp.mp4"

export default function Bienvenida() {
  return (
    <>
      <div className="mainBienvenida">
        <video muted autoPlay loop>
          <source
            src={videobienvenida}
            type="video/mp4"
          />
        </video>
        <div className="capa"></div>

        <div className="divBienvenida">
          <h2>
            BIENVENIDOS A SHOPPY<span className="blanco">.</span>
          </h2>
          <p className="parrafoBienvenida">
            Te invitamos a conocer nuestra tienda y todos nuestros productos
          </p>
          <NavLink to={`/inicio`} style={{ textDecoration: "none" }}>
            <GoTo texto="Ingresa"></GoTo>
          </NavLink>
        </div>
      </div>
    </>
  );
}
