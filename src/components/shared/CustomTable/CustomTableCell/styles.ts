import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white
        },
        body: {
            fontSize: 14,
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        }
    })
);
