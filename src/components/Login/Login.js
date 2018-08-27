import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: 'ucap.ops.manager@gmail.com',
            password: 'testpass',
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitLoginInfo = (e) => {
        e.preventDefault();
        let data = {
            client_id: "careerprepped",
            grant_type: "password",
            email: this.state.userEmail,
            password: this.state.password
            };
            axios({
                method: 'POST',
                url: 'https://devapi.careerprepped.com/oauth',
                data,
            })
            .then(response => {
                this.props.dispatch({
                    type: 'USER_INFO',
                    payload: response.data
                });
                this.setState({
                    userEmail: '',
                    password: '',
                });
                this.props.history.push('/home');
            })
            .catch(err => console.log(err));
    }

    render() {
        return <div>
            <h1>Login</h1>
            <form onSubmit={this.submitLoginInfo}>
                <div>
                    <label htmlFor="username">Email</label>
                    <input value={this.state.userEmail} onChange={this.handleChange} name="userEmail" id="userEmail" type="text" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input value={this.state.password} onChange={this.handleChange} name="password" id="password" type="password" />
                </div>
                <input type="submit"/>
            </form>
        </div>
    }
}

export default connect()(Login);
