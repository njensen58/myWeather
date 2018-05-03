import React, { Component } from 'react';
import SignupForm from './SignupForm';


class AuthContainer extends Component {
    state = {
        user: {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [name]: value
            }
        }))
    }


    handleSubmit = (e) => {
        e.preventDefault();
    }


    render(){
        return (
            <div>
                <SignupForm
                    handleChange={this.handleChange}
                    username={this.state.user.username}
                    password={this.state.user.password}
                />
                <div>
                    <button>Submit</button>
                </div>
            </div>
        )
    }
}

export default AuthContainer;
