import Link from "next/link";
import React from "react";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div>
      <h1>AboutPage</h1>
      <p>
        <Link href={"/"}>Back to home</Link>
      </p>
    </div>
  );
};

export default AboutPage;
