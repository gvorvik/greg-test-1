import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user.userReducer,
    wall: state.wall.wallReducer,
    wallComment: state.wall.wallComments,
});

const WallPosts = (props) => {
    let posts = props.wallComment.map((comment, i) => {
        return <div key={i}>
            <p>{comment.comment}</p>
        </div>
    });

    return (<div>
        <h1>{props.wall.post}</h1>
        {posts}
    </div>);
}

export default connect(mapStateToProps)(WallPosts);