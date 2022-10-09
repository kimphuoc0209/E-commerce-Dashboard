import React from "react";
// import Main from "../components/Home/Main";
import Sidebar from "../components/sidebar";
// import Header from "../components/Header";
// import MainProducts from "../components/Products/MainProducts";
import AddProductMain from "../components/Products/AddProductMain";

const HomeScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        {/* <Header />
        <Main /> */}
        {/* <MainProducts /> */}
        <AddProductMain />
      </main>
    </>
  );
};
export default HomeScreen;
