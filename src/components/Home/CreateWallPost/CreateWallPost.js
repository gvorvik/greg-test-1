import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const mapStateToProps = state => ({
    user: state.user.userReducer,
    wall: state.wall.wallReducer,
});

class CreateWallPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }


    handleSubmit = (e) => {
        e.preventDefault();
        let objToSend = {
            comment: this.state.comment,
            wall: this.props.wall.id,
        }
        const AuthStr = `${this.props.user.token_type} ${this.props.user.access_token}`;
        axios.post('https://devapi.careerprepped.com/discussion/wall_comment', objToSend, { 'headers': { 'Authorization': AuthStr } })
        .then(response => {
            console.log(response.data);
            let action = {
                type: "SET_COMMENT",
                payload: {
                    comment: response.data.comment
                }
            }
            this.props.dispatch(action);
            this.setState({comment: ''});
        })
        .catch(err => console.log(err))
    }

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="comment">Comment</label>
                <textarea value={this.state.comment} onChange={this.handleChange} name="comment" id="comment" type="textarea"/>
                <input type="submit"/>
            </form>
        </div>
    }
}

export default connect(mapStateToProps)(CreateWallPost);