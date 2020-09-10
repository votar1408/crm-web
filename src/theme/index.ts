import {createMuiTheme, ThemeOptions} from '@material-ui/core';
import {PaletteOptions} from '@material-ui/core/styles/createPalette';
import {TypographyOptions} from '@material-ui/core/styles/createTypography';
import {Overrides} from '@material-ui/core/styles/overrides';
import overrides from './overrides';
import palette from './palette';
import typography from './typography';

interface IThemeOptions extends ThemeOptions {
    palette: PaletteOptions;
    typography: TypographyOptions;
    overrides: Overrides;
}

const baseTheme: IThemeOptions = {
    palette,
    typography,
    overrides
};

export const theme = createMuiTheme(baseTheme);
