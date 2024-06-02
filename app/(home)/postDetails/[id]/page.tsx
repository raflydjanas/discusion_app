import React from "react";

const PostDetails = ({ params }: { params: { id: number } }) => {
  return (
    <div>
      <h1 className="text-3xl text-white">halo {params.id}</h1>
    </div>
  );
};

export default PostDetails;
