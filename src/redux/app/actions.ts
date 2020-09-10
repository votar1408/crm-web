import {AlertData} from '../../interfaces/Common';
import {PlayerSummaryServerInfo} from '../../interfaces/ServerData';
import {ADD_ALERT, AppAction, AppActionFunc, DELETE_ALERT, DELETE_PLAYER_INFO, LOADING, SET_PLAYER_INFO} from './types';

export const loadingAction: AppActionFunc<boolean> = (value: boolean): AppAction => {
    return {
        type: LOADING,
        payload: value
    };
};

export const addAlertAction: AppActionFunc<AlertData> = (value: AlertData): AppAction => {
    return {
        type: ADD_ALERT,
        payload: value
    };
};

export const deleteAlertAction: AppActionFunc<null> = (): AppAction => {
    return {
        type: DELETE_ALERT
    };
};

export const setPlayerInfoAction: AppActionFunc<PlayerSummaryServerInfo> = (
    value: PlayerSummaryServerInfo
): AppAction => {
    return {
        type: SET_PLAYER_INFO,
        payload: value
    };
};

export const deletePlayerInfoAction: AppActionFunc<boolean> = (): AppAction => {
    return {
        type: DELETE_PLAYER_INFO
    };
};
