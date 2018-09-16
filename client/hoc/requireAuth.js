import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import currentUserQuery from '../queries/CurrentUser';

export default (WrappedComponent) => {
    class RequireAuth extends React.Component {
        componentWillUpdate(nextProps) {
            const { history } = this.props;
            const { data } = nextProps;

            if(!data.user && !data.loading) {
                history.push('/login');
            }
        }

        render() {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }

    return compose(
        graphql(currentUserQuery),
        withRouter
    )(RequireAuth);
}
