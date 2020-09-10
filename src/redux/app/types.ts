import {AlertData} from '../../interfaces/Common';
import {PlayerSummaryServerInfo} from '../../interfaces/ServerData';

export const LOADING: string = 'LOADING';
export const ADD_ALERT: string = 'ADD_ALERT';
export const DELETE_ALERT: string = 'DELETE_ALERT';
export const SET_PLAYER_INFO: string = 'SET_PLAYER_INFO';
export const DELETE_PLAYER_INFO: string = 'DELETE_PLAYER_INFO';
export const GET_APPS: string = 'GET_APPS';

interface AppLoadingAction {
    type: typeof LOADING;
    payload: boolean;
}

interface AddAlertAction {
    type: typeof ADD_ALERT;
    payload: AlertData;
}

interface DeleteAlertAction {
    type: typeof DELETE_ALERT;
    payload?: string;
}

interface SetPlayerInfoAction {
    type: typeof SET_PLAYER_INFO;
    payload: PlayerSummaryServerInfo;
}

interface DeletePlayerInfoAction {
    type: typeof DELETE_PLAYER_INFO;
    payload: boolean;
}

export type AppAction =
    | AppLoadingAction
    | AddAlertAction
    | DeleteAlertAction
    | SetPlayerInfoAction
    | DeletePlayerInfoAction;

export interface AppState {
    loading: boolean;
    alerts: AlertData[];
    playerInfo: PlayerSummaryServerInfo;
}

export interface AppActionFunc<T> {
    (value: T): AppAction;
}
