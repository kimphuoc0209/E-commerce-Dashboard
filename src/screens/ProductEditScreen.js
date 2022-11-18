import React from "react";
import Header from "../components/Header";
import EditProductMain from "../components/Products/EditProductMain";
import products from "../data/Products";
import { useParams } from "react-router-dom";

const ProductEditScreen = ({ match }) => {
  const { id } = useParams();
  const productId = products.find((p) => String(p._id) === id);
  return (
    <>
        <Header />
        <EditProductMain productId={productId} />
    </>
  );
};
export default ProductEditScreen;
