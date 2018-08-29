import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import WallPosts from './WallPosts/WallPosts';
import CreateWallPost from './CreateWallPost/CreateWallPost';


const mapStateToProps = state => ({
    user: state.user.userReducer,
    wall: state.wall.wallReducer,
});

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.getWall();
    }

    getWall = () => {
        const AuthStr = `${this.props.user.token_type} ${this.props.user.access_token}`;
        axios.get(`https://devapi.careerprepped.com/discussion/wall/9c368920-aa3b-11e8-bbe4-06586b502edc`, { 'headers': { 'Authorization': AuthStr} })
        .then(response => {
            console.log(response);
            let action = {
                type: 'SET_WALL',
                payload: response.data,
            }
            this.props.dispatch(action);
        })
        .catch(err => console.log(err))
    }

    render() {
    return<div>
        <WallPosts />
        <CreateWallPost />
    </div>
    }
}

export default connect(mapStateToProps)(Home);