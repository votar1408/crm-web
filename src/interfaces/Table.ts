import {ReactElement} from 'react';

export type Order = 'asc' | 'desc';
export type CustomAlign = 'left' | 'right' | 'center';

interface TableCell {
    align?: CustomAlign;
}

export interface CustomTableHeadCell extends TableCell {
    disablePadding: boolean;
    id: string;
    label: string;
}

export interface CustomTableProps {
    title?: string;
    bodyCells?: CustomTableBodyCell[];
    headCells: CustomTableHeadCell[];
    orderBy?: string;
    ignoreCells?: string[] | null;
    disabledColumn?: string[] | null;
    children?: ReactElement;
    needPagination?: boolean;
}

export interface CustomTableBodyCell {}

export interface CellWithPosition {
    align: CustomAlign;
    value: string;
}

export interface SummaryTableCell extends CustomTableBodyCell {
    date: string;
    value: string;
}
