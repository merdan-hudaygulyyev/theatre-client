import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    lang: Cookies.get("i18next") || 'tm',
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeLanguage } = languageSlice.actions

export default languageSlice.reducer