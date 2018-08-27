import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import WallPosts from './WallPosts/WallPosts';
import CreateWallPost from './CreateWallPost/CreateWallPost';


const mapStateToProps = state => ({
    user: state.user.userReducer,
});

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getWallPosts = () => {
        console.log('Get Wall Posts Ran', this.props.user.access_token);
        const AuthStr = `${this.props.user.token_type} ${this.props.user.access_token}`;
        axios.get(`https://devapi.careerprepped.com/discussion/wall_comment`, { 'headers': { 'Authorization': AuthStr } })
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

export default connect(mapStateToProps)(Home);