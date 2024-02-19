import React, { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addpostList: () => {},
  addinitialpost: () => {},
  deletepost: () => {},
});

const postListReducer = (currentpostList, action) => {
  let nePostList = currentpostList;

  if (action.type === "Delete_post") {
    nePostList = currentpostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "initial_post") {
    nePostList = action.payload.posts;
    
  } else if (action.type === "Add_Post") {
    nePostList = [action.payload, ...currentpostList];
  }
  return nePostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostlist] = useReducer(postListReducer, []);

  const addpostList = (userId, PostTittle, postbody, postReaction, tags) => {
    dispatchPostlist({
      type: "Add_Post",
      payload: {
        id: Date.now(),
        title: PostTittle,
        body: postbody,
        reaction: postReaction,
        userid: userId,
        tag: tags,
      },
    });
  };

  const addinitialpost = (posts) => {
    dispatchPostlist({
      type: "initial_post",
      payload: {
        posts,
      },
    });
  };

  const deletepost = (postId) => {
    dispatchPostlist({
      type: "Delete_post",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postList, addpostList, addinitialpost,deletepost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
