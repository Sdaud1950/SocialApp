import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../Store/Post-list-Store";
import Welcome from "./Welcome";
import Loderr from "./Loderr";

const PostList = () => {
  const { postList, addinitialpost } = useContext(PostListData);

  const [Loder, setLoder] = useState(false);

  // const controller = new AbortController();
  // const signal = controller.signal;

  useEffect(() => {
    setLoder(true);
    fetch("https://dummyjson.com/posts", )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        addinitialpost(data.posts);
        setLoder(false);
      });

    return () => {
      console.log("cleaning by useeffect");
      // controller.abort();
    };
  }, []);

  return (
    <div>
      {Loder && <Loderr></Loderr>}
      {!Loder && postList.length === 0 && <Welcome></Welcome>}
      {!Loder &&
        postList.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
    </div>
  );
};

export default PostList;
