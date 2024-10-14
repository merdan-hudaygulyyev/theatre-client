import { useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import { t } from "i18next"
import langs from "./utils/consts/langs";

import './style/404.css'
import './style/lang-styles.css'


const Layout = ({changeLanguage}) => {
  // Redux
  const lang = useSelector((state) => state.language.lang)
  const [ isLangList, setIsLangList ] = useState(false)
  var initialLang = langs.filter(langg => langg.id === lang && langg)
  const [ selectedLang, setSelectedLang ] = useState(initialLang[0])
  
  const openLangList = () => {
    setIsLangList(!isLangList)
  }

  const changeLang = (lang) => {
    changeLanguage(lang.id)
    setSelectedLang(lang)
    setIsLangList(!isLangList)
  }

  return (
    <>
      {/* <!-- ================header===============     --> */}
      <div className="header">
        <div className="header1 d-flex align-items-center">
          <div  className="container d-flex justify-content-around align-items-center">
            <Link to="/" className="logo d-flex justify-content-center align-items-center">
              <img src="/assets/icons/logo.png" alt="logo"/>
              <small className="d-flex flex-column mx-2">
                <b style={{ fontSize: 'small', color: 'rgb(1, 85, 1)' }}>
                  { t("theatre_name") }
                </b>
              </small>
            </Link>
            <div className="rheader">
              <div className="lang-menu">
                <div className="selectedLangBtn selected-lang" onClick={() => openLangList()} >
                    <img className="langFlagImg" src={`/assets/icons/${selectedLang.id}.svg`} alt="lang"/>
                    <span>{selectedLang.lang}</span>
                </div>
                {
                  isLangList &&
                  <ul>
                    {
                      langs.map(lang => (
                        selectedLang.id !== lang.id &&
                          <li key={lang.id} onClick={() => changeLang(lang)}>
                            <img className="langFlagImg" src={`/assets/icons/${lang.id}.svg`} alt="lang"/>
                            <span>{lang.lang}</span>
                          </li>
                      ))
                    }
                  </ul>
                }
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg header2 p-1">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="rheaderForMin">
              <div className="lang-menu">
                <div className="selectedLangBtn selected-lang" onClick={() => openLangList()} >
                    <img className="langFlagImg" src={`assets/icons/${selectedLang.id}.svg`} alt="lang"/>
                    <span>{selectedLang.lang}</span>
                </div>
                {
                  isLangList &&
                  <ul>
                    {
                      langs.map(lang => (
                        selectedLang.id !== lang.id &&
                          <li key={lang.id} onClick={() => changeLang(lang)}>
                            <img className="langFlagImg" src={`assets/icons/${lang.id}.svg`} alt="lang"/>
                            <span>{lang.lang}</span>
                          </li>
                      ))
                    }
                  </ul>
                }
              </div>
            </div>

            <div className="collapse navbar-collapse lg:d-flex justify-content-lg-around" id="navbarNavDropdown">
              <ul className="container navbar-nav d-flex justify-content-around align-items-center">
                <li className="nav-item">
                  <NavLink to="/" className={({ isActive, isPending }) => isActive  ? 'nav myNav activeNav' : 'nav myNav' }>{ t('nav_link_main') }</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/spectacles" className={({ isActive, isPending }) => isActive  ? 'nav myNav activeNav' : 'nav myNav' }>{ t('nav_link_spectacles') }</NavLink>
                </li>
                <li className="nav-item" >
                  <NavLink to="/repertoire" className={({ isActive, isPending }) => isActive  ? 'nav myNav activeNav' : 'nav myNav' }>{ t('nav_link_repertoires') }</NavLink>
                </li>
                <li className="nav-item" >
                  <NavLink to="/artists" className={({ isActive, isPending }) => isActive  ? 'nav myNav activeNav' : 'nav myNav' }>{ t('nav_link_artists') }</NavLink>
                </li>
                <li className="nav-item" >
                  <NavLink to="/news" className={({ isActive, isPending }) => isActive  ? 'nav myNav activeNav' : 'nav myNav' }>{ t('nav_link_news') }</NavLink>
                </li>
                <li className="nav-item" >
                  <NavLink to="/about-us" className={({ isActive, isPending }) => isActive  ? 'nav myNav activeNav' : 'nav myNav' }>{ t('nav_link_about') }</NavLink>
                </li>
                <li className="nav-item" >
                  <NavLink to="/contact" className={({ isActive, isPending }) => isActive  ? 'nav myNav activeNav' : 'nav myNav' }>{ t('nav_link_contact') }</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />

      {/* <!--Footer--> */}
      <footer className="myFooter d-flex flex-column justify-content-end align-items-center">
        <img src="/assets/icons/logo.png" style={{ width: '100px' }} className="my-3" alt="logo" />
        <h6 className="text-white text-center">{ t('ministry') }</h6>
        <p className="text-white text-center">{ t('theatre_name') }</p>
        <p className="text-muted text-center">© 2023. { t('all_rights_reserved') }</p>
      </footer>
    </>
  )
};

export default Layout;