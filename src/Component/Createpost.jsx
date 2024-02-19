import React, { useContext, useRef } from "react";
import { PostList as PostListData } from "../Store/Post-list-Store";
import { useNavigate } from "react-router-dom";

const Createpost = () => {

const navigate= useNavigate()
  const { addpostList } = useContext(PostListData);

  const userIdElement = useRef();
  const usertitleElement = useRef();
  const userbodyElement = useRef();
  const userreactionElement = useRef();
  const usertagsElement = useRef();

  const HandelSubmit = (event) => {
    event.preventDefault();

    const userId = userIdElement.current.value;
    const PostTittle = usertitleElement.current.value;
    const postbody = userbodyElement.current.value;
    const postReaction = userreactionElement.current.value;
    const tags = usertagsElement.current.value.split(" ");

    if (userId && PostTittle && postbody && postReaction && tags.length > 0) {
      // alert("Post is created ");
      addpostList(userId, PostTittle, postbody, postReaction, tags);
    } else {
      alert("Please fill all the filed");
    }

    userIdElement.current.value = "";
    usertitleElement.current.value = "";
    userbodyElement.current.value = "";
    userreactionElement.current.value = "";
    usertagsElement.current.value = "";

    addpostList(userId, PostTittle, postbody, postReaction, tags);
    navigate('/')
  };

  return (
    <>
      <form className="crate-post" onSubmit={HandelSubmit}>
        <div className="mb-3">
          <label for="id" className="form-label">
            Enter your User-id..
          </label>
          <input
            placeholder="User id"
            type="text"
            ref={userIdElement}
            className="form-control"
            id="id"
          />
        </div>

        <div className="mb-3">
          <label for="title" className="form-label">
            Post Tittle
          </label>
          <input
            placeholder="How are you doing today"
            type="text"
            ref={usertitleElement}
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label for="body" className="form-label">
            Post body
          </label>
          <textarea
            rows="4"
            placeholder="Tell us more about it..."
            type="text"
            ref={userbodyElement}
            className="form-control"
            id="body"
          />
        </div>
        <div className="mb-3">
          <label for="reaction" className="form-label">
            Reaction
          </label>
          <input
            placeholder="No. of Reaction"
            type="text"
            ref={userreactionElement}
            className="form-control"
            id="tireaction"
          />
        </div>

        <div className="mb-3">
          <label for="tags" className="form-label">
            Enter the tag
          </label>
          <input
            placeholder="Please enter the tag using the space"
            type="text"
            ref={usertagsElement}
            className="form-control"
            id="tags"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
        
      </form>
    </>
  );
};

export default Createpost;
