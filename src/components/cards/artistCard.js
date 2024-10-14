import { Link } from "react-router-dom"
import '../../style/artists-styles.css'
import SERVER_BASE_URL from "../../utils/base_url"
import { t } from 'i18next'

const ArtistCard = ({ id, fullname, degree, image }) => {
    return (
        <div className="card radius-15">
          <div className="card-body text-center">
            <div className="p-3 border radius-15">
              <img src={`${SERVER_BASE_URL}/artists/${image}`} className="rounded-rounded shadow" style={{height: '190px', maxWidth: '100%', borderRadius: '10px'}} alt="artist" />
              <h6 className="mb-0 mt-4">{fullname}</h6>
              <small className="text-muted">{degree}</small>

              <Link to={`/artists/${id}`} >
                <button className="w-100 read-more-outline radius-15 p-1 mt-2">
                  { t('full_info') }
                </button>
              </Link>
            </div>
          </div>
        </div>
    )
}

export default ArtistCard