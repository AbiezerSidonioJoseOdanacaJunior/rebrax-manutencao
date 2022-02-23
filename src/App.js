import React from "react";
import "./App.css";
import logo from "./Imagens/logo.png";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaCentercode, FaWrench } from "react-icons/fa";
import background from "../src/Imagens/fundo.jpeg";

function App() {
  return (
    <>
      <div className="App">
        <header className="head">
          <div className="bg" />
          <div className="rebraxLogo">
            <img className="logo" src={logo} alt="Logo"></img>
          </div>
        </header>

        <div className="textos">
          <h1 className="manuten">
            EM <br /> CONSTRUÇÃO
          </h1>
          <h2 className="site"> O Site está quase pronto!</h2>
        </div>
        <div className="contacts">
          <h3 className="titleContact">Contatos</h3>
          <p>
            <BsTelephone className="number" />
            <span>+55 62 9176-7218 </span>
          </p>
          <br />
          <p>
            <BsTelephone className="number" />
            <span>+55 62 9103-1805 </span>
          </p>
        </div>
        <div className="icons">
          <h6 className="visite">Visite nossas redes sociais</h6>
          <a href="https://pt-br.facebook.com" target={"blank"}>
            <AiFillFacebook />
          </a>
          <a
            href="https://www.instagram.com/rebrax_reciclagem"
            target={"blank"}
          >
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
