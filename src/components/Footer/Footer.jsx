import React from "react";
import Sberlogo from "../../assets/sberlogo.svg";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { ImFacebook } from "react-icons/im";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaOdnoklassniki } from "react-icons/fa";

import { Link } from "react-router-dom";

import "./Footer.css";
const Footer = () => {
  const footerNav = [
    "Купоны и сертификаты",
    "Впечатления",
    "Авиабилеты",
    "Ж/д билеты",
    "Отели",
    "Каршеринг",
    "Театры",
    "Страхование",
    "Как подключиться",
    "Партнеры",
  ];
  const id = 3

  return (
    <footer>
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer-title">
            <h4>900</h4>
            <p>По России бесплатно</p>
          </div>
          <ul className="footer-navigation">
            {footerNav.map((fnav) => (
              <li className="footer-item">{fnav}</li>
            ))}
          </ul>
        </div>
        <div className="footer-bussines-logos">
            <img src={Sberlogo} alt="SberBank" />
            <div className="footer-apps">
              <button className="footer-btn"> 
                <FaGooglePlay size={20}/>
                 <span>
                    <p>доступно в</p>
                    <h4>Google Play</h4>
                 </span>
              </button>
              <button className="footer-btn">
                <FaApple size={20}/>
                <span>
                    <p>загрузите в</p>
                    <h4>App Store</h4>
                 </span>
              </button>
            </div>
            <div className="social-network" >
                <a href="#">
                    <FaOdnoklassniki size={25}/>
                </a>
                <a href="#">
                    <SlSocialVkontakte size={25}/>
                </a>
                <a href="#">
                    <ImFacebook size={25}/>
                </a>
                <a href="#">
                    <IoLogoInstagram size={25}/>
                </a>
            </div>
          </div>
          <div className="footer-data">
             <h4>© 1997—2019 ПАО Сбербанк.</h4>
             <p>Политика АО «ЦПЛ» в отношении обработки персональных данных и Согласие на обработку данных участника Программы «Спасибо от Сбербанка»</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
