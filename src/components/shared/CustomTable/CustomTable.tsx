import {TablePagination, Typography} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import React, {ChangeEvent, FC, memo, MouseEvent, ReactElement, useState} from 'react';
import {texts} from '../../../consts';
import {CustomTableBodyCell, CustomTableProps, Order} from '../../../interfaces/Table';
import {CustomTableCell} from './CustomTableCell';
import {CustomTableHead} from './CustomTableHead';
import {CustomTableRow} from './CustomTableRow';
import {useStyles} from './styles';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
): (a: {[key in Key]: number | string}, b: {[key in Key]: number | string}) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: any, comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el: any, index: number) => [el, index] as [T, number]);
    stabilizedThis.sort((a: any, b: any) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el: any) => el[0]);
}

const heightRow: number = 20;

export const CustomTable: FC<CustomTableProps> = memo(
    ({
        title,
        children,
        headCells,
        orderBy,
        bodyCells = [],
        ignoreCells = null,
        needPagination = true,
        disabledColumn = null
    }: CustomTableProps) => {
        const classes = useStyles();
        const [order, setOrder] = useState<Order>('asc');
        const [orderByValue, setOrderByValue] = useState<string>(orderBy as string);
        const [orderDefault] = useState<string>(orderBy as string);
        const [page, setPage] = useState<number>(0);
        const [rowsPerPage, setRowsPerPage] = useState<number>(5);

        const handleRequestSort = (event: MouseEvent<unknown>, property: string) => {
            const isAsc: boolean = orderByValue === property && order === 'asc';
            const isDedaultOrder: boolean = orderByValue === property && order === 'desc';

            setOrder(isAsc ? 'desc' : 'asc');
            setOrderByValue(isDedaultOrder ? orderDefault : property);
        };

        const onChangePageHandler = (event: unknown, newPage: number) => {
            setPage(newPage);
        };

        const onChangeRowsPerPageHandler = (event: ChangeEvent<HTMLInputElement>) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
        };

        const getCellsPerRow = (row: CustomTableBodyCell): ReactElement[] => {
            const cells: ReactElement[] = [];
            for (const [key, data] of Object.entries(row)) {
                let findKey: boolean = false;
                const {value, align} = data;
                if (ignoreCells) {
                    findKey = ignoreCells.some((el: string) => el === key);
                }

                if (!findKey) {
                    const tempCell: ReactElement = (
                        <CustomTableCell key={key} type="body" align={align ? align : 'center'}>
                            {value ? value : data}
                        </CustomTableCell>
                    );
                    cells.push(tempCell);
                }
            }

            return cells;
        };

        const emptyRows: number = rowsPerPage - Math.min(rowsPerPage, bodyCells.length - page * rowsPerPage);
        const emptyDataText: ReactElement | null =
            bodyCells.length <= 0 ? <Typography className={classes.emptyData}>{texts.emptyList}</Typography> : null;
        const updatedDisabledColumn: number[] =
            bodyCells.length <= 0 || disabledColumn ? headCells.map((el, index) => index) : [headCells?.length - 1];
        const orderByCheck: string = bodyCells.length <= 0 ? '' : orderByValue;
        const paginationElement =
            needPagination && bodyCells.length > 0 ? (
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={bodyCells.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={onChangePageHandler}
                    onChangeRowsPerPage={onChangeRowsPerPageHandler}
                />
            ) : null;

        const withPaginationElements: ReactElement[] = [
            stableSort(bodyCells, getComparator(order, orderByValue))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: CustomTableBodyCell, index: number) => {
                    return (
                        <CustomTableRow style={{height: heightRow}} tabIndex={-1} key={index}>
                            {getCellsPerRow(row)}
                        </CustomTableRow>
                    );
                }),
            !emptyDataText && emptyRows > 0 && (
                <CustomTableRow style={{height: heightRow * emptyRows}}>
                    <CustomTableCell type="body" colSpan={headCells.length}></CustomTableCell>
                </CustomTableRow>
            )
        ];

        return (
            <TableContainer className={classes.container} component={Paper}>
                {title && (
                    <Typography className={classes.title} variant="h1" component="h2">
                        {title}
                    </Typography>
                )}
                {children}
                <Table className={classes.table} stickyHeader aria-label="customized table">
                    <CustomTableHead
                        disabledCells={updatedDisabledColumn}
                        headCells={headCells}
                        order={order}
                        orderBy={orderByCheck}
                        onRequestSort={handleRequestSort}
                    />
                    {bodyCells && (
                        <TableBody>
                            {needPagination
                                ? withPaginationElements
                                : bodyCells.map((row: CustomTableBodyCell, index: number) => {
                                      return (
                                          <CustomTableRow style={{height: heightRow}} tabIndex={-1} key={index}>
                                              {getCellsPerRow(row)}
                                          </CustomTableRow>
                                      );
                                  })}
                        </TableBody>
                    )}
                </Table>
                {emptyDataText}
                {paginationElement}
            </TableContainer>
        );
    }
);
