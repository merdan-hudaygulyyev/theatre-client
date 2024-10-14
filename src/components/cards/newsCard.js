import { Link } from "react-router-dom"
import '../../style/news-styles.css'
import SERVER_BASE_URL from "../../utils/base_url"
import { t } from "i18next"

const NewsCard = ({ id, title, content, date, image }) => {
    return (
        <div className="post-slide">
            <div className="post-img">
                <img src={`${SERVER_BASE_URL}/news/${image}`} alt="news image" />
                <Link to={`/news/${id}`} className="over-layer"><i className="fa fa-link"></i></Link>
            </div>
            <div className="post-content">
                <h3 className="post-title">
                    <Link to={`/news/${id}`} style={{ textOverflow: 'ellipsis', lineClamp: 3 }}>
                        {title.substring(0,60) + "..."}
                    </Link>
                </h3>
                <p>
                    <small className="post-description">
                        {content.substring(0,100) + "..."}
                    </small>
                </p>
                <div>
                <span className="post-date"><i className="fa fa-calendar"></i>{date}</span>
                <Link to={`/news/${id}`} className="read-more" style={{ float: 'right' }}>{t('read_more')}</Link>
                </div>
            </div>
        </div>
    )
}

export default NewsCard