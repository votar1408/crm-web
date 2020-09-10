import React, {FC, lazy, Suspense} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Spinner} from '../components/shared/Spinner';
import {navigation} from '../consts';

const PagePlayers = lazy(() => import('./Players'));
const PageSummary = lazy(() => import('./Summary'));
const PageResets = lazy(() => import('./Resets'));
const PageBalanceUpdates = lazy(() => import('./BalanceUpdates'));

export const RoutePage: FC = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Switch>
                <Route path={navigation.url.players} component={PagePlayers} exact />
                <Route path={navigation.url.summary} component={PageSummary} exact />
                <Route path={navigation.url.resets} component={PageResets} exact />
                <Route path={navigation.url.balanceUpdates} component={PageBalanceUpdates} exact />
                <Redirect to={navigation.url.players} />
            </Switch>
        </Suspense>
    );
};
