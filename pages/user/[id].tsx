import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import React from "react";

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const paths = data.map((d: { id: number }) => ({
    params: { id: d.id.toString() },
  }));
  return {
    paths: paths.slice(0, 3),
    fallback: false,
  };
};
type IParams = ParsedUrlQuery & {
  id: number;
};
export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id.toString()}`
  );
  const data = await response.json();
  return {
    props: {
      user: data,
    },
  };
};
const DetailUser = ({ user }: { user: any }) => {
  console.log({ user });
  return (
    <div>
      <h1>DetailUser</h1>
      <Link href="/user">Back to Users</Link>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default DetailUser;
