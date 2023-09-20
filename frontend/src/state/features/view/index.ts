import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { viewPayload } from '../../../types';

export const viewSlice = createSlice({
    name: 'view',
    initialState: {
        page: 'home',
        language: 'FR',
        darkMode: true,
        articleTotalPages: 1,
        articlePage: 1
    },
    reducers: {
        updatePage: (state, action: PayloadAction<viewPayload>) => {
            if (action.payload.page !== undefined) {
                state.page = action.payload.page || state.page
            }
        },
        updateLanguage: (state, action: PayloadAction<viewPayload>) => {
            if (action.payload.language !== undefined) {
                state.language = action.payload.language || state.language
            }
        },
        updateTheme: (state, action: PayloadAction<viewPayload>) => {
            if (action.payload.dark !== undefined) {
                state.darkMode = action.payload.dark
            }
        },
        updateArticlePage: (state, action: PayloadAction<viewPayload>) => {
            if (action.payload.articlePage !== undefined) {
                state.articlePage = action.payload.articlePage
            }
        },
        updateArticleTotalPages: (state, action: PayloadAction<viewPayload>) => {
            if (action.payload.articleTotalPages !== undefined) {
                state.articleTotalPages = action.payload.articleTotalPages
            }
        },
    },
})

export const selectPage = (state: RootState) => state.view.page
export const selectLanguage = (state: RootState) => state.view.language
export const selectDarkMode = (state: RootState) => state.view.darkMode
export const selectArticlePage = (state: RootState) => state.view.articlePage
export const selectArticleTotalPages = (state: RootState) => state.view.articleTotalPages

export const {updatePage, updateLanguage, updateTheme, updateArticlePage, updateArticleTotalPages} = viewSlice.actions
export default viewSlice.reducer