import { TextField } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import vib from "../assets/img/vib.svg";
import logo from "../assets/img/logo.svg";
import "../App.css"

const Page5 = () => {
  return (
    <div>
      <div
        className=" text-white px-[4%] py-[40px] mx-[1%] rounded-[20px]"
        id="bg1"
      >
        <h1 className="text-[#d6d3d3]">Главная / Как покупать</h1>
        <h1 className="text-[40px] font-[650]">Отвечаем на вопросы доставки</h1>
      </div>

      <div className="px-[5%] py-[30px]">
        <div className="flex dark:bg-[#1b1b1b] dark:text-white justify-between rounded-[10px] px-[40px] py-[20px] my-[20px] bg-[white] shadow-2xl">
          <div className="w-[100%] dark:bg-[#1b1b1b] dark:text-white">
            <h1 className="text-[17px] font-[650]">
              Поиск в вопросах и ответах:
            </h1>
            <TextField
              sx={{ width: "100%", color: "#FFF" }}
              id="standard"
              label="Введите свой вопрос..."
              variant="standard"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            />
          </div>
        </div>
      </div>

      <div className="px-[5%] pb-[30px] mt-[10vh]">
        <h1 className="text-[30px] font-[600]">
          Виртуальный адрес в Великобритании
        </h1>
        <div className="mt-[30px] dark:bg-[#1b1b1b] dark:text-white">
          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className="px-[5%] pb-[30px] mt-[10vh]">
        <h1 className="text-[30px] font-[600]">
          Виртуальный адрес в Великобритании
        </h1>
        <div className="mt-[30px]">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className="px-[5%] pb-[30px] mt-[10vh]">
        <h1 className="text-[30px] font-[600]">
          Виртуальный адрес в Великобритании
        </h1>
        <div className="mt-[30px]">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className="px-[5%] pb-[30px] mt-[10vh]">
        <h1 className="text-[30px] font-[600]">
          Виртуальный адрес в Великобритании
        </h1>
        <div className="mt-[30px]">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className="px-[5%] pb-[30px] mt-[10vh]">
        <h1 className="text-[30px] font-[600]">
          Виртуальный адрес в Великобритании
        </h1>
        <div className="mt-[30px]">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className="px-[5%] pb-[30px] mt-[10vh]">
        <h1 className="text-[30px] font-[600]">
          Виртуальный адрес в Великобритании
        </h1>
        <div className="mt-[30px]">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel"
              className="dark:bg-[#1b1b1b] dark:text-white rounded-[5px]"
            >
              <Typography>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
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

export default Page5;
