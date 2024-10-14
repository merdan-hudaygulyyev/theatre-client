import { useEffect, useState } from "react"
import { postMessage } from "../api/contact"
import { paste } from "../utils/helpers/pasteWithLang"
import { t } from "i18next"


const Contact = () => {
	const [contactMessage, setContactMessage] = useState({
    personName: "",
    email: "",
    title: "",
    content: "",
  });
	const [alert, setAlert] = useState({
    open: false,
    alertMessage: {},
    alertType: ''
  });

  useEffect(() => {

  } ,[])

  const changeHandler = prop => event => {
    setContactMessage({ ...contactMessage, [prop]: event.target.value })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    await postMessage(contactMessage)
    .then(response =>
      setAlert({
        open: true,
        alertMessage: response.data,
        alertType: 'success'
      })
    )
    .catch(() => setAlert({
      open: true,
      alertMessage: {answer_tm: 'Täzeden synanyşyň!', answer_ru: 'Попробуйте еще раз!', answer_en: 'Try again!'},
      alertType: 'danger'
    }))
  }

    return (
      <>
        <h4 className="text-center myFont header1 py-3">{t('nav_link_contact')}</h4>
        <div className="container body-container">
          <div className="row p-4 mb-3">
            <div className="col-md-4 text-center">
                <i className="fa fa-map-marker" aria-hidden="true" style={{ fontSize: '2em', padding: '.5rem', color: 'green' }}></i>
                <h3 className="fw-900" style={{ color: 'darkgreen' }}></h3>
                <address>{t('address')}</address>
            </div>

            <div className="col-md-4 text-center">
                <i className="fa fa-volume-control-phone" aria-hidden="true" style={{ fontSize: '2em', padding: '.5rem', color: 'green' }}></i>
                <h3 style={{ color: 'darkgreen' }}>{t('phone_number')}</h3>
                <p>
                  <a href="tel:+99312960612">
                    +99312960612
                  </a>
                  <br/>
                  <a href="tel:+99312942998">
                    +99312942998 
                  </a>
                </p>
            </div>

            <div className="col-md-4 text-center">
                <img src="/assets/icons/i_email.svg" style={{ width: '3em', padding: '.5rem' }} alt="email-icon" />
                <h3 style={{ color: 'darkgreen' }}>Email</h3>
                <p>
                  <a href="mailto:Magtymgulyteatr@gmail.com">Magtymgulyteatr@gmail.com</a>
                  <br/>
                  <a href="mailto:Magtymgulyteatr@sanly.tm">Magtymgulyteatr@sanly.tm</a>
                </p>
              </div>

          </div>

          <div className="row">
            <div className="col-12 col-md-6 py-3">
              <h4>{t('send_to_message')}</h4>
              <div className="form w-100">
                <form onSubmit={submitHandler}>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        id="name"
                        required
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder={`${t('name_for_message_input')}`}
                        value={contactMessage.personName}
                        onChange={changeHandler('personName')}
                      />
                    </div>
                    <div className="form-group col-md-6 mt-3 mt-md-0">
                      <input
                        id="email"
                        required
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="mail@example.com"
                        value={contactMessage.email}
                        onChange={changeHandler('email')}
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      id="subject"
                      required
                      className="form-control"
                      type="text"
                      name="subject"
                      placeholder={`${t('title_for_message_input')}`}
                      value={contactMessage.title}
                      onChange={changeHandler('title')}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea 
                      required
                      className="form-control" 
                      rows="5" 
                      name="content" 
                      placeholder={`${t('content_for_message_input')}`}
                      value={contactMessage.content}
                      onChange={changeHandler('content')}
                    ></textarea>
                  </div>

                  <div className="my-3">
                  {
                    alert.open &&
                      <div className={`alert alert-${alert.alertType} d-flex align-items-center justify-content-between`} role="alert">
                        <div>
                          {
                            alert.alertType === 'success'
                            ?
                            <i className="fa fa-check-square-o" aria-hidden="true"></i>
                            :
                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                          }
                          { paste([ alert.alertMessage?.answer_tm, alert.alertMessage?.answer_ru, alert.alertMessage?.answer_en ]) }
                        </div>
                        <div style={{ cursor: 'pointer' }} onClick={() =>setAlert(false)}>
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </div>
                      </div>
                  }
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-success">{t('send_btn_for_message_input')}</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <iframe
              style={{ border: '0' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d393.3304797302336!2d58.38348653035823!3d37.938750206055495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffd9fa0c57a91%3A0xf413d9a9411b7754!2z0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INC80YPQt9GL0LrQsNC70YzQvdC-LdC00YDQsNC80LDRgtC40YfQtdGB0LrQuNC5INGC0LXQsNGC0YAg0LjQvNC10L3QuCDQnNCw0YXRgtGD0LzQutGD0LvQuA!5e0!3m2!1sru!2s!4v1673565588325!5m2!1sru!2s"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
  		  </div>
      </>
    )
  };
  
export default Contact;