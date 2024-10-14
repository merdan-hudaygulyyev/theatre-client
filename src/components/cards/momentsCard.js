import SERVER_BASE_URL from "../../utils/base_url"


const MomentsCard = ({ id, title, image, setShowModal, showModal }) => {
    return (
        <div className="card-spectacles" onClick={() => setShowModal(image)} >
            <div className="profile-card">
                <img className="img-fluid" src={`${SERVER_BASE_URL}/spectacles/${image}`} alt="" />
                <div className="card-block">
                        <small>{title}</small>
                </div>
            </div>
        </div>
    )
}

export default MomentsCard