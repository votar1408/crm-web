import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        search: {
            backgroundColor: 'white',
            borderRadius: 20,
            border: '1px solid rgba(0, 0, 0, 0.5)',
            minWidth: 400,
            height: 36,
            padding: theme.spacing(0, 2),
            display: 'flex',
            alignItems: 'center'
        },
        searchIcon: {
            marginRight: theme.spacing(2),
            color: 'inherit'
        },
        searchInput: {
            flexGrow: 1,
            color: 'inherit',
            '& input::placeholder': {
                opacity: 1,
                color: 'inherit'
            }
        },
        searchButton: {
            marginRight: -18,
            borderRadius: '0 20px 20px 0'
        }
    })
);
