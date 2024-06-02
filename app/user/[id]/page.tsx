import React from "react";

type Paramsprops = {
  params: { id: string };
};

const UserDetailspage = ({ params }: Paramsprops) => {
  return (
    <div>
      <h1>details user: {params.id}</h1>
    </div>
  );
};

export default UserDetailspage;
