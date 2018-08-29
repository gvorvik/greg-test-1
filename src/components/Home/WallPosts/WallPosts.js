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
            <h2>{comment.comment}</h2>
        </div>
    });

    return (<div>
        <h1>{props.wall.post}</h1>
        <p>{props.wall.comment_count} Comments</p>
        {posts}
    </div>);
}

export default connect(mapStateToProps)(WallPosts);