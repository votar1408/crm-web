import {List, ListItem, Typography} from '@material-ui/core';
import clsx from 'clsx';
import React, {FC, ReactElement, useCallback, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useHistory, useLocation} from 'react-router-dom';
import {navigation, texts} from '../../consts';
import {PlayersLocationState} from '../../interfaces/Common';
import {selectApp} from '../../redux/types';
import {getTextKey} from '../../utils/common';
import {useStyles} from './styles';

const actionsList: string[] = [
    texts.summary,
    texts.resets,
    texts.balanceUpdates,
    texts.statOverrides,
    texts.paymentHistory,
    texts.clientLogs
];

export const ActionsList: FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const [activePage, setAcivePage] = useState<number>(-1);
    const {playerInfo, loading} = useSelector(selectApp);

    useEffect(() => {
        setAcivePage(
            actionsList.findIndex((el: string) => {
                return location.pathname.split('/')[3] === getTextKey(el);
            })
        );
    }, [location]);

    const onClickActionListItemHandler = useCallback(
        (name: string, index: number) => {
            history.push(`${navigation.url.players}/${playerInfo.playerId}/${getTextKey(name)}`);
        },
        [history, playerInfo.playerId]
    );

    const listElements: ReactElement[] = actionsList.map((el: string, index: number) => {
        return (
            <li key={index}>
                <ListItem
                    className={clsx(classes.baseItem, {
                        [classes.choosedItem]: index === activePage
                    })}
                    button
                    onClick={() => onClickActionListItemHandler(el, index)}
                >
                    <Typography
                        variant="button"
                        className={clsx({
                            [classes.choosedlistItemText]: index === activePage
                        })}
                    >
                        {el}
                    </Typography>
                </ListItem>
            </li>
        );
    });

    const listElement: ReactElement | null =
        activePage >= 0 && !(location.state as PlayersLocationState)?.notFoundPlayer && !loading ? (
            <List className={classes.actionsList} disablePadding>
                {listElements}
            </List>
        ) : null;

    return <>{listElement}</>;
};
