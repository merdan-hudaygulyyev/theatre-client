import { BrowserRouter, Routes, Route } from "react-router-dom"

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import 'font-awesome/css/font-awesome.min.css'
import "@popperjs/core"

import Layout from "./Layout"
import Home from './pages/Home'
import Spectacles from './pages/Spectacles'
import Contact from './pages/Contact'
import News from './pages/News'
import Artists from './pages/Artists'
import NoPage from './pages/NoPage'
import Artist from "./pages/Artist"
import New from "./pages/New"
import Repertoire from "./pages/Repertoire"
import Spectacle from "./pages/Spectacle"
import Booking from './pages/Booking'

import { useTranslation } from "react-i18next"
import { changeLanguage } from "./redux/reducers/languageSlice"
import { useDispatch } from 'react-redux'
import About from "./pages/About"
import Login from "./pages/Login/Login"

function App() {
  const { i18n } = useTranslation()
  const dispatch = useDispatch()

  const changeLanguagee = (language) => {
    dispatch(changeLanguage(language))
    i18n.changeLanguage(language)
  }

  return (
    <div className="body">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout changeLanguage={changeLanguagee} />}>
          <Route index element={<Home />} />
          <Route path="spectacles" element={<Spectacles />} />
          <Route path="spectacles/:id" element={<Spectacle />} />
          <Route path="repertoire" element={<Repertoire />} />
          <Route path="artists" element={<Artists />} />
          <Route path="artists/:id" element={<Artist />} />
          <Route path="news" element={<News />} />
          <Route path="login" element={<Login />} />
          <Route path="news/:id" element={<New />} />
          <Route path="about-us" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="booking/:id" element={<Booking />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
