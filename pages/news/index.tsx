import { GetServerSideProps } from "next";
import React from "react";

type Props = {
  articles: any[];
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const previewData = context.previewData;
  console.log("Running news: ", previewData);
  console.log("Running news: ", process.env.DB_USER);
  const response = await fetch("http://localhost:4000/news");
  let data = await response.json();

  return {
    props: {
      articles: context.preview
        ? [{ id: 1, name: "tan", description: "test" }]
        : data,
    },
  };
};
const NewPage = ({ articles }: Props) => {
  return (
    <div>
      <h1>List of news</h1>
      {/* {process.env.DB_USER} */}
      {process.env.NEXT_PUBLIC_USER}
      {articles.map((article) => (
        <div key={article.id}>
          {article.name} - {article.description}
        </div>
      ))}
    </div>
  );
};

export default NewPage;
