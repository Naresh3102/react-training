import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {

  const [data, setData] = useState([])

  const fetchData = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setData(res.data)
    console.log(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h3>Home</h3>
      {data.map((post) => <li key={post.id}>{post.title}</li>)}
    </div>
  );
};

export default Home;
