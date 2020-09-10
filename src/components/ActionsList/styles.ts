import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        actionsList: {
            border: '1px solid rgba(0, 0, 0, 0.5)',
            flex: '1 1 20%',
            marginRight: theme.spacing(5),
            borderRadius: theme.spacing(0.5)
        },
        baseItem: {
            zIndex: 0
        },
        choosedItem: {
            transition: 'all 0.3s ease 0s',
            transform: 'scale(1.1)',
            background: theme.palette.secondary.main,
            position: 'relative',
            borderRadius: theme.spacing(0.5) - 1,
            zIndex: 1,
            '&:after': {
                right: -18,
                content: "' '",
                position: 'absolute',
                borderTop: '20px solid transparent',
                borderLeft: `20px solid ${theme.palette.secondary.main}`,
                borderBottom: '20px solid transparent'
            },
            '&:hover': {
                background: theme.palette.secondary.main
            }
        },
        choosedlistItemText: {
            color: theme.palette.secondary.contrastText
        }
    })
);
