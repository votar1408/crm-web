import {DocumentNode, MutationFunctionOptions, useMutation} from '@apollo/client';
import {useCallback, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {AlertBoxType} from '../../../interfaces/Common';
import {GraphQLData} from '../../../interfaces/ServerData';
import {addAlertAction, loadingAction} from '../../../redux/app/actions';

export const useMutationGraphQL = (requestBody: DocumentNode): GraphQLData => {
    const [requestGraphQL, {loading, data, error}] = useMutation(requestBody);
    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            dispatch(addAlertAction({title: error.message, type: AlertBoxType.error}));
        }
    }, [dispatch, error]);

    const request = useCallback(
        (variables: MutationFunctionOptions<any, Record<string, any>> | undefined) => {
            requestGraphQL(variables);
        },
        [requestGraphQL]
    );

    useEffect(() => {
        dispatch(loadingAction(loading));
    }, [dispatch, loading]);

    return {request, data, error};
};
