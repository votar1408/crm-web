import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            fontSize: '1rem',
            opacity: 1,
            color: 'white',
            '&:hover': {
                opacity: 0.8,
                color: 'white!important'
            }
        },
        active: {
            opacity: 1,
            color: 'white!important'
        },
        icon: {
            color: 'white!important'
        },
        visuallyHidden: {
            border: 0,
            clip: 'rect(0 0 0 0)',
            height: 1,
            margin: -1,
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            top: 20,
            width: 1
        }
    })
);
