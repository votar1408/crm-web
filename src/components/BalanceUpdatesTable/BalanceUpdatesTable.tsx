import {Button} from '@material-ui/core';
import {loader} from 'graphql.macro';
import React, {ChangeEvent, FC, ReactElement, ReactNode, useCallback, useEffect, useMemo, useState} from 'react';
import {texts} from '../../consts';
import {CurrencyType} from '../../interfaces/Common';
import {CustomTableBodyCell, CustomTableHeadCell} from '../../interfaces/Table';
import {CustomTable} from '../shared/CustomTable/CustomTable';
import {CustomTextField} from '../shared/CustomTextField';
import {useCookie, useMutationGraphQL, useQueryGraphQL} from '../shared/hooks';
import {useStyles} from './styles';

type LevelType = 'level';

interface BalanceUpdatesTableRowDescription {
    value: string;
    text: string;
    name: string;
    actionElements: ReactNode;
}

interface BalanceUpdatesTableCell extends CustomTableBodyCell {
    attribute: string;
    currentValue: string;
    newValue: ReactElement;
    action: ReactNode;
}

interface CurrencyList {
    HC: string;
    MC: string;
}

interface BalanceUpdatesState {
    currentValue: CurrencyList;
    newValue: CurrencyList;
}

const headCells: CustomTableHeadCell[] = [
    {id: texts.attribute, align: 'center', disablePadding: false, label: texts.attribute},
    {id: texts.currectValue, align: 'center', disablePadding: false, label: texts.currectValue},
    {id: texts.newValue, align: 'center', disablePadding: false, label: texts.newValue},
    {id: texts.action, align: 'center', disablePadding: false, label: texts.action}
];

const defaultBalanceUpdatesState: BalanceUpdatesState = {
    currentValue: {
        HC: '-',
        MC: '-'
    },
    newValue: {
        HC: '0',
        MC: '0'
    }
};

const GetPlayerWallet = loader('../../queries/query/GetPlayerWallet.graphql');
const UpdatePlayerWallet = loader('../../queries/mutation/UpdatePlayerWallet.graphql');

export const BalanceUpdatesTable: FC = () => {
    const classes = useStyles();
    const {playerId} = useCookie();
    const [balanceState, setBalanceState] = useState<BalanceUpdatesState>(defaultBalanceUpdatesState);
    const {request, data} = useQueryGraphQL(GetPlayerWallet);
    const {request: requestUpdateWallet} = useMutationGraphQL(UpdatePlayerWallet);

    useEffect(() => {
        request({variables: {playerId}});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (data && data.getPlayer) {
            setBalanceState((prev: BalanceUpdatesState) => ({...prev, currentValue: {...data.getPlayer.wallet}}));
        }
    }, [data]);

    const onChangeInputValueHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        event.persist();

        const valueInput: string = event.target.value as string;
        const convertToFloat: number = parseFloat(valueInput);
        setBalanceState((prev: BalanceUpdatesState) => ({
            ...prev,
            newValue: {
                ...prev.newValue,
                [event.target.name as string]: valueInput
                    ? isNaN(convertToFloat)
                        ? valueInput
                        : convertToFloat.toString()
                    : ''
            }
        }));
    }, []);

    const onUpdateWalletHandler = useCallback(
        (currency: CurrencyType) => {
            requestUpdateWallet({
                variables: {
                    playerId: playerId,
                    walletParamsInput: {
                        [currency.toString()]: parseInt(balanceState.newValue[currency])
                    }
                }
            });
        },
        [balanceState.newValue, playerId, requestUpdateWallet]
    );

    const bodyDescriptions: BalanceUpdatesTableRowDescription[] = useMemo(() => {
        return [
            {
                text: texts.level,
                value: '-',
                name: 'level',
                actionElements: (
                    <Button className={classes.button} variant="contained" color="secondary" disabled>
                        {texts.update}
                    </Button>
                )
            },
            {
                text: texts.credits,
                value: balanceState.currentValue.HC,
                name: 'HC',
                actionElements: (
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                        onClick={() => onUpdateWalletHandler('HC')}
                    >
                        {texts.update}
                    </Button>
                )
            },
            {
                text: texts.pinataChips,
                value: balanceState.currentValue.MC,
                name: 'MC',
                actionElements: (
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                        onClick={() => onUpdateWalletHandler('MC')}
                    >
                        {texts.update}
                    </Button>
                )
            }
        ];
    }, [balanceState.currentValue.HC, balanceState.currentValue.MC, classes.button, onUpdateWalletHandler]);

    const bodyCells: BalanceUpdatesTableCell[] = useMemo(() => {
        return bodyDescriptions.map(({value, text, name, actionElements}: BalanceUpdatesTableRowDescription) => {
            return {
                attribute: text,
                currentValue: value,
                newValue: (
                    <CustomTextField
                        disabled={value === '-'}
                        name={name}
                        autoComplete="off"
                        value={balanceState.newValue[name]}
                        className={classes.textField}
                        onChangeHandler={onChangeInputValueHandler}
                    />
                ),
                action: actionElements
            };
        });
    }, [balanceState.newValue, bodyDescriptions, classes.textField, onChangeInputValueHandler]);

    return (
        <>
            <CustomTable
                headCells={headCells}
                bodyCells={bodyCells}
                disabledColumn={[texts.resets, texts.description]}
                needPagination={false}
            ></CustomTable>
        </>
    );
};
