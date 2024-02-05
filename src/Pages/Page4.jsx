import React from "react";
import img8 from "../assets/img/img3.svg";
import { Button, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img1 from "../assets/img/img1.svg";
import img7 from "../assets/img/icon.svg";
import vib from "../assets/img/vib.svg";
import logo from "../assets/img/logo.svg";

const Page4 = () => {
  return (
    <div>
      <div
        className=" text-white px-[4%] py-[40px] mx-[1%] rounded-[20px]"
        id="bg1"
      >
        <h1 className="text-[#d6d3d3]">Главная / Как покупать</h1>
        <h1 className="text-[40px] font-[650]">
          Услуги доставки из Великобритании
        </h1>
      </div>

      <div className="flex justify-between items-center px-[5%] py-[50px] md:flex-col md:gap-[30px]">
        <div className="w-[23%] md:w-[100%]">
          <img src={img8} alt="" />
          <h1 className="text-[17px] mb-[10px] font-[650]">
            ПОКУПКИ ПРИХОДЯТ <br /> НА СКЛАД
          </h1>
          <h1 className="text-[grey] text-[13px] mb-[20px]">
            на нашем современном автоматизированном складе в безналоговом
            Делавэре
          </h1>
          <Button variant="contained">Бесплатно</Button>
        </div>
        <div className="w-[23%] md:w-[100%]">
          <img src={img8} alt="" />
          <h1 className="text-[17px] mb-[10px] font-[650]">
            ПОКУПКИ ПРИХОДЯТ <br /> НА СКЛАД
          </h1>
          <h1 className="text-[grey] text-[13px] mb-[20px]">
            на нашем современном автоматизированном складе в безналоговом
            Делавэре
          </h1>
          <Button variant="contained">Бесплатно</Button>
        </div>
        <div className="w-[23%] md:w-[100%]">
          <img src={img8} alt="" />
          <h1 className="text-[17px] mb-[10px] font-[650]">
            ПОКУПКИ ПРИХОДЯТ <br /> НА СКЛАД
          </h1>
          <h1 className="text-[grey] text-[13px] mb-[20px]">
            на нашем современном автоматизированном складе в безналоговом
            Делавэре
          </h1>
          <Button variant="contained">Бесплатно</Button>
        </div>
        <div className="w-[23%] md:w-[100%]">
          <img src={img8} alt="" />
          <h1 className="text-[17px] mb-[10px] font-[650]">
            ПОКУПКИ ПРИХОДЯТ <br /> НА СКЛАД
          </h1>
          <h1 className="text-[grey] text-[13px] mb-[20px]">
            на нашем современном автоматизированном складе в безналоговом
            Делавэре
          </h1>
          <Button variant="contained">Бесплатно</Button>
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
          <div className="w-[19%] ">
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
        <div className="flex dark:bg-[#1b1b1b] dark:text-white justify-between md:flex-col rounded-[10px] px-[20px] py-[15px] my-[20px] bg-[white] shadow-2xl">
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
        <div className="flex dark:bg-[#1b1b1b] dark:text-white justify-between md:flex-col rounded-[10px] px-[20px] py-[15px] my-[20px] bg-[white] shadow-2xl">
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
        <div className="flex dark:bg-[#1b1b1b] dark:text-white justify-between md:flex-col rounded-[10px] px-[20px] py-[15px] my-[20px] bg-[white] shadow-2xl">
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
        <h1 className="text-[30px] font-[600]">Варианты доставки:</h1>
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex dark:bg-[#1b1b1b] dark:text-white w-[49%] md:w-[100%] justify-between rounded-[10px] px-[20px] py-[15px] mt-[20px] bg-[white] shadow-2xl">
            <button className="flex items-center text-start w-[74%] border-r-[2px] px-[25px] text-[18px] font-[650]">
              Консолидация
            </button>
            <button className="text-start px-[10px] text-[18px] font-[650]">
              £1.00/1 трек
            </button>
          </div>
          <div className="flex w-[49%] dark:bg-[#1b1b1b] dark:text-white md:w-[100%] justify-between rounded-[10px] px-[20px] py-[15px] mt-[20px] bg-[white] shadow-2xl">
            <button className="flex items-center text-start w-[74%] border-r-[2px] px-[25px] text-[18px] font-[650]">
              Консолидация
            </button>
            <button className="text-start px-[10px] text-[18px] font-[650]">
              £1.00/1 трек
            </button>
          </div>
          <div className="flex w-[49%] dark:bg-[#1b1b1b] dark:text-white md:w-[100%] justify-between rounded-[10px] px-[20px] py-[15px] mt-[20px] bg-[white] shadow-2xl">
            <button className="flex items-center text-start w-[74%] border-r-[2px] px-[25px] text-[18px] font-[650]">
              Консолидация
            </button>
            <button className="text-start px-[10px] text-[18px] font-[650]">
              £1.00/1 трек
            </button>
          </div>
          <div className="flex w-[49%] dark:bg-[#1b1b1b] dark:text-white md:w-[100%] justify-between rounded-[10px] px-[20px] py-[15px] mt-[20px] bg-[white] shadow-2xl">
            <button className="flex items-center text-start w-[74%] border-r-[2px] px-[25px] text-[18px] font-[650]">
              Консолидация
            </button>
            <button className="text-start px-[10px] text-[18px] font-[650]">
              £1.00/1 трек
            </button>
          </div>
          <div className="flex w-[49%] dark:bg-[#1b1b1b] dark:text-white md:w-[100%] justify-between rounded-[10px] px-[20px] py-[15px] mt-[20px] bg-[white] shadow-2xl">
            <button className="flex items-center text-start w-[74%] border-r-[2px] px-[25px] text-[18px] font-[650]">
              Консолидация
            </button>
            <button className="text-start px-[10px] text-[18px] font-[650]">
              £1.00/1 трек
            </button>
          </div>
          <div className="flex w-[49%] dark:bg-[#1b1b1b] dark:text-white md:w-[100%] justify-between rounded-[10px] px-[20px] py-[15px] mt-[20px] bg-[white] shadow-2xl">
            <button className="flex items-center text-start w-[74%] border-r-[2px] px-[25px] text-[18px] font-[650]">
              Консолидация
            </button>
            <button className="text-start px-[10px] text-[18px] font-[650]">
              £1.00/1 трек
            </button>
          </div>
          <div className="flex w-[100%] dark:bg-[#1b1b1b] dark:text-white rounded-[10px] px-[20px] py-[15px] mt-[20px] bg-[white] shadow-2xl">
            <button className=" text-start w-[74%] border-r-[2px] px-[25px] text-[18px] font-[650]">
              Фото содержимого входящей посылки <br />
              <span className="text-[grey] text-[13px]">
                3 фото за $5 или 10 фото за $8, а ещё можно попросить
                сфотографировать бирку или подарочный сертификат
              </span>
            </button>
            <button className="text-start px-[10px] ml-[30px] text-[18px] font-[650]">
              £1.00/1 трек
            </button>
          </div>
          <div className="flex w-[100%] dark:bg-[#1b1b1b] dark:text-white rounded-[10px] px-[20px] py-[15px] mt-[20px] bg-[white] shadow-2xl">
            <button className=" text-start w-[74%] border-r-[2px] px-[25px] text-[18px] font-[650]">
              Фото содержимого входящей посылки <br />
              <span className="text-[grey] text-[13px]">
                3 фото за $5 или 10 фото за $8, а ещё можно попросить
                сфотографировать бирку или подарочный сертификат
              </span>
            </button>
            <button className="text-start px-[10px] ml-[30px] text-[18px] font-[650]">
              £1.00/1 трек
            </button>
          </div>

          <div className="flex w-[100%] dark:bg-[#1b1b1b] dark:text-white rounded-[10px] px-[20px] py-[15px] mt-[20px] bg-[white] shadow-2xl">
            <button className=" text-start w-[74%] border-r-[2px] px-[25px] text-[18px] font-[650]">
              Фото содержимого входящей посылки <br />
              <span className="text-[grey] text-[13px]">
                3 фото за $5 или 10 фото за $8, а ещё можно попросить
                сфотографировать бирку или подарочный сертификат
              </span>
            </button>
            <button className="text-start px-[10px] ml-[30px] text-[18px] font-[650]">
              £1.00/1 трек
            </button>
          </div>
          <div className="flex w-[100%] dark:bg-[#1b1b1b] dark:text-white rounded-[10px] px-[20px] py-[15px] mt-[20px] bg-[white] shadow-2xl">
            <button className=" text-start w-[74%] border-r-[2px] px-[25px] text-[18px] font-[650]">
              Фото содержимого входящей посылки <br />
              <span className="text-[grey] text-[13px]">
                3 фото за $5 или 10 фото за $8, а ещё можно попросить
                сфотографировать бирку или подарочный сертификат
              </span>
            </button>
            <button className="text-start px-[10px] ml-[30px] text-[18px] font-[650]">
              £1.00/1 трек
            </button>
          </div>
          <div className="flex w-[100%] dark:bg-[#1b1b1b] dark:text-white rounded-[10px] px-[20px] py-[15px] mt-[20px] bg-[white] shadow-2xl">
            <button className=" text-start w-[74%] border-r-[2px] px-[25px] text-[18px] font-[650]">
              Фото содержимого входящей посылки <br />
              <span className="text-[grey] text-[13px]">
                3 фото за $5 или 10 фото за $8, а ещё можно попросить
                сфотографировать бирку или подарочный сертификат
              </span>
            </button>
            <button className="text-start px-[10px] ml-[30px] text-[18px] font-[650]">
              £1.00/1 трек
            </button>
          </div>
        </div>
      </div>

      <div
        className="flex md:flex-col gap-[50px] items-center mt-[15vh] text-white px-[4%] py-[20px] mx-[1%] rounded-[20px]"
        id="bg1"
      >
        <img src={img1} alt="" className="w-[28%] md:w-[80%]" />
        <div className="w-[58%] md:w-[100%]">
          <h1 className="text-[23px] font-[650]">
            Попробуйте заказывать с оператором прямо сейчас. Пришлите ссылку на
            товар, его купят и доставят на наш склад в кратчайшие сроки.
          </h1>
          <TextField
            sx={{ width: "50%", color: "#FFF" }}
            id="standard"
            label="Standard"
            variant="standard"
          />
          <div className="flex items-center mt-[30px]">
            <Button
              variant="contained"
              color="success"
              style={{ backgroundColor: "#00C97B", borderRadius: "100px" }}
            >
              Попробовать
            </Button>
            <h1 className="text-[#e2dede] text-[14px] ml-[50px]">
              Нажимая на кнопку вы подтверждаете согласие с правилами <br />{" "}
              предоставления услуги и политикой конфиденциальности
            </h1>
          </div>
        </div>
      </div>

      <div className="px-[5%] pb-[30px] mt-[20vh]">
        <h1 className="text-[30px] font-[600]">Страхование</h1>
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex w-[100%] dark:bg-[#1b1b1b] dark:text-white rounded-[10px] px-[20px] py-[15px] mt-[20px] bg-[white] shadow-2xl">
            <button className=" text-start w-[74%] border-r-[2px] px-[25px] text-[18px] font-[650]">
              Дополнительное страxование
            </button>
            <button className="text-start px-[10px] ml-[30px] w-[65%] text-[18px] font-[650]">
              5% от суммы на которую xотите застраxовать
            </button>
          </div>
          <div className="flex w-[100%] dark:bg-[#1b1b1b] dark:text-white rounded-[10px] px-[20px] py-[15px] mt-[20px] bg-[white] shadow-2xl">
            <button className=" text-start w-[74%] border-r-[2px] px-[25px] text-[18px] font-[650]">
              Дополнительное страxование
            </button>
            <button className="text-start px-[10px] ml-[30px] w-[65%] text-[18px] font-[650]">
              5% от суммы на которую xотите застраxовать
            </button>
          </div>
          <div className="flex w-[100%] dark:bg-[#1b1b1b] dark:text-white rounded-[10px] px-[20px] py-[15px] mt-[20px] bg-[white] shadow-2xl">
            <button className=" text-start w-[74%] border-r-[2px] px-[25px] text-[18px] font-[650]">
              Дополнительное страxование
            </button>
            <button className="text-start px-[10px] ml-[30px] w-[65%] text-[18px] font-[650]">
              5% от суммы на которую xотите застраxовать
            </button>
          </div>
        </div>
      </div>

      <div className="px-[5%] pb-[30px] mt-[20vh]">
        <h1 className="text-[30px] font-[600]">Страхование</h1>
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex w-[49%] dark:bg-[#1b1b1b] dark:text-white md:w-[100%] justify-between rounded-[10px] px-[20px] py-[15px] mt-[20px] bg-[white] shadow-2xl">
            <button className="text-start w-[74%] border-r-[2px] px-[25px] text-[18px] font-[650]">
              Консолидация <br />
              <span className="text-[grey] text-[13px]">
              Дополнительная защита покупок
              </span>
            </button>
            <button className="text-start px-[10px] text-[18px] font-[650]">
              £1.00/1 трек
            </button>
          </div>

          <div className="flex w-[49%] dark:bg-[#1b1b1b] dark:text-white md:w-[100%] justify-between rounded-[10px] px-[20px] py-[15px] mt-[20px] bg-[white] shadow-2xl">
            <button className="text-start w-[74%] border-r-[2px] px-[25px] text-[18px] font-[650]">
              Консолидация <br />
              <span className="text-[grey] text-[13px]">
              Дополнительная защита покупок
              </span>
            </button>
            <button className="text-start px-[10px] text-[18px] font-[650]">
              £1.00/1 трек
            </button>
          </div>
          <div className="flex w-[49%] dark:bg-[#1b1b1b] dark:text-white md:w-[100%] justify-between rounded-[10px] px-[20px] py-[15px] mt-[20px] bg-[white] shadow-2xl">
            <button className="text-start w-[74%] border-r-[2px] px-[25px] text-[18px] font-[650]">
              Консолидация <br />
              <span className="text-[grey] text-[13px]">
              Дополнительная защита покупок
              </span>
            </button>
            <button className="text-start px-[10px] text-[18px] font-[650]">
              £1.00/1 трек
            </button>
          </div>
          <div className="flex w-[49%] dark:bg-[#1b1b1b] dark:text-white md:w-[100%] justify-between rounded-[10px] px-[20px] py-[15px] mt-[20px] bg-[white] shadow-2xl">
            <button className="text-start w-[74%] border-r-[2px] px-[25px] text-[18px] font-[650]">
              Консолидация <br />
              <span className="text-[grey] text-[13px]">
              Дополнительная защита покупок
              </span>
            </button>
            <button className="text-start px-[10px] text-[18px] font-[650]">
              £1.00/1 трек
            </button>
          </div>
          <div className="flex w-[49%] dark:bg-[#1b1b1b] dark:text-white md:w-[100%] justify-between rounded-[10px] px-[20px] py-[15px] mt-[20px] bg-[white] shadow-2xl">
            <button className="text-start w-[74%] border-r-[2px] px-[25px] text-[18px] font-[650]">
              Консолидация <br />
              <span className="text-[grey] text-[13px]">
              Дополнительная защита покупок
              </span>
            </button>
            <button className="text-start px-[10px] text-[18px] font-[650]">
              £1.00/1 трек
            </button>
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

export default Page4;
