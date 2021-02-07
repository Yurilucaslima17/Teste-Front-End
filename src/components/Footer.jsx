import {IoMdMail} from "react-icons/io";
import {MdHeadsetMic} from "react-icons/md";
import "../styles/footer.scss";
import logo from "../assets/site-logo-corebiz-preto-cinza.png"
import vtex from "../assets/vtex-logo.png";

export default function Footer(){
    return(
        <footer className="footer">
            <div className="grid">
                <div className="location">
                    <p className="title">Localização</p>
                    <p>Avenida Andrômeda, 2000. Bloco 6 e 8 
                        <br/>
                        Alphavile SP
                        <br/>
                        <a href="mailto:brasil@corebiz.ag" target="_blank" rel="noreferrer">brasil@corebiz.ag</a>
                        <br/>
                        <a href="tel:+551130901039" target="_blank" rel="noreferrer">+55 11 3090 1039</a></p>
                </div>
                <div className="buttons">
                    <button><IoMdMail/><span>ENTRE EM CONTATO</span></button>
                    <button><MdHeadsetMic/><span>FALE COM O NOSSO CONSULTOR ONLINE</span></button>
                </div>
                <div className="rights">
                    <picture>
                        <span>Created by</span>
                        <img src={logo} alt=""/>
                    </picture>
                    <picture>
                        <span>Powered by</span>
                        <img src={vtex} alt=""/>
                    </picture>
                </div>
            </div>
        </footer>
    )
}