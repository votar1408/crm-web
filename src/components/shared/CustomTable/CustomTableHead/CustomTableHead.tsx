import {TableSortLabel} from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, {FC, MouseEvent} from 'react';
import {CustomTableHeadCell, Order} from '../../../../interfaces/Table';
import {CustomTableCell} from '../CustomTableCell';
import {useStyles} from './styles';

interface CustormTableHeadProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
    order: Order;
    orderBy: string;
    headCells: CustomTableHeadCell[];
    disabledCells: number[];
}

export const CustomTableHead: FC<CustormTableHeadProps> = (props: CustormTableHeadProps) => {
    const classes = useStyles();
    const {order, orderBy, onRequestSort, headCells, disabledCells = []} = props;

    const createSortHandler = (property: string) => (event: MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };

    const checkDisable = (index: number): boolean => {
        return (disabledCells.find((cellIndex) => cellIndex === index) as number) >= 0 ? true : false;
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell, index) => (
                    <CustomTableCell
                        type="head"
                        key={headCell.id}
                        align={headCell.align}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            hideSortIcon={checkDisable(index)}
                            disabled={checkDisable(index)}
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                            classes={{
                                root: classes.root,
                                active: classes.active,
                                icon: classes.icon
                            }}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </CustomTableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};
