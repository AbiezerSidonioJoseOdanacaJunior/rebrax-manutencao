import React from "react";
import "./App.css";
import logo from "./Imagens/logo.png";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaCentercode, FaWrench } from "react-icons/fa";
import background from "../src/Imagens/fundo.jpeg";

function App() {
  return (
    <>
      <div className="App">
        <div
          className="bg-image"
          style={{
            backgroundImage: `url(${background})`,
            minHeight: "100%",
            minWidth: "100%",
            position: "absolute",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            zIndex: -1,
            filter: "blur(1px)",
          }}
        />
        <div className="rebraxLogo">
          <img className="logo" src={logo} alt="Logo"></img>
        </div>
        <div className="textos">
          <h1 className="manuten">
            EM <br /> CONSTRUÇÃO <FaWrench className="wrench" />
          </h1>
          <h2 className="site"> O Site está quase pronto!</h2>
          <h1 className="visite">Visite nossas redes sociais</h1>
        </div>
        <div className="icons">
          <a href="https://www.google.com" target={"blank"}>
            <AiFillFacebook />
          </a>
          <a href="https://www.google.com" target={"blank"}>
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
