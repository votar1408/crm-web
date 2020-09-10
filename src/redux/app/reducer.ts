import {PlayerSummaryServerInfo} from '../../interfaces/ServerData';
import {ADD_ALERT, AppAction, AppState, DELETE_ALERT, DELETE_PLAYER_INFO, LOADING, SET_PLAYER_INFO} from './types';

const initialState: AppState = {
    loading: false,
    alerts: [],
    playerInfo: {}
};

export const appReducer = (state: AppState = initialState, action: AppAction): AppState => {
    switch (action.type) {
        case LOADING:
            return {...state, loading: action.payload} as AppState;
        case ADD_ALERT:
            return {...state, alerts: [...state.alerts, action.payload]} as AppState;
        case DELETE_ALERT:
            return {...state, alerts: [...state.alerts.slice(1)]} as AppState;
        case SET_PLAYER_INFO:
            return {
                ...state,
                playerInfo: {...state.playerInfo, ...(action.payload as PlayerSummaryServerInfo)}
            } as AppState;
        case DELETE_PLAYER_INFO:
            return {
                ...state,
                playerInfo: {}
            } as AppState;
        default:
            return state;
    }
};
