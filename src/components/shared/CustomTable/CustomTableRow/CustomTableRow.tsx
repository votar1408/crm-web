import TableRow, {TableRowProps} from '@material-ui/core/TableRow';
import React, {FC, ReactNode} from 'react';
import {useStyles} from './styles';

interface CustomTableRow extends TableRowProps {
    children: ReactNode;
}

export const CustomTableRow: FC<CustomTableRow> = (props: CustomTableRow) => {
    const {children, ...otherProps} = props;
    const classes = useStyles();

    return (
        <TableRow className={classes.root} {...otherProps}>
            {children}
        </TableRow>
    );
};
