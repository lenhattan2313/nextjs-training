import React from "react";
import useSWR from "swr";

const fetchDashboard = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};
const SWR = () => {
  const { data, error } = useSWR("dashboard", fetchDashboard);
  if (error) return <h1>Error</h1>;
  if (!data) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>Dashboard SWR</h1>
      <p>news : {data.news}</p>
      <p>products : {data.products}</p>
    </div>
  );
};

export default SWR;
