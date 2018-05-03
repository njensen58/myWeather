import React from 'react';

const SignupForm = ({ handleChange, username, password }) => {
    return (
        <div>
            <input
                type="text"
                name="username"
                onChange={handleChange}
                value={username}
            />
            <input
                type="text"
                name="password"
                onChange={handleChange}
                value={password}
            />
        </div>
    )
}

export default SignupForm;
