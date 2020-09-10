import {BaseCSSProperties} from '@material-ui/core/styles/withStyles';

export interface StyleProps {
    root: BaseCSSProperties;
}

export type PropsClasses = Record<keyof StyleProps, string>;
