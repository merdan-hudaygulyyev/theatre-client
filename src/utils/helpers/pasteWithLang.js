import Cookies from 'js-cookie'

export const paste = (values) => {
    var lang = Cookies.get("i18next") || 'tm'
    if(lang === 'tm') return values[0]
    else if(lang === 'ru') return values[1]
    else if(lang === 'en') return values[2]
}

// export default paste
