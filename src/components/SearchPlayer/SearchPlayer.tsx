import {Button, Input} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, {ChangeEvent, FC, useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {navigation, texts} from '../../consts';
import {deletePlayerInfoAction} from '../../redux/app/actions';
import {useCookie} from '../shared/hooks';
import {useStyles} from './styles';

interface SearchPlayerState {
    searchValue: string;
}

const defaultState: SearchPlayerState = {
    searchValue: 'Bt1EdTdctPOzZL71'
};

export const SearchPlayer: FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const {saveCookie} = useCookie();
    const [searchPlayerState, setSearchPlayerState] = useState<SearchPlayerState>(defaultState);

    const onSearchChangeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setSearchPlayerState((prev: SearchPlayerState) => ({...prev, searchValue: event.target.value}));
    }, []);

    const onSearchPlayerHandler = useCallback(() => {
        saveCookie({playerId: searchPlayerState.searchValue});
        dispatch(deletePlayerInfoAction(true));
        history.push(`${navigation.url.players}/${searchPlayerState.searchValue}${navigation.summaryPath}`);
    }, [dispatch, history, saveCookie, searchPlayerState.searchValue]);

    return (
        <div className={classes.search}>
            <SearchIcon className={classes.searchIcon} />
            <label className={classes.searchInput}>
                <Input
                    disableUnderline
                    onChange={onSearchChangeHandler}
                    placeholder={texts.enterPlayerId}
                    value={searchPlayerState.searchValue}
                />
            </label>
            <Button
                className={classes.searchButton}
                variant="contained"
                color="secondary"
                onClick={onSearchPlayerHandler}
            >
                {texts.search}
            </Button>
        </div>
    );
};
