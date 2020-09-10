import {BaseTextFieldProps, TextField} from '@material-ui/core';
import clsx from 'clsx';
import React, {ChangeEvent, FC, FocusEvent} from 'react';
import {ValidateListValue, ValidateTextFieldRule} from '../../../interfaces/Common';
import {checkNotError} from '../../../utils/common';
import {useStyles} from './styles';

export interface CustomTextFieldProps extends BaseTextFieldProps {
    className?: string | undefined;
    name: string;
    label?: string;
    value: string;
    helperText?: string;
    validate?: boolean;
    onChangeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
    onErrorValidate?: (value: boolean) => void;
    validateRule?: ValidateTextFieldRule[];
    autoFocus?: boolean;
    type?: string;
    dataTestid?: string;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
    refValue?: any;
    autoComplete?: string;
    validateListValue?: ValidateListValue;
}

export const CustomTextField: FC<CustomTextFieldProps> = ({
    className,
    name,
    label,
    value = '',
    validate = false,
    validateRule = ['base'],
    helperText,
    onChangeHandler,
    type,
    autoFocus,
    dataTestid,
    onErrorValidate,
    onFocus,
    onBlur,
    refValue,
    autoComplete,
    validateListValue,
    ...otherProps
}) => {
    const classes = useStyles();
    const isError: boolean = validate && !checkNotError({...validateListValue, value}, validateRule);

    if (onErrorValidate) {
        onErrorValidate(isError);
    }

    return (
        <>
            <label>
                <TextField
                    className={clsx(className, classes.customTextField)}
                    error={isError}
                    helperText={isError && helperText}
                    name={name}
                    value={value}
                    variant="outlined"
                    required
                    type={type}
                    label={label}
                    autoFocus={autoFocus}
                    onChange={onChangeHandler}
                    data-testid={dataTestid}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    ref={refValue}
                    autoComplete={autoComplete}
                    {...otherProps}
                />
            </label>
        </>
    );
};
