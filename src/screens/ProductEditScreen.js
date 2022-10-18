import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import EditProductMain from "../components/Products/EditProductMain";
import products from "../data/Products";
import { useParams } from "react-router-dom";

const ProductEditScreen = ({ match }) => {
  const { id } = useParams();
  const productId = products.find((p) => String(p._id) === id);
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <EditProductMain productId={productId} />
      </main>
    </>
  );
};
export default ProductEditScreen;
