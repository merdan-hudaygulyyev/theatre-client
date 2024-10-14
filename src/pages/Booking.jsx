import { useState, useEffect, useMemo } from "react";
import {
  getAllFloors,
  getAllLines,
  getAllRows,
  getAllSeats,
} from "../api/ticket";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import seatsOfHall from "../images/seats_hall.jpg";
import BookingCard from "../components/cards/Booking/Booking";
import '../style/booking.css'
import { useParams } from "react-router-dom";
import { getAllSpectaclesByShow, getSpectacleByShow } from "../api/spectacles";
import { useTranslation } from "react-i18next";

const Booking = () => {
  const { i18n } = useTranslation();
  const locale = i18n.language;

  const {id} = useParams()
  const [checkoutData, setCheckoutData] = useState([])
  const [spectacleDetail, setSpectacleDetail] = useState({
    duration_en: "", 
    duration_ru: "", 
    duration_tm: "", 
    show_date: "", 
    spectacle_title_en: "", 
    spectacle_title_ru: "", 
    spectacle_title_tm: "", 
    startTime: "",
    spectacle_id: ""
  })
  const [spectaclesByShow, setSpectaclesByshow] = useState()

  const getSpectacleByShowData = async () => {
    await getSpectacleByShow(id)
    .then(response => setSpectacleDetail(response))
    .catch(error => console.log(error))
  }
  const getSpectaclesByShow = async () => {
    await getAllSpectaclesByShow(id)
    .then(response => setSpectaclesByshow(response))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    getSpectacleByShowData()
    getSpectaclesByShow()
  }, [])

  const addToCheckout = (seat) => {
    if(seat.is_selected){
      setCheckoutData([...checkoutData, seat])
    }else {
      const filtered = checkoutData.filter(item => item.seat_id !== seat.seat_id)
      setCheckoutData(filtered)
    }
  }

  const checkoutSum = useMemo(() => {
    let sum = 0;
    for(let i = 0; i < checkoutData.length; i++){
      sum += checkoutData[i].price
    }
    return sum
  }, [checkoutData])
  return (
    <main>
      <div className="text-center d-flex flex-column justify-content-center gap-1 p-4 border-bottom border-2 mb-4">
        <b>Sahna: {spectacleDetail[locale === 'tm' ? 'spectacle_title_tm' : locale === 'ru' ? 'spectacle_title_ru' : 'spectacle_title_en']}</b>
        <b>Senesi: {spectacleDetail.show_date}</b>
        <b>Wagty: {spectacleDetail[locale === 'tm' ? 'duration_tm' : locale === 'ru' ? 'duration_ru' : 'duration_en']}</b>
      </div>
      <div className="container mx-auto mb-5">
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
          fill
        >
          <Tab
            eventKey="home"
            className="bg-white p-3"
            title={
              <>
                <b>1.1</b> <br />
                <small className="bg-info p-1 rounded-5">1.gat 1.hatar</small>
              </>
            }
          >
            <div className="d-flex justify-content-between align-items-center px-5 my-3">
              <div className="d-flex gap-1 align-items-center">
                <div className="mini-box empty-box"></div>
                <span>
                  Boş ýer
                </span>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <div className="mini-box selected-box"></div>
                <span>
                  Saýlanan ýer
                </span>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <div className="mini-box sold-box"></div>
                <span>
                  Satylan ýer
                </span>
              </div>
            </div>

            <div className='main'>
              {
                spectaclesByShow?.oneone?.map((item, index) => (
                  <BookingCard 
                    key={index}
                    index={index}
                    data={item}
                    onClick={(seat) => addToCheckout(seat)}
                  />
                ))
              }
            </div>
      
          </Tab>
          
          <Tab
            eventKey="profile"
            title={
              <>
                <b>1.2</b> <br />
                <small className="bg-info p-1 rounded-5">1.gat 2.hatar</small>
              </>
            }
          >
            <div className="d-flex justify-content-between align-items-center px-5 my-3">
              <div className="d-flex gap-1 align-items-center">
                <div className="mini-box empty-box"></div>
                <span>
                  Boş ýer
                </span>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <div className="mini-box selected-box"></div>
                <span>
                  Saýlanan ýer
                </span>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <div className="mini-box sold-box"></div>
                <span>
                  Satylan ýer
                </span>
              </div>
            </div>

            <div className='main'>
              {
                spectaclesByShow?.onetwo?.map((item, index) => (
                  <BookingCard 
                    key={index}
                    index={index}
                    data={item}
                    onClick={(seat) => addToCheckout(seat)}
                  />
                ))
              }
            </div>
          </Tab>

          <Tab
            eventKey="contact"
            title={
              <>
                <b>2.1</b> <br />
                <small className="bg-info p-1 rounded-5">2.gat 1.hatar</small>
              </>
            }
          >
            <div className="d-flex justify-content-between align-items-center px-5 my-3">
              <div className="d-flex gap-1 align-items-center">
                <div className="mini-box empty-box"></div>
                <span>
                  Boş ýer
                </span>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <div className="mini-box selected-box"></div>
                <span>
                  Saýlanan ýer
                </span>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <div className="mini-box sold-box"></div>
                <span>
                  Satylan ýer
                </span>
              </div>
            </div>

            <div className='main'>
              {
                spectaclesByShow?.twoone?.map((item, index) => (
                  <BookingCard 
                    key={index}
                    index={index}
                    data={item}
                    onClick={(seat) => addToCheckout(seat)}
                  />
                ))
              }
            </div>
          </Tab>
        
          <Tab eventKey="seats_of_hall"  title={
              <p>
               Seats of hall
               <br />
              </p>
            }>
            <img src={seatsOfHall} alt="Seats of hall" className="seats-of-hall" />
          </Tab>
        </Tabs>

        <div className='checkouts'>
          {
            checkoutData.length > 0 ? 
            <h2>Saylanan yerler</h2> : ""
          }
          <div className='checkout_content'>
            {
              checkoutData?.map(seat => (
                <div className="checkout" key={seat.seat_id}>
                  <span>Yer: </span>
                  <span>{seat.line_name + '' + seat.seatNumber + " "}</span>
                  <span>{seat[locale === 'tm' ? 'floor_name_tm' : locale === 'ru' ? 'floor_name_ru' : 'floor_name_en']}</span>
                </div>
              ))
            }
          </div>
          {checkoutData.length > 0 && <span>Jemi: {checkoutSum}</span>}
        </div>
      </div>

    </main>
  );
};

export default Booking;
