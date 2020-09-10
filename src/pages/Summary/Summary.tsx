import {loader} from 'graphql.macro';
import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useCookie, useQueryGraphQL} from '../../components/shared/hooks';
import {SummaryTable} from '../../components/SummaryTable';
import {navigation, texts} from '../../consts';
import {addAlertAction, setPlayerInfoAction} from '../../redux/app/actions';
import {selectApp} from '../../redux/types';

const GetPlayerQuery = loader('../../queries/query/GetPlayer.graphql');

export const PageSummary: FC = () => {
    const {playerId} = useCookie();
    const dispatch = useDispatch();
    const history = useHistory();
    const {loading} = useSelector(selectApp);
    const {request, data, error} = useQueryGraphQL(GetPlayerQuery);

    useEffect(() => {
        request({variables: {playerId}});
    }, [playerId, request]);

    useEffect(() => {
        if (data && data.getPlayer) {
            dispatch(setPlayerInfoAction({...data.getPlayer}));
            dispatch(addAlertAction({title: texts.playerSuccessLoaded}));
            history.push(`${navigation.url.players}/${data.getPlayer.playerId}${navigation.summaryPath}`);
        }
    }, [data, dispatch, history]);

    useEffect(() => {
        if (error) {
            history.push({
                pathname: `${navigation.url.players}`,
                state: {notFoundPlayer: true}
            });
        }
    }, [error, history]);

    return loading ? null : <SummaryTable />;
};
