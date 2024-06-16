import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <>
      <div className="text-center bg-red-500 text-white p-5 font-bold text-2xl">
        User: {userId}
      </div>
    </>
  );
}

export default User;
