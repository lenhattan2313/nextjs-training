import React, { useEffect, useState } from "react";

const initialState = {
  news: 0,
  products: 0,
};
const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(initialState);
  useEffect(() => {
    let isMounted = true;
    const control = new AbortController();
    (async () => {
      const response = await fetch("http://localhost:4000/dashboard", {
        signal: control.signal,
      });
      const dataRes = await response.json();
      if (isMounted) {
        setData(dataRes);
      }
      setLoading(false);
    })();

    return () => {
      isMounted = false;
      control.abort();
    };
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <p>news : {data.news}</p>
      <p>products : {data.products}</p>
    </div>
  );
};

export default Dashboard;
