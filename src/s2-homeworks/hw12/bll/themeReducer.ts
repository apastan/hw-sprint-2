export type Theme = 1 | 2 | 3

type ThemeState = {
    themeId: Theme
}

const initState: ThemeState = {
    themeId: 1,
}

type ThemeActions = ReturnType<typeof changeThemeId>

export const themeReducer = (state = initState, action: ThemeActions): ThemeState => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: Theme) => ({type: 'SET_THEME_ID', id}) as const
