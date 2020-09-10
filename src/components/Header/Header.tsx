import {AppBar, Toolbar, Typography} from '@material-ui/core';
import React, {FC, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {navigation, texts} from '../../consts';
import {deletePlayerInfoAction} from '../../redux/app/actions';
import {useStyles} from './styles';

export const Header: FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const onClickLogoHndler = useCallback(() => {
        dispatch(deletePlayerInfoAction(true));
        history.push(navigation.url.players);
    }, [dispatch, history]);

    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.root}>
                    <Typography variant="h6" className={classes.title} onClick={onClickLogoHndler}>
                        {texts.appName}
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};
