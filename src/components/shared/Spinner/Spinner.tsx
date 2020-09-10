import React, {FC} from 'react';
import spinner from '../../../assets/svg/spinner.svg';
import {useStyles} from './styles';

export const Spinner: FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.spinner}>
                <img className={classes.image} src={spinner} alt="spinner" />
            </div>
        </div>
    );
};
