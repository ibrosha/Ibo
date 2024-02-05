import { Button } from "@mui/material";
import React from "react";
import vib from "../assets/img/vib.svg";
import logo from "../assets/img/logo.svg";
import img1 from "../assets/img/img1.svg";
import img9 from "../assets/img/icon2.svg";
import Card from "../components/Card/Card";

const Page6 = () => {
  return (
    <div>
      <div
        className=" text-white px-[4%] py-[60px] mx-[1%] rounded-[20px]"
        id="bg1"
      >
        <h1 className="text-[#d6d3d3]">Главная / Как покупать</h1>
        <h1 className="text-[40px] font-[650]">
          Бонусы и партнёрская программа
        </h1>
        <h1 className="text-[20px] font-[600] mb-[30px]">
          Платим $3 с каждой отправленной посылки
        </h1>
        <Button
          variant="contained"
          color="success"
          style={{ backgroundColor: "#00C97B", borderRadius: "100px" }}
        >
          Начать зарабатывать
        </Button>
      </div>

      <div className="px-[5%] pt-[20vh] pb-[30px]">
        <h1 className="text-[35px] font-[650]">
          Зарабатывать с нами — проще простого:
        </h1>

        <div className="flex flex-wrap justify-between items-center gap-[25px_0] my-[30px]">
          <Card
            img={img9}
            h1="Больше не значит дороже"
            h2="На их первую отправленную посылку. Вам есть чем мотивировать
            зарегистрироваться именно по вашему реферальному коду или ссылке."
          />
          <Card
            img={img9}
            h1="Больше не значит дороже"
            h2="На их первую отправленную посылку. Вам есть чем мотивировать
            зарегистрироваться именно по вашему реферальному коду или ссылке."
          />
          <Card
            img={img9}
            h1="Больше не значит дороже"
            h2="На их первую отправленную посылку. Вам есть чем мотивировать
            зарегистрироваться именно по вашему реферальному коду или ссылке."
          />
          <Card
            img={img9}
            h1="Больше не значит дороже"
            h2="На их первую отправленную посылку. Вам есть чем мотивировать
            зарегистрироваться именно по вашему реферальному коду или ссылке."
          />
          <Card
            img={img9}
            h1="Больше не значит дороже"
            h2="На их первую отправленную посылку. Вам есть чем мотивировать
            зарегистрироваться именно по вашему реферальному коду или ссылке."
          />
        </div>
      </div>

      <div
        className="flex md:flex-col gap-[50px] items-center text-white px-[4%] py-[20px] mx-[1%] rounded-[20px]"
        id="bg1"
      >
        <img src={img1} alt="" className="w-[28%] md:w-[80%]" />
        <div className="w-[58%] md:w-[100%]">
          <h1 className="text-[35px] font-[650]">
          Готовы начать зарабатывать <br /> вместе с нами?
          </h1>
          <h1 className="text-[#d6d3d3] my-[20px]">
            Вы можете всегда посмотреть на нашу слаженую работу на складе
          </h1>
          <Button
            variant="contained"
            color="success"
            style={{ backgroundColor: "#00C97B", borderRadius: "100px" }}
          >
            Попробовать
          </Button>
        </div>
      </div>

      <div className="flex items-start justify-between md:gap-[30px] px-[5%] py-[50px] mx-[1%] rounded-[20px] md:flex-col">
        <div className="flex flex-col gap-[25px] md:w-[100%]">
          <img src={logo} alt="" />
          <img src={vib} alt="" />
        </div>

        <div className="grid gap-[10px] text-[grey] ">
          <h1 className="font-[650] text-[20px] text-black">О компании</h1>
          <h1>Услуги</h1>
          <h1>Цены</h1>
          <h1>Отзывы</h1>
          <h1>Контакты</h1>
          <h1>Вакансии</h1>
          <h1>Вакансии</h1>
          <h1>Соглашение о персональных данных</h1>
        </div>

        <div className="grid gap-[10px] text-[grey]">
          <h1 className="font-[650] text-[20px] text-black">Полезное</h1>
          <h1>Как работает наш сервис</h1>
          <h1>Как покупать с оператором</h1>
          <h1>Ответы на частые вопросы</h1>
          <h1>Популярные магазины</h1>
          <h1>Черный список магазинов</h1>
          <h1>Актуальные распродажи</h1>
        </div>

        <div className="grid gap-[10px] text-[grey]">
          <h1 className="font-[650] text-[20px] text-black">Спецпроекты</h1>
          <h1>50% на первую доставку</h1>
          <h1>Скидки для постоянных клиентов</h1>
          <h1>Реферальная программа</h1>
          <h1>Кэшбек Mr. Rebates и Rakuten</h1>
          <h1>Stop Fraud</h1>
        </div>
      </div>
      <div className="text-center px-[5%] py-[20px] border-t-[2px]">
        <h1 className="text-[grey]">© 2021 Okeypost . Все права защищены.</h1>
      </div>
    </div>
  );
};

export default Page6;
