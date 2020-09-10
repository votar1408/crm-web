import {Container} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import React, {FC, lazy, Suspense, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import '../../assets/scss/main.scss';
import {RoutePage} from '../../pages';
import {setPlayerInfoAction} from '../../redux/app/actions';
import {selectApp} from '../../redux/types';
import {Header} from '../Header';
import {useCookie} from '../shared/hooks';
import {Spinner} from '../shared/Spinner/Spinner';
import {useStyles} from './styles';

const ActionsList = lazy(() => import('../ActionsList'));
const AlertBox = lazy(() => import('../shared/AlertBox'));
const SearchPlayer = lazy(() => import('../SearchPlayer'));

export const App: FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {loading} = useSelector(selectApp);
    const {playerId} = useCookie();

    useEffect(() => {
        dispatch(setPlayerInfoAction({playerId}));
    }, [dispatch, playerId]);

    const spinner = loading ? <Spinner /> : null;

    return (
        <>
            <CssBaseline />
            <Header />
            <main className={classes.container}>
                <Suspense fallback={<Spinner />}>
                    <AlertBox />
                    <div className={classes.content}>
                        <Container className={classes.root} maxWidth="lg">
                            <SearchPlayer />
                            <div className={classes.actionsRoot}>
                                <ActionsList />
                                <RoutePage />
                            </div>
                        </Container>
                    </div>
                    {spinner}
                </Suspense>
            </main>
        </>
    );
};
