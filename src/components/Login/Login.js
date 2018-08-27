import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            username: '',
            password: '',
        });
    }

    render() {
        return <div>
            <h1>Hello Login</h1>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input onChange={this.handleChange} name="username" id="username" type="text" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input onChange={this.handleChange} name="password" id="password" type="password" />
                </div>
                <input type="submit"/>
            </form>
        </div>
    }
}

export default Login;
