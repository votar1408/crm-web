import React, {FC} from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

import {texts} from '../../../consts';
import {useStyles} from './styles';

export const ErrorIndicator: FC = () => {
    const classes = useStyles();
    const {errorIndicator1, errorIndicator2, errorIndicator3} = texts;

    return (
        <div className={classes.root}>
            <ErrorOutlineIcon className={classes.icon} />
            <span>{errorIndicator1}</span>
            <span>{errorIndicator2}</span>
            <span>{errorIndicator3}</span>
        </div>
    );
};
