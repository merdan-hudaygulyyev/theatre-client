import { Link } from 'react-router-dom';
import '../style/404.css'

const NoPage = () => {
    return (
      <div className='d-flex flex-column justify-content-center align-items-center' style={{ width: '100vw', height: '80vh' }}>
        {/* <div className=""> */}
            <h1 className="mr-3 pr-3 align-top border-right inline-block align-content-center">404</h1>
            <div className="inline-block align-middle">
              <h2 className="font-weight-normal lead" id="desc">Sahypa tapylmady !</h2>
            </div>
        {/* </div> */}
              <Link to="/" className='btn btn-outline-danger'>
                Home
              </Link>
      </div>
    )
  };
  
  export default NoPage;