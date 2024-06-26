import React from "react";
import Button from "../Button/Button";
import CardImage1 from "../../assets/card1.svg";
import CardImage2 from "../../assets/card2.svg";
import CardImage3 from "../../assets/card3.svg";
import CardImage4 from "../../assets/card4.svg";
import CardImage5 from "../../assets/card5.svg";
import Texnopark from "../../assets/texnopark.png";
import Evroset from "../../assets/blackFriday.png";
import Mvideo from "../../assets/mvideo.png";
import Big3 from "../../assets/big3.svg";
import Respublic from "../../assets/respublic.svg";
import Megafon from "../../assets/megafon.svg";
import Ivi from "../../assets/ivi.svg";
import Big2 from "../../assets/big2.svg";
import Big1 from "../../assets/big.svg";
import Kupon from "../../assets/kupon.svg";
import Kupon2 from "../../assets/kupon2.svg";
import Kupon3 from "../../assets/kupon3.svg";
import Person from "../../assets/person.svg";
import Person2 from "../../assets/person2.svg";
import Person3 from "../../assets/person3.svg";
import Person4 from "../../assets/person4.svg";
import Person5 from "../../assets/person5.svg";

import "./Main.css";

const categories = [
  {
    image: Texnopark,
    icon: CardImage3,
    name: "Технопарк",
    description: "20% спасибо за технику Electrolux",
  },
  {
    image: Evroset,
    icon: CardImage5,
    name: "Евросеть",
    description: "10% спасибо за покупки в черную пятницу",
  },
  {
    image: Mvideo,
    icon: CardImage1,
    name: "М.Видео",
    description: "15% спасибо для студентов",
  },
];
const Main = () => {
  const partnerShort = [
    "Все партнеры",
    "Популярные",
    "Супермаркеты",
    "Кафе и рестораны",
    "Такси",
    "Красота",
    "Электроника и бытовая техника",
    "Зоотовары",
    "Кино и театр",
    "...",
  ];
  const partnerCard = [
    {
      percentage: "1,5%",
      thanks_message: "Спасибо от суммы покупки",
      image: CardImage1,
      name: "М.Видео",
    },
    {
      percentage: "3%",
      thanks_message: "Спасибо от суммы покупки",
      image: CardImage2,
      name: "Бургер Кинг",
    },
    {
      percentage: "4.5%",
      thanks_message: "Спасибо от суммы покупки",
      image: CardImage3,
      name: "Холодильник.ру",
    },
    {
      percentage: "От 1,5%",
      thanks_message: "Спасибо от суммы покупки",
      image: CardImage4,
      name: "BORK",
    },
    {
      percentage: "От 1,5%",
      thanks_message: "Спасибо от суммы покупки",
      image: CardImage5,
      name: "Евросеть",
    },
  ];

  return (
    <div className="main">
      <div className="container">
        <div className="partners">
          <h3 className="partners-title">Партнеры и предложения</h3>
          <div className="partner-short">
            {partnerShort.map((short) => (
              <Button data={short} />
            ))}
          </div>
          <div className="Credit-thanks">
            <p>Начисляют спасибо</p>
            <button className="thanks-btn">
              <div></div>
            </button>
            <p>Принимают спасибо</p>
          </div>
          <div className="partner-cards">
            {partnerCard.map((card) => (
              <div className="card-item">
                <h2 className="card-percentage">{card.percentage}</h2>
                <h3 className="card-title">{card.thanks_message}</h3>
                <img src={card.image} alt={card.name} />
                <p>{card.name}</p>
              </div>
            ))}
          </div>
          <Button partnerName={"Еще 4 партнера"} />
        </div>
        <div className="electronics">
          <h3 className="electronics-title">
            3 предложения в категории «Электроника и бытовая техника»
          </h3>
          <div className="categorie-cards">
            {categories.map((categorie) => (
              <div className="categorie-item">
                <img src={categorie.image} alt={categorie.name} />
                <div className="categorie-info_wrapper">
                  <img src={categorie.icon} alt={categorie.name} />
                  <div className="categorie-info">
                    <h3>{categorie.name}</h3>
                    <p>{categorie.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button partnerName={"Еще 4 предложения"} />
        </div>
        <div className="more-wrapper">
          <div className="more-bonuses">
            <ul className="more-bonuse-cards">
              <li>
                <img src={CardImage2} alt="burger king" />{" "}
              </li>
              <li>
                <img src={Big3} alt="five" />
              </li>
              <li>
                <img src={Respublic} alt="respublik books music and ..." />
              </li>
              <li>
                <img src={Megafon} alt="megafon" />
              </li>
              <li>
                <img src={Ivi} alt="ivi" />
              </li>
            </ul>
            <p>
              Скидки за бонусы
              <span/>
              <span/>
            </p>
          </div>
          <div className="more-bonuses">
            <ul className="more-bonuse-cards">
              <li>
                <img src={Big1} alt="" />
              </li>
              <li>
                <img src={Big2} alt="" />
              </li>
              <li>
                <img src={Big3} alt="" />
              </li>
            </ul>
            <p className="bonus-paragraph">
              Большой % начисления
              <span />
              <span className="span2"/>
            </p>
          
          </div>
          <div className="more-bonuses">
            <ul className="more-bonuse-cards">
              <li>
                <img src={Kupon3} alt="posuda centr logo" />
              </li>
              <li>
                <img src={Kupon} alt="lamoda logo" />
              </li>
              <li>
                <img src={Kupon2} alt="myToys logo" />
              </li>
            </ul>
            <p>Выгодные купоны
              <span/>
              <span/>
              <div className="figure"></div>
              <div className="figure2"></div>
            </p>
          </div>
          <div className="more-bonuses">
            <ul className="more-bonuse-cards">
            <li><img src={Person5} alt="ozon" /></li>
              <li><img src={Person} alt="tez-tour" /></li>
              <li><img src={Person2} alt="BookingCar" /></li>
              <li><img src={Person3} alt="sberbank straxavaniya" /></li>
              <li><img src={Person4} alt="tripster" /></li>
            </ul>
            <p className="bonus-paragraph2">Персональное исходя из трат
              <span/>
              <span/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
