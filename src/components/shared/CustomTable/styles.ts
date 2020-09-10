import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            maxHeight: 794,
            border: '1px solid rgba(0, 0, 0, 0.5)',
            boxShadow: 'none',
            borderRadius: theme.spacing(0.5)
        },
        table: {
            minWidth: 700,
            tableLayout: 'fixed'
        },
        title: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.5rem',
            marginTop: theme.spacing(2)
        },
        emptyData: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.5rem',
            margin: theme.spacing(2)
        }
    })
);
