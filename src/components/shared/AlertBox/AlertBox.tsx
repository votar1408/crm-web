import {Snackbar} from '@material-ui/core';
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';
import React, {FC, SyntheticEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AlertData} from '../../../interfaces/Common';
import {deleteAlertAction} from '../../../redux/app/actions';
import {selectApp} from '../../../redux/types';

const Alert = (props: AlertProps) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export const AlertBox: FC = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState<boolean>(false);
    const {alerts} = useSelector(selectApp);

    useEffect(() => {
        setOpen(true);
    }, [alerts]);

    if (!alerts) {
        return null;
    }

    const alert: AlertData | undefined = alerts.concat().shift();

    const handleClose = (event?: SyntheticEvent, reason?: string) => {
        dispatch(deleteAlertAction(null));
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    if (!alert) {
        return null;
    }

    return (
        <Snackbar
            open={open}
            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            autoHideDuration={3000}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity={alert.type}>
                {alert.title}
            </Alert>
        </Snackbar>
    );
};
