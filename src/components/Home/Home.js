import React, {Component} from 'react';
import axios from 'axios';

import WallPosts from './WallPosts/WallPosts';
import CreateWallPost from './CreateWallPost/CreateWallPost';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
        }
    }

    componentDidMount() {
        // this.logIt();
    }

    logIt = () => {
        let data = {
        client_id: "careerprepped",
        grant_type: "password",
        email: "ucap.ops.manager@gmail.com",
        password: "testpass"
        };
        axios({
            method: 'POST',
            url: 'https://devapi.careerprepped.com/oauth',
            data,
        })
        .then(response => {
            console.log(response.data);
            this.setState({
                token: response.data
            });
        })
        .catch(err => console.log(err));
    }

    getWallPosts = () => {
        console.log('Get Wall Posts Ran');
        const AuthStr = `${this.state.token.token_type} ${this.state.token.access_token}`;
        axios.get('https://devapi.careerprepped.com/discussion/wall', { 'headers': { 'Authorization': AuthStr } })
        .then(response => console.log(response.data))
        .catch(err => console.log(err))
    }

    render() {
    return<div>
        <h1>Hello Home</h1>
        <button onClick={this.getWallPosts}>Get Wall Posts</button>
        <WallPosts />
        <CreateWallPost />
    </div>
    }
}

export default Home;