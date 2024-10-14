import { Link } from "react-router-dom"
import SERVER_BASE_URL from "../../utils/base_url"
import { t } from "i18next"

const SpectacleCard = ({ id, title, runningTime, image, date, startTime }) => {
    return (
        <div className="card overflow-hidden text-center">
                  <img src={`${SERVER_BASE_URL}/spectacles/${image}`} style={{ height: '230px' }} alt="" />
          
                  {/* <!--Card body--> */}
                  <div className="card-body p-0">
                    {/* <!--avatar--> */}
                    <h6 className="p-2">
                      <Link to={`/spectacles/${id}`} className="text-reset"> {title} </Link>
                    </h6>

                    { 
                      date && startTime &&
                      <div className="row mx-0 border-top border-bottom">
                      <div className="col-6 text-center border-end py-2">
                        <small className="text-muted"><i className="fa fa-calendar-check-o color-green"></i></small>
                        { ' : '}
                        <strong className="mb-0">{date}</strong>
                      </div>
                      <div className="col-6 text-center py-2">
                      <small className="text-muted"><i className="fa fa-clock-o color-green"></i></small>
                        { ' : '}
                        <strong className="m-0">{startTime}</strong>
                      </div>
                    </div>
                    }

                    <ul className="list-group list-group-flush">
                      <li className="list-group-item px-3 d-flex align-items-center justify-content-between">
                        <span className="text-muted small">{t('running_time')}</span>
                        <strong>{runningTime}</strong>
                      </li>
                    </ul>
                  </div>
                </div>
    )
}

export default SpectacleCard