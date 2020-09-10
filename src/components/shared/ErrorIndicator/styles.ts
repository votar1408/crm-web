import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            '& > * + *': {
                marginLeft: theme.spacing(2)
            },
            flexDirection: 'column',
            alignItems: 'center'
        },
        icon: {
            width: '100px',
            height: '100px',
            color: theme.palette.primary.main
        }
    })
);
