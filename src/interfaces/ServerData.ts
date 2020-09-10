import {ApolloError, QueryLazyOptions} from '@apollo/client';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
export type ResponseType = 'json' | 'blob' | 'none';

export interface OtherParamsHttpData {
    typeRequest?: ResponseType;
    typeResponse?: ResponseType;
}

export interface HttpData {
    loading: boolean;
    request: (url: string, method: HttpMethod, body?: any, headers?: any, otherParams?: OtherParamsHttpData) => any;
    error: string | null;
    clearError: () => void;
    controller: AbortController;
}

export interface HttpFunc {
    (): HttpData;
}

export interface GraphQLData {
    request: (variables: QueryLazyOptions<Record<string, any>> | undefined) => void;
    data: any;
    error: ApolloError | undefined;
}

export interface PlayerSummaryServerInfo {
    playerId?: string;
    playerName?: string;
    countryCode?: string;
    region?: string;
    installDate?: string;
    lastLoginDate?: string;
    OS?: string;
    deviceId?: string;
    currentDeviceModel?: string;
    clientVersion?: string;
}
