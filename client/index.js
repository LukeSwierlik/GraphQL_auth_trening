import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {ApolloProvider} from 'react-apollo';
import { Route, Switch, HashRouter } from 'react-router-dom';
import routes from './routes/routes';
import Layout from "./container/Layout/Layout";


const cache = new InMemoryCache({
    dataIdFromObject: o => o.id
});

const client = new ApolloClient({
    uri: '/graphql',
    credentials: 'same-origin',
    cache
});

const Root = (
    <ApolloProvider client={client}>
        <HashRouter>
            <Layout>
                <Switch>
                    {routes.map((route, index) => (
                        <Route path={route.path} component={route.component} key={index} exact={route.exact} />
                    ))}
                </Switch>
            </Layout>
        </HashRouter>
    </ApolloProvider>
);

ReactDOM.render(Root, document.querySelector('#root'));
