import React from "react";
// import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import EditProductMain from "../components/Products/EditProductMain";
import { useParams } from "react-router-dom";

const ProductEditScreen = () => {
  const { id } = useParams();
  const productId = id;
  return (
    <>
      {/* <Sidebar /> */}
      <main className="main-wrap">
        <Header />
        <EditProductMain productId={productId} />
      </main>
    </>
  );
};
export default ProductEditScreen;
