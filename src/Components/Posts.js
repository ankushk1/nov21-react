import React, { useState } from "react";
import PostDetails from "./PostDetails";
import postData from "./Posts.json";


const Posts = () => {

  // const [postDataState, setPostDataState] = useState(postData)

  const [dataFromChild, setDataFromChild] = useState(null);

  console.log(dataFromChild);

  return (
    // <div>
    //   {/* <PostDetails body={postData[0].body} userId={postData[0].it} />
    //   <PostDetails body={postData[1].body} userId={postData[1].it} />
    //   <PostDetails body={postData[2].body} userId={postData[2].it} />
    //   <PostDetails body={postData[3].body} userId={postData[3].it} /> */}
    //   {
    //     postDataState.map((post, idx) => (
    //        <div key={idx}>
    //         <PostDetails body={post.body} userId={post.it} />
    //       </div>
    //     ))
    //   }
    // </div>
    <div>
      <PostDetails setDataFromChild={setDataFromChild}/>
    </div>

  );
};

export default Posts;
