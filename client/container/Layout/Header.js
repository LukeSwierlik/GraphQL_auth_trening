import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import query from '../../queries/CurrentUser';
import mutation from '../../mutations/Logout';

class Header extends React.Component {
    onLogoutClick() {
        const { mutate, history } = this.props;

        mutate({
            refetchQueries: [{query}]
        });

        history.push('/');
    };

    render() {
        const { loading, user } = this.props.data;

        if(loading) {
            return (
                <div>
                    Loading...
                </div>
            )
        }

        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Home</Link>

                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {user ? (
                            <li>
                                <a onClick={() => this.onLogoutClick()}>Logout</a>
                            </li>
                        ) : (
                            <React.Fragment>
                                <li>
                                    <Link to={'/signup'}>Register</Link>
                                </li>
                                <li>
                                    <Link to={'/login'}>Login</Link>
                                </li>
                            </React.Fragment>
                        )}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default compose(
    withRouter,
    graphql(query),
    graphql(mutation)
)(Header);
