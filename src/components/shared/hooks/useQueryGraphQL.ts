import {DocumentNode, QueryLazyOptions, useLazyQuery} from '@apollo/client';
import {useCallback, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {AlertBoxType} from '../../../interfaces/Common';
import {GraphQLData} from '../../../interfaces/ServerData';
import {addAlertAction, loadingAction} from '../../../redux/app/actions';

export const useQueryGraphQL = (requestBody: DocumentNode): GraphQLData => {
    const [requestGraphQL, {loading, data, error}] = useLazyQuery(requestBody);
    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            dispatch(addAlertAction({title: error.message, type: AlertBoxType.error}));
        }
    }, [dispatch, error]);

    const request = useCallback(
        (variables: QueryLazyOptions<Record<string, any>> | undefined) => {
            requestGraphQL(variables);
        },
        [requestGraphQL]
    );

    useEffect(() => {
        dispatch(loadingAction(loading));
    }, [dispatch, loading]);

    return {request, data, error};
};
