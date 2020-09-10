import TableCell, {TableCellProps} from '@material-ui/core/TableCell';
import React, {FC, ReactNode} from 'react';
import {useStyles} from './styles';

interface CustomTableCell extends TableCellProps {
    type: 'head' | 'body';
    children?: ReactNode;
}

export const CustomTableCell: FC<CustomTableCell> = (props: CustomTableCell) => {
    const {type, children, ...otherProps} = props;
    const classes = useStyles();

    return (
        <TableCell className={classes[type]} {...otherProps}>
            {children}
        </TableCell>
    );
};
