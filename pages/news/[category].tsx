import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";

type Props = {
  category: string;
  articles: any[];
};
export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { category } = context.params as { category: string };
  console.log("running SSR: ", category);
  const response = await fetch(`http:localhost:4000/news?category=${category}`);
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
};
const CategoryPage = ({ category, articles }: Props) => {
  return (
    <div>
      <h1>Category - {category}</h1>
      {articles.map((a) => (
        <div key={a.id}>
          {a.name} = {a.description}
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
