import React from 'react'
import SERVER_BASE_URL from '../utils/base_url'

// Import Swiper styles
import { Navigation, Pagination, Autoplay  } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"

import { t } from 'i18next';
import { paste } from '../utils/helpers/pasteWithLang'

const imgs = [
    'dasy_1.png',
    'tomasha_zal_1.jpg',
    'tomasha_zal_2.jpg',
    'faye_1.jpg',
    'faye_2.jpg',
    'seats_hall.png',
    'sahna_1.jpg',
    'plan_sahna_1.jpg',
    'plan_sofita_1.jpg',
    'cyzgy_1.jpg',
]

const About = () => {

    return (
        <>
            <h4 className="text-center myFont header1 py-3">{t('nav_link_about')}</h4>
            <div className="container body-container" style={{ minHeight: '60vh' }}>
                
            <div className="row">
                <div className="col-12 col-md-5 d-flex flex-column justify-content-center align-items-center">
                        <h4 className="text-center m-2 myFont">
                            {t('theatre_name')}
                        </h4>
                        
                        <b>{t('theatre_address')}:</b> { t('address') }

                        <b>{t('theatre_phone_numbers')}:</b> {t('reception')} 94-06-12, {t('kassa')} 94-29-98.
                        
                        <a type="button" href="booking.html" className="btn btn-success my-3">
                            Petek saýlaň
                        </a>
                    {/* <!-- </div> --> */}
                </div>
                <div className="col-11 col-md-7 px-4 pt-2">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper2"
                    >
                        {
                            imgs.map((image) => (
                                <SwiperSlide key={image}>
                                    <img src={`/assets/imgs/${image}`} alt='Theatre images' style={{ borderRadius: '5px' }} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>  
            </div>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">{t('about_spectacle')}</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                    <div className="p-3"> 
                        
                        <p>Türkmenistanyň Magtymguly adyndaky milli sazly drama teatry Magtymguly adyndaky türkmen döwlet akademiki opera we balet teatrynyň mirasdüşeridir.</p>

                        <p>
                        Türkmenistanyň Magtymguly adyndaky milli sazly drama teatry 1941-nji ýylda açylýar. Ol teatr türkmen operalarynyň we baletleriniň döremegine goltgy berýär. 
                        Sungatyň bu görnüşinde ilki ýurdumyzyň daşyndan gelen kompozitorlar A.Şapoşnikow, Ýu.Meýtus, K.Korçmarýow dagy işläp, soň ýanlaryna türkmen kompozitorlaryny çekýärler. Weli Muhadow, Daňatar Öwezow, Aşyr Kuliýew, Nury Muhadow dagy olardan tälim alyp ençeme eserleri döredýärler. Ýaş kompozitorlar Aman Agajykowyň, Durdy Nuryýewiň, Çary Nurymowyň, Rejep Rejepowyň okuwy tamamlap gelmegi bilen bu sungat has hem ösýär.
                        </p>

                        <p>
                            “Şasenem-Garyp”, “Zöhre-Tahyr”, “Leýli-Mežnun”, “Kemine we kazy”, “Abadan”, “Ganly saka”, “Aýna”, “Sona”, “Aldar köse”, “Epgegiň tepbedi” ýaly eserler türkmen milli opera we balet sungatynyň altyn hazynasyna girýär.
                        </p>

                        <p>
                        Teatrda dirižýorlar Hydyr Allanurow, Mäne Meredow, Orazgeldi Berdiýew dagy işleýärler.
                        </p>

                        <p>
                        Türkmen opera we balet sungatynyň ösmegine Alty Garlyýew, Mälikguly Kepbanow, Baýram Seýidow, Orazmyrat Amanmyradow ýaly režissýorlar, Goşa Japarow, Kerim Nyýazow, Ahmet Pürsiýanow ýaly baletmeýsterler öz mynasyp goşandyny goşýarlar.
                        </p>

                        <p>
                        Maýa Kuliýewa, Annagül Annakuliýewa, Medeniýet Şahberdiýewa, Roza Töräýewa, Ýolaman Hummaýew, Hoja Annaýew, Hojaw Annadurdyýew, Ahmet Pursiýanow, Gülbahar Musaýewa, Baýram Mämmedowa, Bibi Çeretanowa, Gözel Hummaýewa we başgalar türkmeniň opera we balet sungatynyň ägirtleridir.
                        </p>

                        <p>
                        Türkmenistanyň Magtymguly adyndaky milli sazly drama teatry opera we balet teatrynyň mirasdüşeri bolup, 2001-nji ýylda döredilýär. Teatr turuwbaşdan türkmen dessanlaryna ýüzlenip, “Saýatly-Hemra”, “Şasenem-Garyp”, “Hüýrlukga-Hemra”, “Harmandäli”, “Görogly” ýaly eserleri goýýär.
                        </p>

                        <p>
                        Teatry Garaşsyz Türkmenistanyň zähmet gahrymanlarynyň gazanýan üstünlikleri, türkmen halkynyň taryhynda öçmejek yz galdyran şahslaryň bitiren hyzmatlary, türkmen ýaşlarynyň ajaýyp işleri, ýaş nesliň terbiýesi gyzyklandyrýar we teatryň döredijilik topary öz öňünde uly wezipeleri goýýar.
                        </p>

                        <p>
                        “Talyp söýgüsi”, “Etme oglan sen oýun”, “Soragym bar, jan eje”, “Garajaoglan”, “Hakyda”, “Baý gelin”, “Sawçy we sallahlar”, “Törebeg hanym”, “Söýgi we hasrat”, “Tumar şa” we ýene-de ençeme eserler bu teatryň sahnasyny bezedi.
                        </p>

                        <p>
                        Sazly drama teatry milli operalarymyzy dikeltmekde we gaýtadan goýmakda uly işler bitirýär. “Şasenem-Garyp”, Zöhre-Tahyr”, “Leýli-Mežnun”, “Görogly”, “Magtymguly” “Aýna”, “Saýthan”, “Hüýrlukga-Hemra”, “Ýusup-Züleýha” ýaly eserler tomaşaçylaryň göwnünden turdy.
                        </p>

                        <p>
                        Teatr bagtyýar halkymyzyň bagtly durmuşyny wasp edýän “Ykbal öwrümleri”, “Bir ojakda iki dünýä”, “Ak alaňlaryň aýdymy”, “Söýgi bizi halas eder”, “Gel kenara söwer ýar” ýaly oýunlar bilen bir hatarda, körpe nesliň durmuşy bilen bagly “Ahmediň gaýduwsyz horazy”, “Bir Aždarha bar eken”, “Jadyly söz”, “Esen şohuň ertekisi”, “Gopbam towşanjyk” ýaly oýunlary hem döretdi.
                        </p>

                        <p>
                        Teatrda Türkmenistanyň sungatda at gazanan işgäri Aýnazar Batyrow we ýaş režissýor Begmuhammet Esenow döredijilikli zähmet çekýär.
                        </p>

                        <p>
                        Türkmenistanyň halk artistleri Öwezguly Gelenow, Ogultäç Hanyýewa, Halbeýke Dowyýewa, Mähri Annageldiýewa, Nury Hudaýgulyýew, Rejep Gurbanow, Türkmenistanyň at gazanan artistleri Şatlyk Halykow, Tirkeş Mätnazarow, Ýagmyr Gurbannazarow, Nargiza Halykowa, Aýsoltan Kowusowa we ýene-de ençeme halypa artistler ýaş nesliň ösmegi, halypaçylyk sungatynyň pajarlamagy, şägirt ýetişdirmek ugrunda ýadaman zähmet çekýärler.
                        </p>

                        <p>
                        Spektakllaryň şowly çykmagynda teatryň suratkeşi, Türkmenistanyň sungatda at gazanan işgäri Batyr Bekmyradowyň bitirýän işi uludyr. Ol oýunlary döwrebap bezemegi başarýar.
                        </p>

                        <p>
                        Teatr şu günler “Aşyk Çaňly” operasynyň üstünde işleýär. Operanyň edebi esasy bolan librettony Türkmenistanyň halk ýazyjysy Gowşutgeldi Daňatarow, sazyny Türkmenistanyň halk artisti Nurygandym Hojamuhammedow ýazdy.
                        </p>

                        <p>
                        Şeýle hem Türkmenistanyň Magtymguly adyndaky milli sazly drama teatry “Gyz edebi”, “Pyragy”, “Toý” ýaly oýunlary goýmaklygy meýilleşdirýär. Bu eserlerde belli aýdymçylar, drama artistleri çykyş edip, sazandalar we tansçylar oňa öz goşantlaryny goşarlar.
                        </p>
                        
                        <h5>
                        Teatrymyza oýun görmäge geliň!
                        </h5>

                    </div>       
                </div>
            </div>
          </div>

        </>
    )
}

export default About
