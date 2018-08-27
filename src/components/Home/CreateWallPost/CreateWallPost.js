import React, {Component} from 'react';

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
        this.setState({comment: ''});
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

export default CreateWallPost;