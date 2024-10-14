import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SERVER_BASE_URL from "../utils/base_url";
import { getOneShow } from "../api/shows";

// Import Swiper styles
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { t } from "i18next";
import { paste } from "../utils/helpers/pasteWithLang";

const Spectacle = (prop) => {
  const naviage = useNavigate()
  const { id } = useParams();
  const [data, setData] = useState({});

  const getSpectacleData = async () => {
    await getOneShow(id)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getSpectacleData();
  }, []);


  const handleBooking = (spectacle) => {
    console.log('spectacle: ', spectacle)
    if(spectacle){
      naviage('/booking')
    }
  }


  return (
    <>
      <h4 className="text-center myFont header1 py-3">{t("spectacle")}</h4>
      <div className="container body-container" style={{ minHeight: "60vh" }}>
        <div className="row">
          <div className="col-12  col-md-5 py-3">
            <h4 className="text-center m-2">{t("short_about_spectacle")}</h4>
            <div className="row mb-2">
              <div className="col-4">
                <small className="text-muted">{t("spectacle_name")}:</small>
              </div>
              <div className="col-8">
                <b className="text-wrap">{data?.Spectacles?.title}</b>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-4">
                <small className="text-muted">{t("time")}:</small>
              </div>
              <div className="col-8">
                <div className="text-wrap">
                  <i
                    className="fa fa-calendar"
                    aria-hidden="true"
                    style={{ color: "green" }}
                  ></i>{" "}
                  {data?.date}
                  <br />
                  <i
                    className="fa fa-clock-o"
                    aria-hidden="true"
                    style={{ color: "green" }}
                  ></i>{" "}
                  {data?.startTime}
                </div>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-4">
                <small className="text-muted">{t("running_time")}:</small>
              </div>
              <div className="col-8">
                <div className="text-wrap">
                  {paste([
                    data?.Spectacles?.runningTime_tm,
                    data?.Spectacles?.runningTime_ru,
                    data?.Spectacles?.runningTime_en,
                  ])}
                </div>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-4">
                <small className="text-muted">{t("ticket_prices")}:</small>
              </div>
              <div className="col-8">
                <div className="text-wrap">
                  <small>{t("floor_1")}: </small>
                  {data?.ticketPrice_1} TMT
                  <br />
                  <small>{t("floor_2")}: </small>
                  {data?.ticketPrice_2} TMT
                </div>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-success my-3"
              onClick={() => handleBooking(data)}
            >
              Petek saýlaň
            </button>
            {/* <!-- </div> --> */}
          </div>
          <div className="col-11 col-md-7 px-4 pt-2">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper2"
            >
              {data?.Spectacles?.images.map((image) => (
                <SwiperSlide key={image}>
                  <img
                    src={`${SERVER_BASE_URL}/spectacles/${image}`}
                    alt="Spectacle"
                    style={{ borderRadius: "5px" }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              {t("about_spectacle")}
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabIndex="0"
          >
            <p className="p-3">
              {paste([
                data?.Spectacles?.content_tm,
                data?.Spectacles?.content_ru,
                data?.Spectacles?.content_en,
              ])}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spectacle;
