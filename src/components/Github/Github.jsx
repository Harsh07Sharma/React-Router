import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Harsh07Sharma")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="bg-red-700 text-white text-center text-1xl p-3 font-serif">
      Github Followers: {data.followers}
      <img
        className="flex justify-center items-center"
        src={data.avatar_url}
        alt="Profile :"
        width={300}
      />
    </div>
  );
}
export default Github;

export const GithubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/Harsh07Sharma");
  return res.json();
};
