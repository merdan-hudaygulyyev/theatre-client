import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getOneArtist } from '../api/artists'
import SERVER_BASE_URL from '../utils/base_url'
import { t } from 'i18next'
import { paste } from '../utils/helpers/pasteWithLang'

const Artist = () => {
    const { id } = useParams()
    const [ data, setData ] = useState({})

    const getArtistData = async () => {
        await getOneArtist(id)
        .then(response => setData(response.data))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        getArtistData()
    }, [])

    return (
        <>
            <h4 className="text-center myFont header1 py-3">{t('artist')}</h4>
            <div className="container body-container">
                <div className="row" style={{ minHeight: '60vh' }}>
                    <div className="col-11 col-md-4 p-4 text-center">
                        <img src={`${SERVER_BASE_URL}/artists/${data?.image}`} style={{ width: '80%', height: 'auto', borderRadius: '10px' }} alt="artist" />
                    </div> 
                    <div className="col-12 col-md-8 py-3">
                        <div className="row">
                            <h4 className="myFont">{t('about_artist')}</h4>
                                <div className="col-3">
                                    <p>{t('fullname')}:</p>
                                </div>
                                <div className="col-9">
                                    <b className="text-wrap">
                                    { paste([ data?.fullname_tm, data?.fullname_ru, data?.fullname_en ]) }                  
                                    </b>
                                </div>
                        </div>

                        <div className="row">
                            <div className="col-3">
                                <p>{t('date_of_birth')}:</p>
                            </div>
                            <div className="col-9">
                                <b className="text-wrap">
                                    {data?.dateOfBirth}
                                </b>
                                </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-3">
                                <p>{t('work_now')}:</p>
                            </div>
                            <div className="col-9">
                                <b className="text-wrap">
                                    { paste([data?.job_tm, data?.job_ru, data?.job_en ]) }
                                </b>
                            </div>
                        </div>
                        <div className="row">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                                    {t('full_info')}
                                </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                { paste([data?.moreInfo_tm, data?.moreInfo_ru, data?.moreInfo_en]) }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Artist
