import React from "react";
import Main from "../components/Home/Main";
// import Sidebar from "../components/sidebar";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <main className="main-wrap">
        <Header />
        <Main />
      </main>
    </>
  );
};
export default HomeScreen;
