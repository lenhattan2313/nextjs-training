import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";

type Props = {
  news: any[];
};
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "?category=sport" : "";
  const response = await fetch(`http://localhost:4000/news${queryString}`);
  const data = await response.json();
  return {
    props: {
      news: data,
    },
  };
};
const SSR_CSR = ({ news }: Props) => {
  const [data, setData] = useState(news);
  const router = useRouter();
  const handleClick = async () => {
    const response = await fetch(`http://localhost:4000/news?category=sport`);
    const dataRes = await response.json();
    setData(dataRes);
    router.push("/dashboard/SSR-CSR?category=sport", undefined, {
      shallow: true,
    });
  };
  return (
    <div>
      <h1>SSR_CSR</h1>
      <button onClick={handleClick}>Filter sport</button>
      {data.map((value) => (
        <div key={value.id}>
          {value.name} - {value.description} - {value.category}
        </div>
      ))}
    </div>
  );
};

export default SSR_CSR;
