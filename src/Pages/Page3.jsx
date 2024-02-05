import { Button } from "@mui/material";
import React from "react";
import fon1 from "../assets/img/fon1.svg";
import vib from "../assets/img/vib.svg";
import logo from "../assets/img/logo.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../App.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Page3 = () => {
  return (
    <div>
      <div
        className=" text-white px-[4%] py-[60px] mx-[1%] rounded-[20px]"
        id="bg1"
      >
        <h1 className="text-[#d6d3d3]">Главная / Как покупать</h1>
        <h1 className="text-[40px] font-[650]">Распродажи</h1>
        <h1 className="text-[20px] font-[600] mb-[30px]">
          ранний доступ к распродажам в магазинах
        </h1>
        <Button
          variant="contained"
          color="success"
          style={{ backgroundColor: "#00C97B", borderRadius: "100px" }}
        >
          Получить адрес в UK
        </Button>
      </div>

      <div className="px-[5%] py-[40px] mt-[10vh]">
        <h1 className="text-[33px] font-[650]">
          Black Friday Early Access <br /> ранний доступ к распродажам <br /> в
          магазинах Великобритании!
        </h1>

        <div className="hidden md:block">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-[100%]">
                <img src={fon1} alt="" className="w-[45%]" />
                <div className="w-[100%] p-[35px]">
                  <h1 className="text-[20px] font-[650]">
                    Abercrombie & Fitch
                  </h1>
                  <br />
                  <h1 className="text-[grey]">
                    цены от{" "}
                    <span className="font-[600] text-black">£7.99 (3365₽)</span>{" "}
                    разделе: <br />
                    мужские вещи:{" "}
                    <span className="text-[#01CD7D]">CLEARANCE</span> <br />
                    женские вещи:{" "}
                    <span className="text-[#01CD7D]">CLEARANCE</span>
                  </h1>
                  <br />
                  <h1 className="text-[grey]">
                    качественные детские вещи <br />
                    на <span className="text-[#01CD7D]">Abercrombie kids</span>
                  </h1>
                  <br />
                  <h1 className="text-[#01CD7D]">
                    Только выкуп с оператором →
                  </h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="w-[100%]">
                <img src={fon1} alt="" className="w-[45%]" />
                <div className="w-[100%] p-[35px]">
                  <h1 className="text-[20px] font-[650]">
                    Abercrombie & Fitch
                  </h1>
                  <br />
                  <h1 className="text-[grey]">
                    цены от{" "}
                    <span className="font-[600] text-black">£7.99 (3365₽)</span>{" "}
                    разделе: <br />
                    мужские вещи:{" "}
                    <span className="text-[#01CD7D]">CLEARANCE</span> <br />
                    женские вещи:{" "}
                    <span className="text-[#01CD7D]">CLEARANCE</span>
                  </h1>
                  <br />
                  <h1 className="text-[grey]">
                    качественные детские вещи <br />
                    на <span className="text-[#01CD7D]">Abercrombie kids</span>
                  </h1>
                  <br />
                  <h1 className="text-[#01CD7D]">
                    Только выкуп с оператором →
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex justify-between items-center flex-wrap md:hidden">
          <div className="flex items-center w-[49%]">
            <img src={fon1} alt="" className="w-[45%]" />
            <div className="w-[55%] p-[35px]">
              <h1 className="text-[20px] font-[650]">Abercrombie & Fitch</h1>
              <br />
              <h1 className="text-[grey]">
                цены от{" "}
                <span className="font-[600] text-black">£7.99 (3365₽)</span>{" "}
                разделе: <br />
                мужские вещи: <span className="text-[#01CD7D]">
                  CLEARANCE
                </span>{" "}
                <br />
                женские вещи: <span className="text-[#01CD7D]">CLEARANCE</span>
              </h1>
              <br />
              <h1 className="text-[grey]">
                качественные детские вещи <br />
                на <span className="text-[#01CD7D]">Abercrombie kids</span>
              </h1>
              <br />
              <h1 className="text-[#01CD7D]">Только выкуп с оператором →</h1>
            </div>
          </div>
          <div className="flex items-center w-[49%]">
            <img src={fon1} alt="" className="w-[45%]" />
            <div className="w-[55%] p-[35px]">
              <h1 className="text-[20px] font-[650]">Abercrombie & Fitch</h1>
              <br />
              <h1 className="text-[grey]">
                цены от{" "}
                <span className="font-[600] text-black">£7.99 (3365₽)</span>{" "}
                разделе: <br />
                мужские вещи: <span className="text-[#01CD7D]">
                  CLEARANCE
                </span>{" "}
                <br />
                женские вещи: <span className="text-[#01CD7D]">CLEARANCE</span>
              </h1>
              <br />
              <h1 className="text-[grey]">
                качественные детские вещи <br />
                на <span className="text-[#01CD7D]">Abercrombie kids</span>
              </h1>
              <br />
              <h1 className="text-[#01CD7D]">Только выкуп с оператором →</h1>
            </div>
          </div>
          <div className="flex items-center w-[49%]">
            <img src={fon1} alt="" className="w-[45%]" />
            <div className="w-[55%] p-[35px]">
              <h1 className="text-[20px] font-[650]">Abercrombie & Fitch</h1>
              <br />
              <h1 className="text-[grey]">
                цены от{" "}
                <span className="font-[600] text-black">£7.99 (3365₽)</span>{" "}
                разделе: <br />
                мужские вещи: <span className="text-[#01CD7D]">
                  CLEARANCE
                </span>{" "}
                <br />
                женские вещи: <span className="text-[#01CD7D]">CLEARANCE</span>
              </h1>
              <br />
              <h1 className="text-[grey]">
                качественные детские вещи <br />
                на <span className="text-[#01CD7D]">Abercrombie kids</span>
              </h1>
              <br />
              <h1 className="text-[#01CD7D]">Только выкуп с оператором →</h1>
            </div>
          </div>
          <div className="flex items-center w-[49%]">
            <img src={fon1} alt="" className="w-[45%]" />
            <div className="w-[55%] p-[35px]">
              <h1 className="text-[20px] font-[650]">Abercrombie & Fitch</h1>
              <br />
              <h1 className="text-[grey]">
                цены от{" "}
                <span className="font-[600] text-black">£7.99 (3365₽)</span>{" "}
                разделе: <br />
                мужские вещи: <span className="text-[#01CD7D]">
                  CLEARANCE
                </span>{" "}
                <br />
                женские вещи: <span className="text-[#01CD7D]">CLEARANCE</span>
              </h1>
              <br />
              <h1 className="text-[grey]">
                качественные детские вещи <br />
                на <span className="text-[#01CD7D]">Abercrombie kids</span>
              </h1>
              <br />
              <h1 className="text-[#01CD7D]">Только выкуп с оператором →</h1>
            </div>
          </div>
          <div className="flex items-center w-[49%]">
            <img src={fon1} alt="" className="w-[45%]" />
            <div className="w-[55%] p-[35px]">
              <h1 className="text-[20px] font-[650]">Abercrombie & Fitch</h1>
              <br />
              <h1 className="text-[grey]">
                цены от{" "}
                <span className="font-[600] text-black">£7.99 (3365₽)</span>{" "}
                разделе: <br />
                мужские вещи: <span className="text-[#01CD7D]">
                  CLEARANCE
                </span>{" "}
                <br />
                женские вещи: <span className="text-[#01CD7D]">CLEARANCE</span>
              </h1>
              <br />
              <h1 className="text-[grey]">
                качественные детские вещи <br />
                на <span className="text-[#01CD7D]">Abercrombie kids</span>
              </h1>
              <br />
              <h1 className="text-[#01CD7D]">Только выкуп с оператором →</h1>
            </div>
          </div>
          <div className="flex items-center w-[49%]">
            <img src={fon1} alt="" className="w-[45%]" />
            <div className="w-[55%] p-[35px]">
              <h1 className="text-[20px] font-[650]">Abercrombie & Fitch</h1>
              <br />
              <h1 className="text-[grey]">
                цены от{" "}
                <span className="font-[600] text-black">£7.99 (3365₽)</span>{" "}
                разделе: <br />
                мужские вещи: <span className="text-[#01CD7D]">
                  CLEARANCE
                </span>{" "}
                <br />
                женские вещи: <span className="text-[#01CD7D]">CLEARANCE</span>
              </h1>
              <br />
              <h1 className="text-[grey]">
                качественные детские вещи <br />
                на <span className="text-[#01CD7D]">Abercrombie kids</span>
              </h1>
              <br />
              <h1 className="text-[#01CD7D]">Только выкуп с оператором →</h1>
            </div>
          </div>
          <div className="flex items-center w-[49%]">
            <img src={fon1} alt="" className="w-[45%]" />
            <div className="w-[55%] p-[35px]">
              <h1 className="text-[20px] font-[650]">Abercrombie & Fitch</h1>
              <br />
              <h1 className="text-[grey]">
                цены от{" "}
                <span className="font-[600] text-black">£7.99 (3365₽)</span>{" "}
                разделе: <br />
                мужские вещи: <span className="text-[#01CD7D]">
                  CLEARANCE
                </span>{" "}
                <br />
                женские вещи: <span className="text-[#01CD7D]">CLEARANCE</span>
              </h1>
              <br />
              <h1 className="text-[grey]">
                качественные детские вещи <br />
                на <span className="text-[#01CD7D]">Abercrombie kids</span>
              </h1>
              <br />
              <h1 className="text-[#01CD7D]">Только выкуп с оператором →</h1>
            </div>
          </div>
          <div className="flex items-center w-[49%]">
            <img src={fon1} alt="" className="w-[45%]" />
            <div className="w-[55%] p-[35px]">
              <h1 className="text-[20px] font-[650]">Abercrombie & Fitch</h1>
              <br />
              <h1 className="text-[grey]">
                цены от{" "}
                <span className="font-[600] text-black">£7.99 (3365₽)</span>{" "}
                разделе: <br />
                мужские вещи: <span className="text-[#01CD7D]">
                  CLEARANCE
                </span>{" "}
                <br />
                женские вещи: <span className="text-[#01CD7D]">CLEARANCE</span>
              </h1>
              <br />
              <h1 className="text-[grey]">
                качественные детские вещи <br />
                на <span className="text-[#01CD7D]">Abercrombie kids</span>
              </h1>
              <br />
              <h1 className="text-[#01CD7D]">Только выкуп с оператором →</h1>
            </div>
          </div>
          <div className="flex items-center w-[49%]">
            <img src={fon1} alt="" className="w-[45%]" />
            <div className="w-[55%] p-[35px]">
              <h1 className="text-[20px] font-[650]">Abercrombie & Fitch</h1>
              <br />
              <h1 className="text-[grey]">
                цены от{" "}
                <span className="font-[600] text-black">£7.99 (3365₽)</span>{" "}
                разделе: <br />
                мужские вещи: <span className="text-[#01CD7D]">
                  CLEARANCE
                </span>{" "}
                <br />
                женские вещи: <span className="text-[#01CD7D]">CLEARANCE</span>
              </h1>
              <br />
              <h1 className="text-[grey]">
                качественные детские вещи <br />
                на <span className="text-[#01CD7D]">Abercrombie kids</span>
              </h1>
              <br />
              <h1 className="text-[#01CD7D]">Только выкуп с оператором →</h1>
            </div>
          </div>
          <div className="flex items-center w-[49%]">
            <img src={fon1} alt="" className="w-[45%]" />
            <div className="w-[55%] p-[35px]">
              <h1 className="text-[20px] font-[650]">Abercrombie & Fitch</h1>
              <br />
              <h1 className="text-[grey]">
                цены от{" "}
                <span className="font-[600] text-black">£7.99 (3365₽)</span>{" "}
                разделе: <br />
                мужские вещи: <span className="text-[#01CD7D]">
                  CLEARANCE
                </span>{" "}
                <br />
                женские вещи: <span className="text-[#01CD7D]">CLEARANCE</span>
              </h1>
              <br />
              <h1 className="text-[grey]">
                качественные детские вещи <br />
                на <span className="text-[#01CD7D]">Abercrombie kids</span>
              </h1>
              <br />
              <h1 className="text-[#01CD7D]">Только выкуп с оператором →</h1>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex justify-between items-center text-white px-[4%] mt-[10vh] py-[60px] mx-[1%] rounded-[20px]"
        id="bg1"
      >
        <h1 className="text-[25px] font-[650] ">
          Остались вопросы? Спросите нас в соцсетях!
        </h1>

        <img src={vib} alt="" />
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

export default Page3;
