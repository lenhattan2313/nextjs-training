import Head from "next/head";
import Link from "next/link";
import React from "react";
import Footer from "components/Footer";

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}
type Props = {
  users: any[];
};
const UserPage = ({ users }: Props) => {
  return (
    <div>
      <Head>
        <title>User list</title>
        <meta name="description" content="user list" />
      </Head>
      <h1>UserPage</h1>
      <p>
        <Link href={"/"}>Back to home</Link>
      </p>
      {users.map((user) => (
        <div key={user.id}>
          <Link href={`/user/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default UserPage;
UserPage.getLayout = function PageLayout(page: React.ReactNode) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
