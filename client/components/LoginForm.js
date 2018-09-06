import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import AuthForm from "./AuthForm";
import mutation from '../mutations/Login';
import query from '../queries/CurrentUser';

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            errors: []
        }
    }


    onSubmit({ email, password }){
        const { mutate } = this.props;

        mutate({
            variables: {
                email,
                password
            },
            refetchQueries: [{ query }]
        })
            .catch(res => {
                const errors = res.graphQLErrors.map(err => err.message);

                this.setState({
                    errors
                })
            });
    }

    render() {
        const { errors } = this.state;

        return (
            <div>
                <h1>Login</h1>

                <div className={'row'}>
                    <AuthForm onSubmit={(state) => this.onSubmit(state)}/>

                    <div className={'col s6'}>
                        {!!errors.length && (
                            <React.Fragment>
                                <h5>Errors:</h5>

                                <ul>
                                    {errors.map((err, index) => (
                                        <li key={index}>
                                            {err}
                                        </li>
                                    ))}
                                </ul>
                            </React.Fragment>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default graphql(mutation)(LoginForm);