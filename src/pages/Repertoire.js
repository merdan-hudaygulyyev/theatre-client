import { useEffect, useState } from 'react'
import { getLastMonthRepertoire } from '../api/repertoires'
import { t } from 'i18next'
import { paste } from '../utils/helpers/pasteWithLang'

const Repertoire = (prop) => {
    const [ data, setData ] = useState()

    
    useEffect(() => {
        const getRepertoire = async () => {
            await getLastMonthRepertoire()
            .then(response => setData(response.data))
            .catch(error => console.log(error))
        }
        getRepertoire()
    }, [])

    return (
        <>
            <h4 className="text-center myFont header1 py-3">{t('nav_link_repertoires')}</h4>
            <div className="container body-container" style={{ minHeight: '60vh' }}>
                {
                    data ?
                    <div className="row p-4">
                        <div className="col-12 col-md-3 d-flex flex-column align-items-center justify-content-center">
                            <strong>{ data?.year } - {t('year')},</strong>
                            <strong>{ paste([data?.month_tm, data?.month_ru, data?.month_en]) } - {t('month')}</strong>
                        </div>
                        <div className='col-12 col-md-9'>
                                {
                                    data?.spectacleInfos.map((show, index) => (
                                        <div key={index} className='row p-2 border1'>
                                            <div className="col-12 col-md-1 p-2 text-center" style={{ borderRight: '.5px solid #000000' }}>
                                                <i className="fa fa-calendar" aria-hidden="true" style={{ color: 'green' }}></i> : 
                                                { show.day <= 9 ? `0${show.day}`: `${show.day}` }
                                            </div>
                                            <div className="col-12 col-md-2 p-2 text-center" style={{ borderRight: '.5px solid #000000' }}>
                                                <i className="fa fa-clock-o" aria-hidden="true" style={{ color: 'green' }}></i> : 
                                                {show.time}
                                                
                                            </div>
                                            <div className="col-12 col-md-8 p-2 text-center">
                                                <small className='text-muted'>{t('spectacle')}: </small>
                                                { paste([ show.title_tm, show.title_ru, show.title_en ]) }
                                            </div>
                                        </div>
                                    ))
                                }
                        </div>
                    </div>
                    :
                    <p className='text-muted text-center'>{t('no_repertoire')}</p>
                }
            </div>
        </>
    )
}

export default Repertoire
