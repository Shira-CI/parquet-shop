
export const SET_HERO_HEIGHT = 'SET_HERO_HEIGHT'

const initialState = {
    hero: 900,
}

export function visibilityReducer(state = initialState, action) {

    switch (action.type) {
        case SET_HERO_HEIGHT:
            return { ...state, hero: action.height }        
        default:
            return state
    }
}