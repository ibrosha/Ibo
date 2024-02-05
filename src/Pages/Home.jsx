import React, { useEffect } from "react";
import "../App.css";
import { Button, TextField } from "@mui/material";
import img1 from "../assets/img/img1.svg";
import img2 from "../assets/img/img2.svg";
import img8 from "../assets/img/img3.svg";
import img3 from "../assets/img/ru.svg";
import img4 from "../assets/img/kur.svg";
import img5 from "../assets/img/uk.svg";
import img6 from "../assets/img/fut.svg";
import img7 from "../assets/img/icon.svg";
import img9 from "../assets/img/icon2.svg";
import ret from "../assets/img/ret.svg";
import fon from "../assets/img/fon.svg";
import vib from "../assets/img/vib.svg";
import logo from "../assets/img/logo.svg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div>
      <div
        className="flex gap-[100px] dark:bg-black dark:text-white items-center text-white px-[4%] py-[20px] mx-[1%] rounded-[20px] md:flex-col"
        id="bg1"
      >
        <div className="w-[44.5%] md:w-[100%]">
          <h1 className="text-[52px] font-[650] md:text-[35px]">
            Доставка товаров из Великобритании в Россию
          </h1>
          <h1 className="text-[#d6d3d3] my-[20px]">
            Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost,
            чтобы покупать со скидками в UK одежду, обувь, гаджеты известных
            брендов и безопасно отправлять вещи в Россию.
          </h1>
          <Button
            variant="contained"
            color="success"
            style={{ backgroundColor: "#00C97B", borderRadius: "100px" }}
          >
            Получить адрес в UK
          </Button>
        </div>
        <img src={img1} alt="" data-aos="fade-down-left" className="w-[39.5%] md:w-[100%]" />
      </div>

      <div className="px-[5%] py-[20vh] dark:bg-black dark:text-white">
        <h1 className="text-[32px] font-[650]">
          Насколько выгодно <br />
          покупать?
        </h1>
        <div className="flex dark:bg-[#1b1b1b] dark:text-white justify-between rounded-[10px] py-[8px] mt-[20px] bg-[white] shadow-2xl md:flex-col">
          <Button>
            <ArrowBackIcon />
          </Button>
          <Button>
            <img src={img2} alt="" className="w-[45px] mr-[10px]" />
            Одежда
          </Button>
          <Button>
            <img src={img2} alt="" className="w-[45px] mr-[10px]" />
            Одежда
          </Button>
          <Button>
            <img src={img2} alt="" className="w-[45px] mr-[10px]" />
            Одежда
          </Button>
          <Button>
            <img src={img2} alt="" className="w-[45px] mr-[10px]" />
            Одежда
          </Button>
          <Button>
            <img src={img2} alt="" className="w-[45px] mr-[10px]" />
            Одежда
          </Button>
          <Button>
            <img src={img2} alt="" className="w-[45px] mr-[10px]" />
            Одежда
          </Button>
          <Button>
            <ArrowForwardIcon />
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-start px-[5%] md:flex-col dark:bg-black dark:text-white">
        <div className="w-[25%] mt-[15vh] md:w-[100%]">
          <h1 className="font-[650] text-[20px] mb-[30px]">
            Columbia Barlow Pass 550 Turbodown Jacket
          </h1>
          <img src={img3} alt="" className="w-[100%]" />
        </div>

        <img src={img4} alt="" className="w-[40%] md:w-[100%]" />

        <div className="w-[25%] mt-[15vh] md:w-[100%] ">
          <h1 className="font-[650] text-[20px] mb-[30px]">
            Доставка одежды из Великобритании от £7.79
          </h1>
          <img src={img5} alt="" className="w-[100%]" />
        </div>
      </div>

      <div className="flex justify-between items-start px-[5%] md:flex-col">
        <img src={img6} alt="" className="md:w-[100%]"/>

        <div className="mt-[15px] md:w-[100%] md:my-[60px]">
          <h1 className="text-[#b9b5b5]">Срок доставки примерно 10 дней</h1>
          <h1 className="text-[20px] font-[650]">
            Вы экономите до <span className="text-[#01CD7D]">$119.56</span>
          </h1>
        </div>

        <img src={img6} alt="" className="md:w-[100%]"/>
      </div>

      <div className="flex md:flex-col justify-between dark:bg-[#1b1b1b] dark:text-white rounded-[10px] py-[15px] mb-[30px] mt-[25vh] mx-[5%] bg-[white] shadow-2xl">
        <button className="flex items-start text-start w-[25%] md:w-[100%] md:mt-[10px] border-r-[2px] px-[25px] text-[18px] font-[650]">
          <img src={img7} alt="" className="w-[70px] mr-[10px]" />
          Экономия <br /> до 70%
        </button>
        <button className="flex items-start text-start w-[25%] md:w-[100%] md:mt-[10px] border-r-[2px] px-[25px] text-[18px] font-[650]">
          <img src={img7} alt="" className="w-[70px] mr-[10px]" />
          Экономия <br /> до 70%
        </button>
        <button className="flex items-start text-start w-[25%] md:w-[100%] md:mt-[10px] border-r-[2px] px-[25px] text-[18px] font-[650]">
          <img src={img7} alt="" className="w-[70px] mr-[10px]" />
          Экономия <br /> до 70%
        </button>
        <button className="flex items-start text-start w-[25%] md:w-[100%] md:mt-[10px] px-[25px] text-[18px] font-[650]">
          <img src={img7} alt="" className="w-[70px] mr-[10px]" />
          Экономия <br /> до 70%
        </button>
      </div>

      <div
        className="flex gap-[50px] items-center text-white px-[4%] py-[20px] mx-[1%] rounded-[20px] md:flex-col"
        id="bg1"
      >
        <img src={img1} data-aos="fade-down-right" alt="" className="w-[28%] md:w-[100%]" />
        <div className="w-[58%] md:w-[100%]">
          <h1 className="text-[25px] font-[650]">
            Поручите нашим мастерам шопинга оформить заказы в английских
            магазинах и освободите время для более важных дел.
          </h1>
          <h1 className="text-[#d6d3d3] my-[20px]">
            Такой способ покупки также подойдёт, если магазин принимает только
            английские.
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

      <div className="px-[5%] pt-[20vh] pb-[30px]">
        <h1 className="text-[35px] font-[650]">
          OkeyPost удобная и быстрая доставка <br /> посылок из Великобритании{" "}
        </h1>

        <h1 className="text-[grey] mt-[20px]">
          Рассчитайте стоимость доставки из Англии к вам домой. Мы получим ваши{" "}
          <br />
          посылки на складе, при необходимости объединим несколько доставок в
          одну <br /> и отправим их к вам надежно упакованными.
        </h1>

        <div className="flex dark:bg-[#1b1b1b] dark:text-white flex-wrap justify-between rounded-[10px] px-[20px] py-[15px] my-[50px] bg-[white] shadow-2xl">
          <div className="w-[19%] dark:bg-[#1b1b1b] dark:text-white">
            <h1 className="text-[17px] font-[650]">Страна:</h1>

            <FormControl variant="standard" sx={{ width: "100%" }} className="dark:bg-[#1b1b1b] dark:text-white">
              <InputLabel id="demo-simple-select-standard-label">
                Age
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="w-[19%]">
            <h1 className="text-[17px] font-[650]">Страна:</h1>

            <FormControl variant="standard" sx={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-standard-label">
                Age
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="w-[19%]">
            <h1 className="text-[17px] font-[650]">Страна:</h1>

            <FormControl variant="standard" sx={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-standard-label">
                Age
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="w-[19%]">
            <h1 className="text-[17px] font-[650]">Страна:</h1>

            <FormControl variant="standard" sx={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-standard-label">
                Age
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="w-[19%]">
            <h1 className="text-[17px] font-[650]">Страна:</h1>

            <FormControl variant="standard" sx={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-standard-label">
                Age
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Button
            variant="contained"
            color="success"
            style={{
              backgroundColor: "#00C97B",
              borderRadius: "100px",
              marginTop: "20px",
            }}
          >
            Попробовать
          </Button>
        </div>
      </div>

      <div className="px-[5%] pb-[30px]">
        <h1 className="text-[30px] font-[600]">Варианты доставки:</h1>
        <div data-aos="fade-up" className="flex justify-between dark:bg-[#1b1b1b] dark:text-white md:flex-col rounded-[10px] px-[20px] py-[15px] my-[20px] bg-[white] shadow-2xl">
          <button className="flex  items-center text-start w-[50%] md:w-[100%] border-r-[2px] px-[25px] text-[18px] font-[650]">
            <img src={img7} alt="" className="w-[50px] mr-[10px]" />
            Экономия до 70%
          </button>
          <button className="text-start w-[16%] border-r-[2px] px-[25px] md:w-[100%] text-[18px] font-[650]">
            <span className="text-[grey] text-[15px]">Сроки:</span> <br />
            10-14 дней
          </button>
          <button className="text-start w-[16%] border-r-[2px] px-[25px] md:w-[100%] text-[18px] font-[650]">
            <span className="text-[grey] text-[15px]">Сроки:</span> <br />
            10-14 дней
          </button>
          <button className="text-start w-[16%] border-r-[2px] px-[25px] md:w-[100%] text-[18px] font-[650]">
            <span className="text-[grey] text-[15px]">Сроки:</span> <br />
            10-14 дней
          </button>
        </div>
        <div data-aos="fade-up" className="flex justify-between dark:bg-[#1b1b1b] dark:text-white md:flex-col rounded-[10px] px-[20px] py-[15px] my-[20px] bg-[white] shadow-2xl">
          <button className="flex items-center text-start w-[50%] md:w-[100%] border-r-[2px] px-[25px] text-[18px] font-[650]">
            <img src={img7} alt="" className="w-[50px] mr-[10px]" />
            Экономия до 70%
          </button>
          <button className="text-start w-[16%] border-r-[2px] px-[25px] md:w-[100%] text-[18px] font-[650]">
            <span className="text-[grey] text-[15px]">Сроки:</span> <br />
            10-14 дней
          </button>
          <button className="text-start w-[16%] border-r-[2px] px-[25px] md:w-[100%] text-[18px] font-[650]">
            <span className="text-[grey] text-[15px]">Сроки:</span> <br />
            10-14 дней
          </button>
          <button className="text-start w-[16%] border-r-[2px] px-[25px] md:w-[100%] text-[18px] font-[650]">
            <span className="text-[grey] text-[15px]">Сроки:</span> <br />
            10-14 дней
          </button>
        </div>
        <div data-aos="fade-up" className="flex justify-between dark:bg-[#1b1b1b] dark:text-white md:flex-col rounded-[10px] px-[20px] py-[15px] my-[20px] bg-[white] shadow-2xl">
          <button className="flex items-center text-start w-[50%] md:w-[100%] border-r-[2px] px-[25px] text-[18px] font-[650]">
            <img src={img7} alt="" className="w-[50px] mr-[10px]" />
            Экономия до 70%
          </button>
          <button className="text-start w-[16%] border-r-[2px] px-[25px] md:w-[100%] text-[18px] font-[650]">
            <span className="text-[grey] text-[15px]">Сроки:</span> <br />
            10-14 дней
          </button>
          <button className="text-start w-[16%] border-r-[2px] px-[25px] md:w-[100%] text-[18px] font-[650]">
            <span className="text-[grey] text-[15px]">Сроки:</span> <br />
            10-14 дней
          </button>
          <button className="text-start w-[16%] border-r-[2px] px-[25px] md:w-[100%] text-[18px] font-[650]">
            <span className="text-[grey] text-[15px]">Сроки:</span> <br />
            10-14 дней
          </button>
        </div>
      </div>

      <div className="px-[5%] pb-[30px] mt-[20vh]">
        <h1 className="text-[30px] font-[650]">
          4 простых шага для ваших <br /> покупок в Великобритании{" "}
        </h1>
        <div className="flex justify-between items-center md:flex-col">
          <div data-aos="flip-up" className="w-[23%] md:w-[100%] ">
            <img src={img8} alt="" className="md:w-[100%]"/>
            <h1 className="text-[17px] mb-[10px] font-[650]">
              ПОКУПКИ ПРИХОДЯТ <br /> НА СКЛАД
            </h1>
            <h1 className="text-[grey] text-[13px]">
              в английском магазине, оплачиваете и указываете
              <span className="text-[#01CD7D]"> адрес склада</span> OkeyPost
            </h1>
          </div>
          <div data-aos="flip-up" className="w-[23%] md:w-[100%]">
            <img src={img8} alt="" className="md:w-[100%]"/>
            <h1 className="text-[17px] mb-[10px] font-[650]">
              ПОКУПКИ ПРИХОДЯТ <br /> НА СКЛАД
            </h1>
            <h1 className="text-[grey] text-[13px]">
              в английском магазине, оплачиваете и указываете
              <span className="text-[#01CD7D]"> адрес склада</span> OkeyPost
            </h1>
          </div>
          <div data-aos="flip-up" className="w-[23%] md:w-[100%]">
            <img src={img8} alt="" className="md:w-[100%]"/>
            <h1 className="text-[17px] mb-[10px] font-[650]">
              ПОКУПКИ ПРИХОДЯТ <br /> НА СКЛАД
            </h1>
            <h1 className="text-[grey] text-[13px]">
              в английском магазине, оплачиваете и указываете
              <span className="text-[#01CD7D]"> адрес склада</span> OkeyPost
            </h1>
          </div>
          <div data-aos="flip-up" className="w-[23%] md:w-[100%]">
            <img src={img8} alt="" className="md:w-[100%]"/>
            <h1 className="text-[17px] mb-[10px] font-[650]">
              ПОКУПКИ ПРИХОДЯТ <br /> НА СКЛАД
            </h1>
            <h1 className="text-[grey] text-[13px]">
              в английском магазине, оплачиваете и указываете
              <span className="text-[#01CD7D]"> адрес склада</span> OkeyPost
            </h1>
          </div>
        </div>

        <h1 className="mt-[30px]">
          Не хотите разбираться самостоятельно, наши мастера шопинга с радостью{" "}
          <br /> купят все товары за вас.
        </h1>
        <Button
          variant="contained"
          color="success"
          style={{
            backgroundColor: "#00C97B",
            borderRadius: "100px",
            marginTop: "20px",
          }}
        >
          Попробовать
        </Button>
      </div>

      <div
        className="flex gap-[50px] items-center text-white px-[4%] py-[20px] mx-[1%] rounded-[20px] md:flex-col"
        id="bg1"
      >
        <img src={img1} alt="" className="w-[28%] md:w-[100%]" />
        <div className="w-[58%] md:w-[100%]">
          <h1 className="text-[35px] font-[650]">
            Виртуальный тур по нашему складу <br /> в реальном времени
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

      <div className="px-[5%] pt-[20vh] pb-[30px]">
        <h1 className="text-[35px] font-[650]">
          120 000 довольных клиентов в России <br /> уже сделали свой выбор
        </h1>

        <h1 className="text-[grey] mt-[20px]">
          За последний год десятки тысяч наших клиентов заказали <br /> товары
          из Англии и оставили 19 633 отзыва
        </h1>

        <div className="flex flex-wrap justify-between items-center my-[30px] md:flex-col">
          <div data-aos="flip-up" className="rounded-[10px] dark:bg-[#1b1b1b] dark:text-white p-[25px] bg-[white] shadow-2xl w-[32%] md:w-[100%] md:mb-[20px]">
            <img src={img9} alt="" />
            <h1 className="text-[18px] font-[600] mt-[25px]">
              Больше не значит дороже
            </h1>
            <h1 className="text-[14px] text-[grey]">
              С ростом веса посылки цена за каждые 0.5 кг уменьшается в
              прогрессии.
            </h1>
          </div>
          <div data-aos="flip-up" className="rounded-[10px] dark:bg-[#1b1b1b] dark:text-white p-[25px] bg-[white] shadow-2xl w-[32%] md:w-[100%] md:mb-[20px]">
            <img src={img9} alt="" />
            <h1 className="text-[18px] font-[600] mt-[25px]">
              Больше не значит дороже
            </h1>
            <h1 className="text-[14px] text-[grey]">
              С ростом веса посылки цена за каждые 0.5 кг уменьшается в
              прогрессии.
            </h1>
          </div>
          <div data-aos="flip-up" className="rounded-[10px] dark:bg-[#1b1b1b] dark:text-white p-[25px] bg-[white] shadow-2xl w-[32%] md:w-[100%] md:mb-[20px]">
            <img src={img9} alt="" />
            <h1 className="text-[18px] font-[600] mt-[25px]">
              Больше не значит дороже
            </h1>
            <h1 className="text-[14px] text-[grey]">
              С ростом веса посылки цена за каждые 0.5 кг уменьшается в
              прогрессии.
            </h1>
          </div>
        </div>
      </div>

      <div className="px-[5%] pt-[20vh] pb-[30px]">
        <h1 className="text-[35px] font-[650]">Отзывы и цитаты блогеров:</h1>

        <div className="flex flex-wrap gap-[30px_0] justify-between items-center my-[30px] md:flex-col">
          <div data-aos="fade-down-right" className=" flex  rounded-[10px] dark:bg-[#1b1b1b] dark:text-white p-[6px] bg-[white] shadow-2xl w-[49%] md:w-[100%]">
            <img src={fon} alt="" className="w-[35%]" />
            <div className="px-[25px]">
              <h1 className="font-[650] text-[17px]">NIKOLAY S</h1>
              <img src={ret} alt="" />
              <h1 className="mt-[15px] mb-[50px] md:mb-[0px] text-[15px]">
                Ваша доставка самая быстрая и дешёвая!
              </h1>
              <h1 className="font-[600]">Дата: 16 Ноября 2021</h1>
              <h1 className="font-[600]">Город: Санкт-Петербург</h1>
            </div>
          </div>
          <div data-aos="fade-down-left" className=" flex  rounded-[10px] dark:bg-[#1b1b1b] dark:text-white p-[6px] bg-[white] shadow-2xl w-[49%] md:w-[100%]">
            <img src={fon} alt="" className="w-[35%]" />
            <div className="px-[25px]">
              <h1 className="font-[650] text-[17px]">NIKOLAY S</h1>
              <img src={ret} alt="" />
              <h1 className="mt-[15px] mb-[50px] md:mb-[0px] text-[15px]">
                Ваша доставка самая быстрая и дешёвая!
              </h1>
              <h1 className="font-[600]">Дата: 16 Ноября 2021</h1>
              <h1 className="font-[600]">Город: Санкт-Петербург</h1>
            </div>
          </div>
          <div data-aos="fade-down-right" className=" flex  rounded-[10px] dark:bg-[#1b1b1b] dark:text-white p-[6px] bg-[white] shadow-2xl w-[49%] md:w-[100%]">
            <img src={fon} alt="" className="w-[35%]" />
            <div className="px-[25px]">
              <h1 className="font-[650] text-[17px]">NIKOLAY S</h1>
              <img src={ret} alt="" />
              <h1 className="mt-[15px] mb-[50px] md:mb-[0px] text-[15px]">
                Ваша доставка самая быстрая и дешёвая!
              </h1>
              <h1 className="font-[600]">Дата: 16 Ноября 2021</h1>
              <h1 className="font-[600]">Город: Санкт-Петербург</h1>
            </div>
          </div>
          <div data-aos="fade-down-left" className=" flex  rounded-[10px] dark:bg-[#1b1b1b] dark:text-white p-[6px] bg-[white] shadow-2xl w-[49%] md:w-[100%]">
            <img src={fon} alt="" className="w-[35%]" />
            <div className="px-[25px]">
              <h1 className="font-[650] text-[17px]">NIKOLAY S</h1>
              <img src={ret} alt="" />
              <h1 className="mt-[15px] mb-[50px] md:mb-[0px] text-[15px]">
                Ваша доставка самая быстрая и дешёвая!
              </h1>
              <h1 className="font-[600]">Дата: 16 Ноября 2021</h1>
              <h1 className="font-[600]">Город: Санкт-Петербург</h1>
            </div>
          </div>
        </div>

        <Button
          variant="contained"
          color="success"
          style={{ backgroundColor: "#00C97B", borderRadius: "100px" }}
        >
          Попробовать
        </Button>
      </div>

      <div className="px-[5%] pt-[20vh] pb-[30px]">
        <h1 className="text-[35px] font-[650] mb-[10px]">
          Ваш личный адрес в Великобритании для покупок
        </h1>

        <h1>
          С нами вы получаете целых два адреса в UK! У нас есть два склада для
          приема посылок – в Лондоне и Манчестере. Указывайте в магазине тот из
          них, отправка на который обойдется дешевле (или покупка будет без
          налогов). Чаще всего в Лондоне наши клиенты заказывают одежду и обувь,
          а в Манчестер идут гаджеты и всё остальное. С OkeyPost вы всегда
          получаете максимальную выгоду!
          <br />
          <br />
          При доставке из UK в Россию все ваши товары обязательно страхуются.
          Прием посылок на наш склад, их обработка, удаление лишних коробок,
          хранение сроком до 70 дней – у нас полностью бесплатно. Мы также
          бесплатно проводим объединение посылок из разных магазинов в одну. Это
          необходимо для снижения стоимости доставки посылок из UK в Россию.
          <br /> <br />
          У нас самая выгодная доставка! От $11.99 за посылку! А если у вас есть
          какие-то особенные требования, вроде проверки техники или
          дополнительной пленки для самых хрупких товаров, – операторы нашего
          склада с радостью выполнят их по спецзапросу.
          <br />
          <br />
          Okeypost.com – это надежно, быстро и выгодно. А в наших соцсетях вы
          всегда найдете информацию о лучших скидках fyukbqcrb магазинов. Не
          обязательно заходить в Черную пятницу или Prime Day, крутые акции
          проходят каждый день!
        </h1>
      </div>

      <div
        className="flex gap-[100px] md:gap-[20px] md:flex-col items-center text-white px-[4%] mt-[20vh] py-[20px] mx-[1%] rounded-[20px]"
        id="bg1"
      >
        <h1 className="text-[25px] font-[650] w-[38%] md:w-[100%]">
          Подпишитеть и будьте в курсе всех скидок и акций магазинов
          Великобритании!
        </h1>

        <TextField
        className="md:w-[100%]"
          sx={{ width: "40%", color: "#FFF" }}
          id="standard"
          label="Standard"
          variant="standard"
        />

        <Button
          variant="contained"
          color="success"
          style={{ backgroundColor: "#00C97B", borderRadius: "100px" }}
        >
          Подписаться
        </Button>
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

export default Home;
