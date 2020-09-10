import {Typography} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import React, {FC, ReactElement} from 'react';
import {useHistory} from 'react-router-dom';
import {texts} from '../../consts';
import {PlayersLocationState} from '../../interfaces/Common';
import {useStyles} from './styles';

export const PagePlayers: FC = () => {
    const classes = useStyles();
    const {location} = useHistory();

    const errorElement: ReactElement | null = (location.state as PlayersLocationState)?.notFoundPlayer ? (
        <div className={classes.errorBlock}>
            <FaceIcon />
            <Typography variant="caption" className={classes.errorText}>
                {texts.playerNotFound}
            </Typography>
        </div>
    ) : null;

    return <>{errorElement}</>;
};
