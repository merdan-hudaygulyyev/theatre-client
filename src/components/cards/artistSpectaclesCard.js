import { Link } from "react-router-dom"

const ArtistSpectaclesCard = ({ id, title, date, startTime, image }) => {
    return (
      <div className="w-100 row py-2 border1 myBackground1">
      <div className="col-5 col-md-4 col-lg-3 d-flex align-items-center">
        <img className="w-100" src="data_of_site/performances/Aşyk çaňly foto/YSK_8903.JPG" />
      </div>
      <div className="col-7 col-md-8 col-lg-9 pb-2">
          <h6>
            <Link href="sahna.html ">Aşyk Çaňly</Link>
          </h6>
          <span>
            <small>
              {/* <img style={{ width: '20px' }} src="assets/icons/i_calendar.svg" /> */}
              <small className="text-muted"><i className="fa fa-calendar-check-o color-green"></i></small>
              {' '}
              12.12.2023 y
            </small>
          </span>
          <br/>
          <small>
          <small className="text-muted">
            <i className="fa fa-clock-o color-green"></i></small>
            {' '}
              13 : 00
          </small>
      </div>
    </div>
    )
}

export default ArtistSpectaclesCard