import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        errorText: {
            marginLeft: theme.spacing(1),
            fontSize: 18
        },
        errorBlock: {
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1
        }
    })
);
