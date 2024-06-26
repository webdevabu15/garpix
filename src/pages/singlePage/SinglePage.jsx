import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import actionImg from "../../assets/action.jpg";
import appleMusic from "../../assets/appleMusic.png";
import { SiMoscowmetro } from "react-icons/si";

import "./SinglePage.css";

const SinglePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <div className="apple-music">
            <div className="music-title">
              <h3>Скидочные купоны · Развлечения</h3>
              <h2>Apple Music за СПАСИБО</h2>
            </div>
            <img src={actionImg} alt="apple music" />
            <div className="img-data">
              <p>C 17 Декабря 2018 г. по 17 Декабря 2019 г.</p>
              <h4>
                Обменивайте 169 СПАСИБО на месяц подписки в Apple Music и
                наслаждайтесь любимой музыкой без перерыва.
              </h4>
              <ul>
                <li>
                  Получите доступ к миллионам альбомов, исполнителей и песен
                </li>
                <li>Эксклюзивный и оригинальный контент</li>
                <li>Вы можете отказаться от подписки в любой момент</li>
                <li>Скачивайте любимую музыку и слушайте офлайн</li>
              </ul>
            </div>
            <div className="promo">
              <h3 className="promo-title">Как использовать промо-код:</h3>
              <ul>
                <li>
                  Откройте приложение «Музыка» и введите существующий Apple ID и
                  пароль для входа в учетную запись. (Если у вас нет Apple ID,
                  вам будет предложено его создать).
                </li>
                <li>
                  Нажмите на «3 месяца бесплатно» (специальное предложение для
                  новых пользователей).
                </li>
                <li>
                  Выберите индивидуальную подписку и нажмите «3 месяца
                  бесплатно».
                </li>
                <li>Перейдите в учетную запись.</li>
                <li>Нажмите «Использовать код».</li>
                <li>Введите 12-значный код.</li>
                <li>Получите сообщение с подтверждением использования кода.</li>
              </ul>
              <p className="frPragraph">
                Под персональными данными в целях настоящих Правил понимаются
                персональные данные Участников Акции и иных лиц - субъектов
                персональных данных как они определены в Законе «О персональных
                данных». Под обработкой персональных данных в настоящих Правилах
                понимается любое действие (операция), совершаемое в целях
                проведения Акции, или совокупность действий(операций),
                совершаемых с использованием средств автоматизации или без
                использования таких средств с персональными данными, включая
                сбор, запись, систематизацию, накопление, хранение, уточнение
                (обновление, изменение), извлечение, использование, передачу
                (распространение, предоставление, доступ), обезличивание,
                блокирование, удаление, уничтожение персональных данных,
                предоставленных Участником Акции Банку/ Уполномоченной Компании.
              </p>
              <a href="#">Подробнее об Apple Music для Android</a>
              <a href="#">Правила акции</a>
              <p className="description">
                Только при оформлении индивидуальной подписки. По окончании
                пробного периода подписка будет продлена автоматически. 4 месяца
                бесплатно только для новых подписчиков. Срок действия кода
                истекает 31 января 2020 года. Это промокод, который не подлежит
                перепродаже, обмену на денежный эквивалент и замене в случае
                кражи или потери. Предложение действительно при оформлении
                индивидуальной подписки на Apple Music на территории Российской
                Федерации. Требуется учетная запись iTunes. Применяются
                соответствующие условия (подробнее). Промокодом может
                воспользоваться лицо старше 13 лет, чье местоположение совпадает
                со страной/регионом магазина, в котором активируется код.
                Требуются совместимые продукты и сервисы. Apple Music —
                зарегистрированная торговая марка Apple. Apple не является
                участником или спонсором этой промоакции.
              </p>
            </div>
          </div>

          <div className="apple-cards__wrapper">
            <div className="apple-card__title">
              <img src={appleMusic} alt="apple music logo" />
              <h4>Apple Music</h4>
            </div>
            <div className="apple-cards">
              <div className="card">
                <div className="card-img">
                  <img src={appleMusic} alt="apple music logo" />
                </div>
                <div className="card-info">
                  <p>Москва, ул. Большая Татарская, 21</p>
                  <p>
                    {" "}
                    <SiMoscowmetro color="green" /> Маяковская{" "}
                    <SiMoscowmetro color="red" /> Лубянка
                  </p>
                  <p>+7 495 220-30-44</p>
                  <p>Ежедневно с 09:00 до 21:00</p>
                  <a href="#">apple.com</a>
                  <span>Проложить маршрут</span>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <img src={appleMusic} alt="apple music logo" />
                </div>
                <div className="card-info">
                  <p>Москва, ул. Большая Татарская, 21</p>
                  <p>
                    {" "}
                    <SiMoscowmetro color="green" /> Маяковская{" "}
                    <SiMoscowmetro color="red" /> Лубянка
                  </p>
                  <p>+7 495 220-30-44</p>
                  <p>Ежедневно с 09:00 до 21:00</p>
                  <a href="#">apple.com</a>
                  <span>Проложить маршрут</span>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <img src={appleMusic} alt="apple music logo" />
                </div>
                <div className="card-info">
                  <p>Москва, ул. Большая Татарская, 21</p>
                  <p>
                    {" "}
                    <SiMoscowmetro color="green" /> Маяковская{" "}
                    <SiMoscowmetro color="red" /> Лубянка
                  </p>
                  <p>+7 495 220-30-44</p>
                  <p>Ежедневно с 09:00 до 21:00</p>
                  <a href="#">apple.com</a>
                  <span>Проложить маршрут</span>
                </div>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23974.282869673072!2d69.27301705791099!3d41.31353279811646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1719307410504!5m2!1sru!2s"
              width="100%"
              height="380"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="map"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default SinglePage;
