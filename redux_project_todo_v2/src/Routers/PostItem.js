import React from 'react';
import PostItemContainer from '../Components/Container/PostItemContainer';

const PostItemPage = ({ match }) => {
    const { id } = match.params;

    return (
        <PostItemContainer postId={parseInt(id, 10)} />
    )
}

export default PostItemPage;