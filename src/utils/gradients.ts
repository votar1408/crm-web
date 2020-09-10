import {colors} from '@material-ui/core';

const buildGradient = (start: string, end: string) => `linear-gradient(180deg, ${start} 0%, ${end} 100%)`;

const grey: string = buildGradient(colors.grey[400], colors.grey[600]);
const blue: string = buildGradient(colors.blue[700], colors.blue[900]);
const indigo: string = buildGradient(colors.indigo[400], colors.indigo[600]);
const green: string = buildGradient(colors.green[400], colors.green[600]);
const orange: string = buildGradient(colors.orange[400], colors.orange[700]);
const red: string = buildGradient(colors.red[500], colors.red[700]);

export default {
    grey,
    blue,
    indigo,
    green,
    orange,
    red
};
