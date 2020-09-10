import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {texts} from '../../consts';
import {CustomTableHeadCell, SummaryTableCell} from '../../interfaces/Table';
import {selectApp} from '../../redux/types';
import {getTextKey} from '../../utils/common';
import {CustomTable} from '../shared/CustomTable/CustomTable';

const headCells: CustomTableHeadCell[] = [
    {id: 'data', align: 'center', disablePadding: false, label: texts.data},
    {id: 'value', align: 'center', disablePadding: false, label: texts.value}
];

const bodyNames: string[] = [
    texts.playerName,
    texts.countryCode,
    texts.region,
    texts.installDate,
    texts.lastLoginDate,
    texts.OS,
    texts.deviceId,
    texts.currentDeviceModel,
    texts.clientVersion
];

export const SummaryTable: FC = () => {
    const {playerInfo} = useSelector(selectApp);

    const bodyCells: SummaryTableCell[] = bodyNames.map((name: string) => {
        const nameField: string = getTextKey(name);

        return {
            date: name,
            value: playerInfo[nameField] ? playerInfo[nameField] : '-'
        };
    });

    return (
        <CustomTable
            headCells={headCells}
            bodyCells={bodyCells}
            disabledColumn={['data, value']}
            needPagination={false}
        ></CustomTable>
    );
};
