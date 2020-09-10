const serverUrl: string = `http://localhost:3000`;

const graphqlPath: string = '/graphql';

interface Routes {
    [value: string]: string;
}

export const routes: Routes = {
    graphql: `${serverUrl}${graphqlPath}`
};
