import React from "react";
import { NavLink } from "react-router-dom";
import "../Footer/footer.css";
import logo from "../../imagenes/LOGOSHOPPY.png"
import pajarito from "../../imagenes/twiter.png"
import instagram from "../../imagenes/instagram2.png"
import tiktok from "../../imagenes/tiktoi.png"

import { useSelector } from "react-redux";

export default function Footer() {
  const { logged } = useSelector((state) => state.userReducer);

  return (
    <div className="footer">
      <div className="divMayorFooter">
        <div className="divMenorFooter">
          <p id="titulo">Sobre nosotros</p>
          <p>
            Somos una empresa dedicada a la venta de accesorios de todo tipo
            para tu computadora. Estamos a tu disposicion las 24hs
          </p>
        </div>
        <div className="divMenorFooter">
          <p id="titulo">Navegacion</p>
          <ul>
            <NavLink to="/inicio" style={{ textDecoration: "none" }}>
              <li>Inicio</li>
            </NavLink>
            <NavLink to="/productos" style={{ textDecoration: "none" }}>
              <li>Productos</li>
            </NavLink>

            {logged ? (<>
              <NavLink to="/carrito" style={{ textDecoration: "none" }}>
                <li>Carrito</li>
              </NavLink>

            <NavLink to="/favoritos" style={{ textDecoration: "none" }}>
                <li>Favoritos</li>
            </NavLink>
                    </> 
            ) : (
              <></>
            )}

            <NavLink to="/consultas" style={{ textDecoration: "none" }}>
              <li>Consultas</li>
            </NavLink>
          </ul>
        </div>
        <div className="divMenorFooter">
          <p id="titulo">Servicio al Cliente</p>
          <li>Metodos de pago</li>
          <li>Metodos de envío</li>
          <li>Terminos y condiciones</li>
          <li>Politica de privacidad</li>
        </div>
        <div className="divMenorFooter">
          <p id="titulo">Nuestras redes</p>
          <div className="divRedes">
            <a href="https://www.instagram.com/shoppytienda/" target={"_blank"}>
              <img
                src={instagram}
                alt="instragram_shoppy"
              />
            </a>
            <img
              src={tiktok}
              alt="tiktok_shoppy"
            />
            <a href="https://twitter.com/ShoppyTienda" target={"_blank"}>
              <img
                src={pajarito}
                alt="twitter_shoppy"
              />
            </a>
           {/*  <img
              src="https://cdn.discordapp.com/attachments/830354293822324736/1051754001269526538/icons8-youtube-play-60.png"
              alt="youtube_shoppy"
            /> */}
          </div>
        </div>
      </div>
      <hr />
      <div className="divInferiorFooter">
        <p>shoppy store© all rights reserved.</p>
        <div className="divInferiorFooterimg">
          <img
            src={logo}
            alt="logo_shoppy"
          />
        </div>
        {/* <div className="pagosMedios">
          <img
            src={mediospago}
            alt="metodos_de_pago"
          />
        </div> */}
      </div>
    </div>
  );
}
