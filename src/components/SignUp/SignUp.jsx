import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'


import * as ROUTES from '../../constants/Routes'

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            passwordOne: '',
            passwordTwo: '',
            error: null,
        }
    }

    onSubmit = event => {
        const { email, passwordOne } = this.state;
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    render() {
        const {
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;
        
        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '';
        return (
            <React.Fragment>
                <div className="container">
                    <div className="card">
                        <h1>SIGN UP</h1>
                        <form className='form-group' onSubmit={this.onSubmit}>
                            <input
                                className='form-control'
                                name="email"
                                value={email}
                                onChange={this.onChange}
                                type="text"
                                placeholder="Enter Email"
                            />
                            <input
                                className='form-control'
                                name="passwordOne"
                                value={passwordOne}
                                onChange={this.onChange}
                                type="password"
                                placeholder="Password"
                            />
                            <input 
                                className='form-control'
                                name="passwordTwo"
                                value={passwordTwo}
                                onChange={this.onChange}
                                type="password"
                                placeholder="Confirm Password"
                            />
                            <button type="submit" className='btn btn-primary' id="submit-btn" disabled={isInvalid}>SIGN UP</button>

                            {error && <p>{error.message}</p>}
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
)

export default SignUp;

export { SignUpLink };