import React from 'react';
import { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import { PostList as PostListData } from '../Store/Post-list-Store';

const Post = ({ post }) => {
  const { deletepost } = useContext(PostListData);

  return (
    <div>
      <div className="card post-card" style={{ width: '30rem' }}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          <div className='Wrapper-tags'>
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletepost(post.id)}
            >
              <MdDelete />
            </span>
            {Array.isArray(post.tags) && post.tags.length > 0 ? (
              post.tags.map((tags, index) => (
                <span
                  key={index}
                  style={{ margin: '10px' }}
                  className="badge rounded-pill text-bg-primary hashtag"
                >
                  {tags}
                </span>
              ))
            ) : (
              <span>No tags available</span>
            )}
          </div>

          <div className="alert alert-success Reaction" role="alert">
            This post is reacted by {post.reactions} people.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
