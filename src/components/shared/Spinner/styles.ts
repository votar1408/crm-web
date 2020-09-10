import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            '& > * + *': {
                marginLeft: theme.spacing(2)
            },
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.2)',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1301
        },
        spinner: {
            width: '100px'
        },
        image: {
            maxWidth: '100%'
        }
    })
);
