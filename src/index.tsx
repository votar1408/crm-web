import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {ThemeProvider} from '@material-ui/core';
import React, {FC} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {App} from './components/App';
import {ErrorBoundary} from './components/shared/ErrorBoundary';
import graphqlCashConfig from './graphqlCashConfig';
import {store} from './redux/store';
import {routes} from './routes';
import * as serviceWorker from './serviceWorker';
import {theme} from './theme';

const WrappedApp: FC = () => {
    const client = new ApolloClient({
        uri: routes.graphql,
        cache: new InMemoryCache(graphqlCashConfig)
    });

    return (
        <Provider store={store}>
            <ApolloProvider client={client}>
                <ErrorBoundary>
                    <ThemeProvider theme={theme}>
                        <Router>
                            <App />
                        </Router>
                    </ThemeProvider>
                </ErrorBoundary>
            </ApolloProvider>
        </Provider>
    );
};

ReactDOM.render(<WrappedApp />, document.getElementById('root'));

serviceWorker.unregister();
