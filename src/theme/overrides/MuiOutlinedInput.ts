import palette from '../palette';

export default {
    root: {
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
            borderColor: palette.secondary.dark,
            borderWidth: 1
        },
        '&$focused $notchedOutline': {
            borderColor: palette.secondary.main,
            borderWidth: 1
        }
    }
};
