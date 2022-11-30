import Link from "next/link";
import React from "react";

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
