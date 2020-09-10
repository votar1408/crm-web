import {InMemoryCacheConfig} from '@apollo/client';

export default {
    typePolicies: {
        PlayerDetails: {
            keyFields: ['playerId']
        }
    }
} as InMemoryCacheConfig;
