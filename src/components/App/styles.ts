import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            minHeight: '100vh',
            display: 'flex',
            '@media all and (-ms-high-contrast:none)': {
                height: 0 // IE11 fix
            }
        },
        content: {
            flexGrow: 1,
            maxWidth: '100%',
            overflowX: 'hidden',
            paddingTop: 64,
            [theme.breakpoints.down('xs')]: {
                paddingTop: 56
            }
        },
        root: {
            position: 'relative',
            background: '#fafafa',
            height: '100%',
            borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
            borderRight: '1px solid rgba(0, 0, 0, 0.3)',
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        actionsRoot: {
            width: '100%',
            height: '100%',
            paddingTop: theme.spacing(5),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start'
        }
    })
);
