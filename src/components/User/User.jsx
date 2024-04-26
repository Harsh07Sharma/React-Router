import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-gray-700 text-white text-2xl p-3 text-center font-serif ">
      User : {userid}
    </div>
  );
}

export default User;
