import React from "react";

const PostDetails = (props) => {
  const { userId, body, setDataFromChild } = props;

  const handleStateChange = () => {
    setDataFromChild("This is data from child");
  };
  return (
    <div>
      {/* <div>{userId}</div>
      <div>{body}</div> <br /> */}
      <button onClick={() => handleStateChange()}>Change State</button>
    </div>
  );
};

export default PostDetails;
