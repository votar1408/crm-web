import {Button} from '@material-ui/core';
import {loader} from 'graphql.macro';
import React, {FC, ReactElement, useCallback, useMemo} from 'react';
import {useSelector} from 'react-redux';
import {texts} from '../../consts';
import {CellWithPosition, CustomTableBodyCell, CustomTableHeadCell} from '../../interfaces/Table';
import {selectApp} from '../../redux/types';
import {getTextKey} from '../../utils/common';
import {CustomTable} from '../shared/CustomTable/CustomTable';
import {useMutationGraphQL} from '../shared/hooks';
import {useStyles} from './styles';

interface ResetsTableRowDescription {
    text: string;
    func?: () => void;
}

interface ResetsTableCell extends CustomTableBodyCell {
    reset: ReactElement;
    description: CellWithPosition;
}

const headCells: CustomTableHeadCell[] = [
    {id: texts.reset, align: 'center', disablePadding: false, label: texts.reset},
    {id: texts.description, align: 'left', disablePadding: false, label: texts.description}
];

const ResetPlayerProfileMutation = loader('../../queries/mutation/ResetPlayerProfile.graphql');
const DeletePlayerProfileMutation = loader('../../queries/mutation/DeletePlayerProfile.graphql');

export const ResetsTable: FC = () => {
    const classes = useStyles();
    const {
        playerInfo: {playerId}
    } = useSelector(selectApp);
    const {request: requestReset} = useMutationGraphQL(ResetPlayerProfileMutation);
    const {request: requestDelete} = useMutationGraphQL(DeletePlayerProfileMutation);

    const onResetPlayerProfile = useCallback(() => {
        requestReset({variables: {playerId}});
    }, [playerId, requestReset]);

    const onDeletePlayerProfile = useCallback(() => {
        requestDelete({variables: {playerId}});
    }, [playerId, requestDelete]);

    const bodyDescriptions: ResetsTableRowDescription[] = useMemo(() => {
        return [
            {text: texts.playerProfileDescription, func: onResetPlayerProfile},
            {text: texts.payerStatusDescription},
            {text: texts.banPlayerDescription},
            {text: texts.deleteProfileDescription, func: onDeletePlayerProfile}
        ];
    }, [onDeletePlayerProfile, onResetPlayerProfile]);

    const bodyCells: ResetsTableCell[] = bodyDescriptions.map(({text, func}: ResetsTableRowDescription) => {
        const nameField: string = getTextKey(text);

        return {
            reset: (
                <Button
                    className={classes.button}
                    variant="contained"
                    color="secondary"
                    disabled={!func}
                    onClick={func}
                >
                    {texts[nameField.replace('Description', '')]}
                </Button>
            ),
            description: {
                value: text,
                align: 'left'
            }
        };
    });

    return (
        <CustomTable
            headCells={headCells}
            bodyCells={bodyCells}
            disabledColumn={[texts.resets, texts.description]}
            needPagination={false}
        ></CustomTable>
    );
};
