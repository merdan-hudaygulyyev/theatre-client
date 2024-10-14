import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import "../style/home-styles.css"

// import Swiper core and required modules
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"
import "swiper/css/grid"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, {
  Keyboard,Scrollbar,Navigation,Pagination,EffectCoverflow,Grid
} from 'swiper'

import SERVER_BASE_URL from "../utils/base_url"
import { paste } from '../utils/helpers/pasteWithLang'
import ArtistCard from "../components/cards/artistCard"
import MomentsCard from "../components/cards/momentsCard"
import NewsCard from "../components/cards/newsCard"
import { getShowToday } from "../api/shows"
import { getAllArtists } from "../api/artists"
import { getAllNews } from "../api/news"
import { getImagesForMoments } from "../api/spectacles"
import { getAllBanners } from "../api/banners"

import { t } from "i18next"

// install Swiper modules
SwiperCore.use([Keyboard,Scrollbar,Navigation,Pagination,EffectCoverflow,Grid]);

const getBanners = async (setBanners) => {
  try {
    await getAllBanners()
    .then(response => setBanners(response.data))
    .catch(error => console.log('filtered error->', error))
  } catch (err) {
    console.log(err);
  }
}
const getArtists = async (setArtists) => {
  try {
    await getAllArtists({ limit: 5 })
    .then(response => setArtists(response.data.rows))
    .catch(error => console.log('filtered error->', error))
  } catch (err) {
    console.log(err);
  }
}
const getNews = async (setNews) => {
  try {
    await getAllNews({limit: 5})
    .then(response => setNews(response.data.rows))
    .catch(error => console.log('filtered error->', error))
  } catch (err) {
    console.log(err);
  }
}
const getShow = async (setShowToday) => {
  try {
    await getShowToday()
    .then(response => {
      setShowToday(response.data)
    })
    .catch(error => console.log('filtered error->', error))
  } catch (err) {
    console.log(err);
  }
}
const getMoments = async (setMoments) => {
  try {
    await getImagesForMoments()
    .then(response => {
      setMoments(response.data)
    })
    .catch(error => console.log('filtered error->', error))
  } catch (err) {
    console.log(err);
  }
}
const Home = () => {
  const [banners, setBanners] = useState([])
  const [showToday, setShowToday] = useState([])
  const [moments, setMoments] = useState([])
  const [news, setNews] = useState([])
  const [artists, setArtists] = useState([])
  const [showModal, setShowModal] = useState(false)
  
  useEffect(() => {
    getBanners(setBanners)
    getShow(setShowToday)
    getNews(setNews)
		getArtists(setArtists);
		getMoments(setMoments);
	}, [])

  return (
    <>
    <div id="carouselExampleDark" className="body carousel carousel-dark slide banner" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner banner">
        {
          banners.length ?
          banners.map(banner => (
          <div key={banner.id} className="carousel-item active banner" data-bs-interval="10000">
            <img src={`${SERVER_BASE_URL}/banners/${banner?.image}`} className="d-block w-100 banner" alt="Banner" />
            <div className="carousel-caption d-none d-md-block carouselText">
              <h5>
                {
                  paste([ banner.title_tm, banner.title_ru, banner.title_en ])
                }
              </h5>
              <p>
                {
                  paste([ banner.subtitle_tm, banner.subtitle_ru, banner.subtitle_en ])
                }
              </p>
            </div>
          </div>
          ))
          :
          <div className="carousel-item active banner" data-bs-interval="10000">
            <img src='/assets/imgs/dasy_1.png' className="d-block w-100 banner" alt="Banner" />
            <div className="carousel-caption d-none d-md-block carouselText">
              <h5>
                { t('theatre_name') }
              </h5>
              <p>
                <b><i className="fa fa-map-marker" aria-hidden="true"></i></b>
                { t('address') }
              </p>
            </div>
          </div>
        }
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    <div className="container body-container">
      {/* =======================todays spectacle=================== */}
      {
        showToday.length ?

        showToday.map(show => (
          <div className="card-holder" key={show.id}>
            <div className="card-box bg-news">
              <div className="row">
                <div className="col-lg-6">
                  <div className="img-box">
                    <img src={`${SERVER_BASE_URL}/spectacles/${show?.Spectacles?.images[0]}`} className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-6">
                
                  <div className="card-details">
                  <h3 className="title">{t('spectacle_of_today')}</h3>
                  <div className="row">
                    <div className="col-sm-12">
                      <label>{t('spectacle')}:</label>
                      <div className="expiration-date">
                        <h6>
                          {
                            paste([ show?.Spectacles?.title_tm, show?.Spectacles?.title_ru, show?.Spectacles?.title_en ])
                          }
                        </h6>
                      </div>
                    </div>
                    <div className="col-sm-12">
                    <label>{t('time')}:</label>
                    <div className="expiration-date">
                      <h6>
                        {show?.date}
                      </h6>
                    </div>
                    </div>
                    <div className="col-sm-12">
                    <label>{t('running_time')}:</label>
                    <div className="expiration-date">
                      <h6>
                        {
                          paste([ show?.Spectacles?.runningTime_tm, show?.Spectacles?.runningTime_ru, show?.Spectacles?.runningTime_en ])
                        }
                      </h6>
                    </div>
                    </div>
                  </div>
                  </div>
                
                </div>
          
              </div>
            </div>
          </div>
        ))

        :
        <div className="card-holder">
          <div className="card-box bg-news">
            <div className="row">
              <h3 className="text-center">{t('no_spectacle_of_today')}</h3>
            </div>
          </div>
        </div>
      }
    
      {/* ==========NEWS=================== */}
      <div className="py-5 border1">
        <div className="d-flex align-items-center">
          <h3 className="article">
            {t('nav_link_news')}
          </h3>
          <Link to="/news" className="read-more">{t('read_more')}</Link>
        </div>
        <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          "enabled": true
        }}
        breakpoints={{
          "769": {
            "slidesPerView": 2,
            "slidesPerGroup": 2
          },
          "980": {
            "slidesPerView": 3,
            "slidesPerGroup": 3
          }
        }}
        pagination={{
          "clickable": true
        }}
        className="mySwiper2"
        >
          {
            news.length &&
            news.map( neww => 
              <SwiperSlide key={neww.id}>
                <NewsCard
                  id={neww?.id}
                  title={paste([neww?.title_tm, neww?.title_ru, neww?.title_en])}
                  content={paste([neww?.content_tm, neww?.content_ru, neww?.content_en])}
                  date={neww?.updatedAt}
                  image={neww?.images[0]}
                />
              </SwiperSlide>
            
            )
          }
        </Swiper>
      </div>

      {/* ==========ARTISTs=================== */}
      <div className="py-5 border1">
        <div className="d-flex align-items-center">
          <h3 className="article">
            {t('nav_link_artists')}
          </h3>
          <Link to="/artists" className="read-more">{t('read_more')}</Link>
        </div>
        <Swiper
        effect="coverflow" 
        slidesPerView={1}
        centeredSlides={true}
        slidesPerGroupSkip={1} 
        breakpoints={{
          "769": {
            "slidesPerView": 2,
            "slidesPerGroup": 1
            },
            "980": {
              "slidesPerView": 4,
              "slidesPerGroup": 1 
            }
          }}
          className="mySwiper2"
          >
          <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
            {artists.map((artist, index) => {
              return (
                <SwiperSlide key={artist.id}>
                  <div className="col">
                    <ArtistCard
                      id={artist.id}
                      fullname={paste([artist.fullname_tm, artist.fullname_ru, artist.fullname_en])}
                      degree={paste([artist.degree_tm, artist.degree_ru, artist.degree_en])}
                      image={artist.image}
                    />
                  </div>
              </SwiperSlide>
              )
            })}
          </div>
        </Swiper>
      </div>

      {/* <!-- PURSATLAR--> */}
      <div className="py-5 border1">
      <div className="d-flex align-items-center">
          <h3 className="article">
            {t('moments')}
          </h3>
        </div>
        <Swiper
          breakpoints={{
            "769": {
              "slidesPerView": 2,
              "slidesPerGroup": 1
              },
              "980": {
                "slidesPerView": 6,
                "slidesPerGroup": 1 
              }
            }}
          grid={{
            rows: 1 ,
            fill: "row",
          }}
          centeredSlides={false}
          spaceBetween={3}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Navigation, Pagination]}
          className="mySwiper3"
        >
        {
          moments.map((moment, index) => {
            return(
              moment?.images.map(image => (
                <SwiperSlide key={image}>
                  <MomentsCard
                    id={1}
                    title={paste([moment?.title_tm, moment?.title_ru, moment?.title_en])}
                    image={image}
                    setShowModal={setShowModal}
                    showModal={showModal}
                  />
                </SwiperSlide>
              ))
            )
          })
        }
        </Swiper>
      </div>


      { showModal && 
        <div className="d-flex align-items-center justify-content-center" style={{ width: '100vw', height: '100vh', position: 'fixed', zIndex: '10', top: 0, bottom:0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div onClick={()=>setShowModal(false)} style={{ position: 'absolute', right: '2rem', top: '2rem',cursor: 'pointer' }}>
            <i className="fa fa-times" aria-hidden="true" style={{ color: '#ffffff', fontSize: '2rem' }}></i>
          </div>
            <img style={{ width: '90%', maxHeight: '90%' }} src={`${SERVER_BASE_URL}/spectacles/${showModal}`} />
        </div>
      }
    </div>
    </>
  );
};
  
export default Home;