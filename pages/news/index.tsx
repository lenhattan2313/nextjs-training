import React from "react";

type Props = {
  articles: any[];
};
export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();
  return {
    props: {
      articles: data,
    },
  };
};
const NewPage = ({ articles }: Props) => {
  return (
    <div>
      <h1>List of news</h1>
      {articles.map((article) => (
        <div key={article.id}>
          {article.name} - {article.description}
        </div>
      ))}
    </div>
  );
};

export default NewPage;
