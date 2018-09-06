import React, {Component} from 'react';

class AuthForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange({target}) {
        const {value, name} = target;

        this.setState({
            [name]: value
        });
    }

    onSubmit(event) {
        event.preventDefault();

        const {onSubmit} = this.props;
        onSubmit(this.state);
    }


    render() {
        const {email, password} = this.state;

        return (
            <form className={'col s6'} onSubmit={(event) => this.onSubmit(event)}>
                <div className={'input-field'}>
                    <input
                        value={email}
                        id={'email'}
                        name={'email'}
                        type={'text'}
                        onChange={event => this.handleChange(event)}
                    />
                    <label htmlFor={'email'}>Email</label>
                </div>

                <div className={'input-field'}>
                    <input
                        value={password}
                        id={'password'}
                        name={'password'}
                        type={'password'}
                        onChange={event => this.handleChange(event)}
                    />
                    <label htmlFor={'password'}>Password</label>
                </div>

                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                </button>
            </form>
        );
    }
}

export default AuthForm;