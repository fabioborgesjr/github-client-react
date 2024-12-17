import React from "react";
import { useParams } from "react-router-dom";

const UserDetails: React.FC = () => {
  const { username } = useParams<{ username: string }>();

  return (
    <div className="container mt-5">
      <h1>Details for {username}</h1>
    </div>
  );
};

export default UserDetails;
