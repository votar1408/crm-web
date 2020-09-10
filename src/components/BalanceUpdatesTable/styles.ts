import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            minWidth: 150
        },
        textField: {
            width: '120px'
        }
    })
);
