import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SERVER_BASE_URL from '../utils/base_url'
import { getOneNew } from '../api/news'

// Import Swiper styles
import { Navigation, Pagination, Autoplay  } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { t } from 'i18next'
import { paste } from '../utils/helpers/pasteWithLang'

const New = (prop) => {
    const { id } = useParams()
    const [ data, setData ] = useState({})

    const getNewsData = async () => {
        await getOneNew(id)
        .then(response => setData(response.data))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        getNewsData()
    }, [])

    return (
        <div className="container body-container" style={{ minHeight: '60vh' }}>
        <div className="row">
            <div className="col-12 col-md-4 p-4 text-center ">
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
                    {
                        data?.images?.length > 0 &&
                        data?.images?.map((image) => (
                            <SwiperSlide key={image}>
                                <img src={`${SERVER_BASE_URL}/news/${image}`} alt='Spectacle' style={{ borderRadius: '7px' }} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div> 
            <div className="col-12 col-md-8 py-4">
                    <div className="text-wrap my-3">
                        {t('new')} : <b className='text-muter'>{paste([data?.title_tm, data?.title_ru, data?.title_en])}</b>
                    </div>
                    <div className="text-wrap my-2">
                        {t('date')} : <b className='text-muter'>{data?.updatedAt}</b>
                    </div>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                            {t('full_info')}
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                        <p className="p-3"> 
                            {paste([data?.content_tm, data?.content_ru, data?.content_en])}
                        </p>       
                    </div>
                </div>
            </div> 
        </div>
    </div>
    )
}

export default New
