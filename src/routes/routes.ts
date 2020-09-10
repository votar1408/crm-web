// const prefixServerUrl: string = 'https://platform';

// const hostReg: RegExpMatchArray | null = window.location.hostname.match('\\..+');
// const hostUrl: string = hostReg ? hostReg[0] : '.wizplaydev.com';

// const serverUrl: string = `${prefixServerUrl}${hostUrl}`;
const serverUrl: string = `http://localhost:3000`;

const graphqlPath: string = '/graphql';

interface Routes {
    [value: string]: string;
}

export const routes: Routes = {
    graphql: `${serverUrl}${graphqlPath}`
};
