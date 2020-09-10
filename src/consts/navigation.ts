export const playersPath: string = '/player';
export const playerPath: string = '/:id';
export const summaryPath: string = '/summary';
export const resetsPath: string = '/resets';
export const balanceUpdatesPath: string = '/balanceUpdates';
export const statOverridesPath: string = '/statOverrides';
export const paymentHistoryPath: string = '/paymentHistory';
export const clientLogsPath: string = '/clientLogs';

export const url = {
    home: '/',
    players: playersPath,
    summary: `${playersPath}${playerPath}${summaryPath}`,
    resets: `${playersPath}${playerPath}${resetsPath}`,
    balanceUpdates: `${playersPath}${playerPath}${balanceUpdatesPath}`,
    statOverrides: `${playersPath}${playerPath}${statOverridesPath}`,
    paymentHistory: `${playersPath}${playerPath}${paymentHistoryPath}`,
    clientLogs: `${playersPath}${playerPath}${clientLogsPath}`
};
