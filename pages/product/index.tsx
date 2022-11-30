import Link from "next/link";
import React from "react";

export const getStaticProps = async () => {
  console.count("Regeneration page");
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();
  return {
    props: {
      productList: data,
    },
    revalidate: 10,
  };
};
type Props = {
  productList: any[];
};

const ProductPage = ({ productList }: Props) => {
  return (
    <div>
      <h1>ProductPage</h1>
      <Link href={"/"}>Back to home</Link>
      {productList.map((product) => (
        <div key={product.id}>
          <Link href={`/product/${product.id}`}>
            {product.name} - {product.price}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
