import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/the-ajay-panigrahi")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);

  const data = useLoaderData();
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="text-2xl bg-slate-700 text-white font-extrabold w-full text-center p-5 ">
          Github Follower's:{" "}
          <span className="ml-2 text-green-500"> {data.followers}</span>
        </div>
        <img
          src={data.avatar_url}
          alt="Profile-Picture"
          className="mb-5 w-64"
        />
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/the-ajay-panigrahi"
  );

  return response.json();
};
