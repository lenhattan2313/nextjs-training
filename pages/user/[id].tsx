import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
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
    fallback: true,
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
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Head>
        <title>User {id}</title>
      </Head>
      <h1>DetailUser</h1>
      <Link href="/user">Back to Users</Link>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default DetailUser;
